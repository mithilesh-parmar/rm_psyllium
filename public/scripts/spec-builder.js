(function () {
  var form = document.querySelector('form[name="spec-builder"]');
  if (!form) return;

  var nameInput    = form.querySelector('input[name="name"]');
  var emailInput   = form.querySelector('input[name="email"]');
  var productInput = form.querySelector('select[name="product"]');
  var countryInput = form.querySelector('input[name="country"]');
  var errorEl      = document.getElementById('sb-contact-error');
  var submitBtn    = form.querySelector('button[type="submit"]');

  var langHidden   = form.querySelector('input[name="language"]');
  var lang         = langHidden ? langHidden.value || 'en' : 'en';

  var requiredErrors = {
    en: 'Please fill in all required fields.',
    es: 'Por favor complete todos los campos obligatorios.',
    fr: 'Veuillez remplir tous les champs obligatoires.',
    de: 'Bitte füllen Sie alle Pflichtfelder aus.',
    nl: 'Vul alle verplichte velden in.',
    it: 'Si prega di compilare tutti i campi obbligatori.',
    pt: 'Por favor, preencha todos os campos obrigatórios.',
    ru: 'Пожалуйста, заполните все обязательные поля.',
    ar: 'يرجى ملء جميع الحقول المطلوبة.',
    zh: '请填写所有必填字段。'
  };

  var submitErrors = {
    en: 'Submission failed. Please check your connection or email export@rmpsyllium.com',
    es: 'Error al enviar. Por favor verifique su conexão o escriba a export@rmpsyllium.com',
    fr: 'Échec de l\'envoi. Veuillez vérifier votre connexion ou écrire à export@rmpsyllium.com',
    de: 'Übermittlung fehlgeschlagen. Bitte Verbindung prüfen oder an export@rmpsyllium.com schreiben',
    nl: 'Verzenden mislukt. Controleer uw verbinding of mail naar export@rmpsyllium.com',
    it: 'Invio fallito. Controlla la connessione o scrivi a export@rmpsyllium.com',
    pt: 'Falha no envio. Verifique sua conexão ou envie um e-mail para export@rmpsyllium.com',
    ru: 'Ошибка отправки. Проверьте соединение или напишите на export@rmpsyllium.com',
    ar: 'فشل الإرسال. يرجى التحقق من اتصالك أو إرسال بريد إلكتروني إلى export@rmpsyllium.com',
    zh: '提交失败。请检查您的网络连接或发送电子邮件至 export@rmpsyllium.com'
  };

  var defaultRequiredError = requiredErrors[lang] || requiredErrors.en;
  var defaultSubmitError = submitErrors[lang] || submitErrors.en;

  function clearError() {
    if (errorEl) {
      errorEl.hidden = true;
      errorEl.textContent = '';
    }
    [nameInput, emailInput, productInput, countryInput].forEach(function (el) {
      if (el) el.style.borderColor = '';
    });
  }

  [nameInput, emailInput, productInput, countryInput].forEach(function (el) {
    if (el) {
      el.addEventListener('input', clearError);
      el.addEventListener('change', clearError);
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var hasError = false;
    var firstInvalidEl = null;

    // Validate name
    if (nameInput && !nameInput.value.trim()) {
      nameInput.style.borderColor = '#c0392b';
      hasError = true;
      if (!firstInvalidEl) firstInvalidEl = nameInput;
    }

    // Validate email / phone
    if (emailInput && !emailInput.value.trim()) {
      emailInput.style.borderColor = '#c0392b';
      hasError = true;
      if (!firstInvalidEl) firstInvalidEl = emailInput;
    }

    // Validate product selection
    if (productInput && !productInput.value.trim()) {
      productInput.style.borderColor = '#c0392b';
      hasError = true;
      if (!firstInvalidEl) firstInvalidEl = productInput;
    }

    // Validate country
    if (countryInput && !countryInput.value.trim()) {
      countryInput.style.borderColor = '#c0392b';
      hasError = true;
      if (!firstInvalidEl) firstInvalidEl = countryInput;
    }

    if (hasError) {
      if (errorEl) {
        errorEl.textContent = defaultRequiredError;
        errorEl.hidden = false;
      }
      if (firstInvalidEl) {
        firstInvalidEl.focus();
      }
      return;
    }

    // Disable submit button during fetch to prevent double clicks
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';
      submitBtn.style.cursor = 'not-allowed';
    }

    var formData = new FormData(form);
    var encoded  = new URLSearchParams(formData);
    var product  = formData.get('product') || '';
    var name     = formData.get('name') || '';

    if (window.rmTrack) {
      window.rmTrack('spec_builder_submit', { product: product, name: name });
    }

    // POST to window.location.pathname to prevent Netlify redirects that drop body data
    fetch(window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded.toString()
    }).then(function (response) {
      if (response.ok) {
        window.location.href = '/thank-you?intent=spec&product=' + encodeURIComponent(product);
      } else {
        throw new Error('Network response not ok');
      }
    }).catch(function (error) {
      console.error('Netlify form submission failed:', error);
      // Re-enable submit button so they can try again or check info
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        submitBtn.style.cursor = '';
      }
      if (errorEl) {
        errorEl.textContent = defaultSubmitError;
        errorEl.hidden = false;
      }
    });
  });
})();
