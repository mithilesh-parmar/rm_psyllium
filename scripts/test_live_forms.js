const targets = [
  {
    name: 'English Homepage',
    originUrl: 'https://rmpsyllium.com/',
    postUrl: 'https://rmpsyllium.com/', // Currently, the live site posts to '/'
    lang: 'en',
    product: 'psyllium-husk'
  },
  {
    name: 'Spanish Homepage',
    originUrl: 'https://rmpsyllium.com/es/',
    postUrl: 'https://rmpsyllium.com/', // Currently, the live site posts to '/'
    lang: 'es',
    product: 'psyllium-husk'
  },
  {
    name: 'English Contact Page',
    originUrl: 'https://rmpsyllium.com/en/contact/',
    postUrl: 'https://rmpsyllium.com/', // Currently, the live site posts to '/'
    lang: 'en',
    product: 'psyllium-husk'
  },
  {
    name: 'Spanish Contact Page',
    originUrl: 'https://rmpsyllium.com/es/contact/',
    postUrl: 'https://rmpsyllium.com/', // Currently, the live site posts to '/'
    lang: 'es',
    product: 'psyllium-husk'
  },
  {
    name: 'English Product Page (Psyllium Husk Powder)',
    originUrl: 'https://rmpsyllium.com/en/products/psyllium-husk-powder/',
    postUrl: 'https://rmpsyllium.com/', // Currently, the live site posts to '/'
    lang: 'en',
    product: 'psyllium-husk-powder'
  },
  {
    name: 'Spanish Product Page (Psyllium Husk Powder)',
    originUrl: 'https://rmpsyllium.com/es/products/psyllium-husk-powder/',
    postUrl: 'https://rmpsyllium.com/', // Currently, the live site posts to '/'
    lang: 'es',
    product: 'psyllium-husk-powder'
  }
];

async function runTest() {
  console.log('🚀 Starting Form Submission Audit to Live Netlify Site...\n');

  for (const target of targets) {
    console.log(`--------------------------------------------------`);
    console.log(`📄 Testing Form on page: ${target.name}`);
    console.log(`🔗 Origin Page URL: ${target.originUrl}`);
    console.log(`📤 Sending POST to: ${target.postUrl}`);

    const payload = new URLSearchParams({
      'form-name': 'spec-builder',
      'bot-field': '',
      'language': target.lang,
      'name': `Live Audit: ${target.name}`,
      'email': `audit-test-${target.lang}@antigravity.ai`,
      'product': target.product,
      'country': 'United States',
      'company': 'Antigravity Form Auditor',
      'message': `Automated verification test from page: ${target.name} (Lang: ${target.lang}, Product: ${target.product})`
    });

    try {
      const response = await fetch(target.postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Referer': target.originUrl,
          'User-Agent': 'Antigravity-Form-Auditor/1.0',
          'Accept-Language': target.lang === 'es' ? 'es-ES,es;q=0.9' : 'en-US,en;q=0.9'
        },
        body: payload.toString(),
        redirect: 'manual' // Let us see if Netlify redirects the POST!
      });

      console.log(`📶 HTTP Status Code: ${response.status}`);
      console.log(`🏷️  Content-Type: ${response.headers.get('content-type')}`);
      console.log(`🆔  x-nf-request-id: ${response.headers.get('x-nf-request-id') || 'None (Netlify Forms did NOT process this request)'}`);

      const bodyText = await response.text();
      const first150Chars = bodyText.substring(0, 150).replace(/\s+/g, ' ');
      console.log(`📝 Response Body Preview: "${first150Chars}..."`);

      const isNetlifyIntercepted = response.headers.get('x-nf-request-id') && 
        (bodyText.includes('Thank you') || bodyText.includes('received') || bodyText.includes('submission') || response.status === 303 || response.status === 302);

      if (response.status >= 300 && response.status < 400) {
        const redirectUrl = response.headers.get('location');
        console.log(`❌ FAILED (Redirected): Status ${response.status} to: ${redirectUrl}`);
        console.log(`⚠️  Warning: A redirected POST request drops the body data, causing submission loss in Netlify Forms.`);
      } else if (isNetlifyIntercepted || (response.status === 200 && !bodyText.includes('<!DOCTYPE html>'))) {
        console.log(`✅ SUCCESS: Form successfully received by Netlify Forms endpoint.`);
      } else {
        console.log(`❌ FAILURE: Netlify did NOT intercept this form submission. It served the static homepage HTML instead.`);
      }
    } catch (err) {
      console.log(`💥 CRITICAL ERROR: ${err.message}`);
    }
    console.log(`\n`);
  }
}

runTest();
