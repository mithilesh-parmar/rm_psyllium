import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const HOST = 'rmpsyllium.com';
const KEY = process.env.INDEXNOW_KEY || 'a8d77422ccf043909c759b51cdb9edd7';

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
  console.log('🚀 Running IndexNow post-build processor...');

  if (!KEY || KEY.trim().length < 8) {
    console.log('💡 IndexNow Status: INDEXNOW_KEY environment variable is not defined or is too short.');
    console.log('   Skipping verification file generation and API submission.');
    console.log('   -> To activate IndexNow, add the INDEXNOW_KEY environment variable to your Netlify settings.');
    return;
  }

  const cleanKey = KEY.trim();

  // 1. Generate verification file dynamically in dist/
  const verificationFilePath = path.join(DIST_DIR, `${cleanKey}.txt`);
  try {
    fs.writeFileSync(verificationFilePath, cleanKey, 'utf-8');
    console.log(`✅ Generated IndexNow verification file: dist/${cleanKey}.txt`);
  } catch (err) {
    console.error('❌ Failed to generate IndexNow verification file:', err.message);
    return;
  }

  // 2. Discover URLs
  const urls = getHtmlUrls(DIST_DIR);
  if (urls.length === 0) {
    console.warn('⚠️ No HTML pages found in dist/. Skipping submission.');
    return;
  }
  console.log(`📋 Discovered ${urls.length} pages ready for indexing.`);

  const payload = {
    host: HOST,
    key: cleanKey,
    keyLocation: `https://${HOST}/${cleanKey}.txt`,
    urlList: urls
  };

  const shouldSubmit = process.env.NETLIFY === 'true' || process.env.CONTEXT === 'production' || process.env.INDEXNOW_SUBMIT === 'true';

  if (!shouldSubmit) {
    console.log('❄️ Local/Development build detected. Skipping actual IndexNow API submission.');
    console.log('   Here is a preview of the IndexNow payload:');
    console.log(JSON.stringify({ ...payload, urlList: urls.slice(0, 3).concat('...') }, null, 2));
    return;
  }

  // 3. Submit to Bing API
  try {
    console.log('📤 Submitting batch to IndexNow API...');
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log('✅ IndexNow submission successful! Bing has been notified.');
    } else {
      const text = await response.text();
      console.error(`❌ IndexNow API failed with status ${response.status}:`, text);
    }
  } catch (error) {
    console.error('❌ Failed to connect to IndexNow API:', error.message);
  }
}

run();
