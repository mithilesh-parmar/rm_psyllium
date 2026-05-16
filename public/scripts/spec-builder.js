(function () {
  var form = document.querySelector('form[name="spec-builder"]');
  if (!form) return;

  var slider = form.querySelector('input[name="mesh"]');
  var display = document.getElementById('mesh-display');

  function syncMesh() {
    if (slider && display) {
      display.textContent = slider.value + ' mesh';
    }
  }

  if (slider) {
    slider.addEventListener('input', syncMesh);
    syncMesh();
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(form);
    var encoded = new URLSearchParams(formData);
    var grade = formData.get('grade') || '';
    var mesh = formData.get('mesh') || '';
    var pack = formData.get('packaging') || '';
    var product = formData.get('product') || '';
    var region = formData.get('region') || '';
    var industry = formData.get('industry') || '';
    var bookingUrl = form.getAttribute('data-booking-url') || '';
    var params = new URLSearchParams({ product: product, region: region, industry: industry, grade: grade, mesh: mesh, pack: pack });

    if (window.rmTrack) {
      window.rmTrack('spec_builder_submit', {
        product: product,
        region: region,
        industry: industry,
        grade: grade,
        mesh: mesh,
        packaging: pack
      });
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded.toString()
    }).then(function () {
      if (bookingUrl) {
        window.location.href = bookingUrl + '?' + params.toString();
      } else {
        window.location.href = '/thank-you?intent=spec&' + params.toString();
      }
    }).catch(function () {
      window.location.href = '/thank-you?intent=spec&' + params.toString();
    });
  });
})();
