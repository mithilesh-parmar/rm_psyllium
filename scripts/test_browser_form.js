import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Launch puppeteer configuration
const puppeteer = (await import('puppeteer')).default;

const multilingualPages = [
  {
    langName: 'English (EN)',
    url: 'https://rmpsyllium.com/en/products/psyllium-husk-powder/#spec',
    langCode: 'en',
    product: 'Psyllium Husk Powder',
    buyer: 'James Carter',
    company: 'Carter Wellness Products LLC',
    email: 'j.carter@carterwellness.com',
    country: 'United States',
    message: 'We require 5 MT of 80 mesh psyllium husk powder monthly. Shipped FOB Mundra port. Please send your current price list and NABL COA.'
  },
  {
    langName: 'Spanish (ES)',
    url: 'https://rmpsyllium.com/es/contact/',
    langCode: 'es',
    product: 'Psyllium Husk',
    buyer: 'Elena Rodríguez',
    company: 'Importaciones Alimentarias Rodríguez',
    email: 'e.rodriguez@rodriguezimport.es',
    country: 'Spain',
    message: 'Hola, estamos interesados en importar cáscara de psyllium en bolsas de 25 kg. Por favor envíe especificaciones y cotización CIF puerto de Valencia.'
  },
  {
    langName: 'French (FR)',
    url: 'https://rmpsyllium.com/fr/products/psyllium-husk/#spec',
    langCode: 'fr',
    product: 'Psyllium Husk',
    buyer: 'Pierre Laurent',
    company: 'Laurent Ingrédients SA',
    email: 'p.laurent@laurentingredients.fr',
    country: 'France',
    message: 'Bonjour, demande de prix FOB Mundra pour de la cosse de psyllium (pureté 99%). Pouvez-vous nous envoyer un certificat d\'analyse (COA) ?'
  },
  {
    langName: 'German (DE)',
    url: 'https://rmpsyllium.com/de/products/organic-psyllium/#spec',
    langCode: 'de',
    product: 'Organic Psyllium',
    buyer: 'Dieter Fischer',
    company: 'Fischer Reformhaus GmbH',
    email: 'd.fischer@fischerreformhaus.de',
    country: 'Germany',
    message: 'Sehr geehrte Damen und Herren, wir suchen einen zuverlässigen Lieferanten für Bio-Psylliumschalen. Bitte senden Sie uns Ihr Angebot und Spezifikationen.'
  },
  {
    langName: 'Dutch (NL)',
    url: 'https://rmpsyllium.com/nl/products/psyllium-seeds/#spec',
    langCode: 'nl',
    product: 'Psyllium Seeds',
    buyer: 'Jan de Jong',
    company: 'De Jong Biologische Producten',
    email: 'j.dejong@dejongorganics.nl',
    country: 'Netherlands',
    message: 'Beste, wij zijn geïnteresseerd in de afname van EU-NOP gecertificeerde biologische sementes. Graag ontvangen we specificaties en een monster.'
  },
  {
    langName: 'Italian (IT)',
    url: 'https://rmpsyllium.com/it/products/industrial-grade-psyllium/#spec',
    langCode: 'it',
    product: 'Industrial Grade Psyllium',
    buyer: 'Alessandro Rossi',
    company: 'Rossi Integratori Naturali',
    email: 'a.rossi@rossiintegratori.it',
    country: 'Italy',
    message: 'Salve, vorremmo richiedere una quotazione e campioni per polvere di buccia di psyllium industriale per sachet di integratori.'
  },
  {
    langName: 'Portuguese (PT)',
    url: 'https://rmpsyllium.com/pt/contact/',
    langCode: 'pt',
    product: 'Organic Psyllium',
    buyer: 'Mateus Silva',
    company: 'Silva Nutracêuticos Ltda',
    email: 'm.silva@silvanutraceuticos.com.br',
    country: 'Portugal',
    message: 'Gostaria de solicitar uma cotação FOB para sementes de psyllium selecionadas (99% pureza). Qual é o prazo de entrega para 5 toneladas?'
  },
  {
    langName: 'Russian (RU)',
    url: 'https://rmpsyllium.com/ru/products/psyllium-khakha-powder/#spec',
    langCode: 'ru',
    product: 'Psyllium Khakha Powder',
    buyer: 'Дмитрий Смирнов',
    company: 'Smirnov Pharma LLC',
    email: 'd.smirnov@smirnovpharma.ru',
    country: 'Russia',
    message: 'Здравствуйте! Нас интересует регулярная поставка шелухи псиллиума качества USP/EP. Пожалуйста, пришлите текущие цены и форму сертификата COA.'
  },
  {
    langName: 'Arabic (AR)',
    url: 'https://rmpsyllium.com/ar/products/psyllium-cattle-feed/#spec',
    langCode: 'ar',
    product: 'Psyllium Cattle Feed',
    buyer: 'فهد المنصوري',
    company: 'Al-Jazeera Trade & Feed',
    email: 'sourcing@aljazeeratrade.ae',
    country: 'United Arab Emirates',
    message: 'مرحبًا، نحن مهتمون باستيراد قشور السيليوم للأعلاف (درجة Sagar Gola). يرجى إرسال تفاصيل الأسعار ومواصفات الشحن.'
  },
  {
    langName: 'Chinese (ZH)',
    url: 'https://rmpsyllium.com/',
    langCode: 'zh',
    product: 'Psyllium Seeds',
    buyer: '张伟',
    company: 'Wei Foods Trading Ltd',
    email: 'zhang.wei@weifoodstrading.cn',
    country: 'China',
    message: '您好！我们正在寻找高品质车前子壳粉（80目/99%纯度）的供应商。请提供大宗采购价格和分析证书 (COA)。'
  }
];

