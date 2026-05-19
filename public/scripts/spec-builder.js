(function () {
  var form = document.querySelector('form[name="spec-builder"]');
  if (!form) return;

  var emailInput   = form.querySelector('input[name="email"]');
  var phoneInput   = form.querySelector('input[name="phone"]');
  var errorEl      = document.getElementById('sb-contact-error');

  function hasContact() {
    var email = emailInput ? emailInput.value.trim() : '';
    var phone = phoneInput ? phoneInput.value.trim() : '';
    return email.length > 0 || phone.length > 0;
  }

  function clearError() {
    if (errorEl) errorEl.hidden = true;
    if (emailInput) emailInput.style.borderColor = '';
    if (phoneInput) phoneInput.style.borderColor = '';
  }

  if (emailInput) emailInput.addEventListener('input', clearError);
  if (phoneInput) phoneInput.addEventListener('input', clearError);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!hasContact()) {
      if (errorEl) errorEl.hidden = false;
      if (emailInput) emailInput.style.borderColor = '#c0392b';
      if (phoneInput) phoneInput.style.borderColor = '#c0392b';
      if (emailInput) emailInput.focus();
      return;
    }

    var formData = new FormData(form);
    var encoded  = new URLSearchParams(formData);
    var product  = formData.get('product') || '';
    var name     = formData.get('name') || '';

    if (window.rmTrack) {
      window.rmTrack('spec_builder_submit', { product: product, name: name });
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded.toString()
    }).then(function () {
      window.location.href = '/thank-you?intent=spec&product=' + encodeURIComponent(product);
    }).catch(function () {
      window.location.href = '/thank-you?intent=spec&product=' + encodeURIComponent(product);
    });
  });
})();
