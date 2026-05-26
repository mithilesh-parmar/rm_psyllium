import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const HOST = 'rmpsyllium.com';
const TOKEN = process.env.BAIDU_PUSH_TOKEN;

// Recursive HTML scanner
function getHtmlUrls(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getHtmlUrls(fullPath, list);
    } else if (item.endsWith('.html') && item !== '404.html') {
      const relative = path.relative(DIST_DIR, fullPath);
      let urlPath = relative.replace(/index\.html$/, '');
      urlPath = urlPath.replace(/\\/g, '/'); // Normalize Windows paths
      
      list.push(`https://${HOST}/${urlPath}`);
    }
  }
  return list;
}

async function run() {
  console.log('🚀 Running Baidu Link Submission Active Push...');

  if (!TOKEN || TOKEN.trim().length < 5) {
    console.log('💡 Baidu Status: BAIDU_PUSH_TOKEN environment variable is not defined.');
    console.log('   Skipping Baidu push submission.');
    console.log('   -> To activate Baidu Active Push, add the BAIDU_PUSH_TOKEN environment variable to your Netlify settings.');
    return;
  }

  // 1. Discover all URLs and filter only for Chinese (/zh/) language URLs
  const urls = getHtmlUrls(DIST_DIR);
  const zhUrls = urls.filter(url => url.includes('/zh/'));

  if (zhUrls.length === 0) {
    console.log('⚠️ No Chinese (/zh/) pages found in dist/. Skipping Baidu submission.');
    return;
  }

  console.log(`📋 Discovered ${zhUrls.length} Chinese pages ready for Baidu indexing.`);

  // Baidu expects urls separated by newlines \n in text/plain format
  const payload = zhUrls.join('\n');

  const isDryRun = process.env.BAIDU_DRY_RUN === 'true';

  if (isDryRun) {
    console.log('❄️ Baidu Dry-Run Mode active. Skipping actual API submission.');
    console.log('   Here is a preview of the Baidu push URLs:');
    console.log(zhUrls.slice(0, 5).join('\n') + (zhUrls.length > 5 ? '\n...' : ''));
    return;
  }

  // 2. Submit to Baidu Active Push API
  try {
    console.log('📤 Pushing URLs to Baidu API...');
    const response = await fetch(`http://data.zz.baidu.com/urls?site=https://${HOST}&token=${TOKEN.trim()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: payload
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log(`✅ Baidu active push successful!`);
      console.log(`   Success: ${result.success} URLs pushed.`);
      console.log(`   Remaining push quota for today: ${result.remain}`);
    } else {
      console.error(`❌ Baidu API failed:`, result.message || result);
    }
  } catch (error) {
    console.error('❌ Failed to connect to Baidu Active Push API:', error.message);
  }
}

run();