async function runMultilingualAudit() {
  console.log('🖥️  Launching headed Chrome to execute form submissions in all 10 languages...\n');
  
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const results = [];

  try {
    for (let i = 0; i < multilingualPages.length; i++) {
      const target = multilingualPages[i];
      console.log(`--------------------------------------------------`);
      console.log(`🧪 [${i + 1}/${multilingualPages.length}] Testing Language: ${target.langName}`);
      console.log(`🔗 URL: ${target.url}`);
      
      const page = await browser.newPage();
      
      // Go to page
      await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 60000 });
      
      console.log('⚡ Scrolling page directly to the form...');
      const formSelector = 'form[name="spec-builder"]';
      await page.waitForSelector(formSelector, { visible: true });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, formSelector);
      
      await new Promise(r => setTimeout(r, 1500));

      // Fill Name
      console.log(`✍️  Filling Name: ${target.buyer}`);
      await page.type('form[name="spec-builder"] input[name="name"]', target.buyer, { delay: 30 });
      
      // Fill Email
      console.log(`✍️  Filling Email: ${target.email}`);
      await page.type('form[name="spec-builder"] input[name="email"]', target.email, { delay: 30 });
      
      // Select Product interest
      console.log(`✍️  Selecting Product: ${target.product}`);
      const selectSelector = 'form[name="spec-builder"] select[name="product"]';
      const selectElement = await page.$(selectSelector);
      if (selectElement) {
        const optionValue = await page.evaluate((sel, prodName) => {
          const select = document.querySelector(sel);
          if (!select) return '';
          for (const opt of select.options) {
            if (opt.text.toLowerCase().includes(prodName.toLowerCase()) || opt.value.toLowerCase().includes(prodName.toLowerCase())) {
              return opt.value;
            }
          }
          return '';
        }, selectSelector, target.product);

        if (optionValue) {
          await page.select(selectSelector, optionValue);
        }
      }
      
      // Fill Country
      console.log(`✍️  Filling Country: ${target.country}`);
      await page.type('form[name="spec-builder"] input[name="country"]', target.country, { delay: 30 });
      
      // Fill Company
      console.log(`✍️  Filling Company: ${target.company}`);
      await page.type('form[name="spec-builder"] input[name="company"]', target.company, { delay: 30 });
      
      // Fill Message
      console.log(`✍️  Filling Message: ${target.message.substring(0, 40)}...`);
      await page.type('form[name="spec-builder"] textarea[name="message"]', target.message + ` [MULTILINGUAL AUDIT: ${target.langCode.toUpperCase()}]`, { delay: 10 });
      
      await new Promise(r => setTimeout(r, 1000));
      
      console.log('🚀 Clicking submit button...');
      const submitBtnSelector = 'form[name="spec-builder"] button[type="submit"]';
      
      try {
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }),
          page.click(submitBtnSelector)
        ]);
        
        const currentUrl = page.url();
        console.log(`🛬 Form submitted! Navigation reached: ${currentUrl}`);
        
        if (currentUrl.includes('thank-you')) {
          console.log(`✅ SUCCESS: Multilingual form submission processed and redirected successfully!`);
          results.push({ lang: target.langName, code: target.langCode, url: target.url, buyer: target.buyer, status: 'PASSED' });
        } else {
          console.log(`❌ WARNING: Redirected to unexpected page: ${currentUrl}`);
          results.push({ lang: target.langName, code: target.langCode, url: target.url, buyer: target.buyer, status: `WARNING (${currentUrl})` });
        }
      } catch (submitErr) {
        console.log(`❌ SUBMIT ERROR: Timeout during submission.`, submitErr.message);
        results.push({ lang: target.langName, code: target.langCode, url: target.url, buyer: target.buyer, status: 'FAILED (Timeout)' });
      }

      await new Promise(r => setTimeout(r, 1500));
      await page.close();
      console.log(`\n`);
    }
  } catch (err) {
    console.error(`💥 Multilingual automation error:`, err);
  } finally {
    console.log('🔌 Closing browser...');
    await browser.close();
    
    console.log('\n==================================================');
    console.log('📊 Multilingual Form Submission Audit Final Summary:');
    console.log('==================================================');
    for (const r of results) {
      console.log(`- [${r.lang}] submitted as "${r.buyer}" -> ${r.status}`);
    }
    console.log('==================================================\n');
  }
}

runMultilingualAudit();
