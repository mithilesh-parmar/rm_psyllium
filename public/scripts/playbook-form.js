(function () {
  var form = document.querySelector('form[name="playbook-download"]');
  if (!form) return;

  form.addEventListener('submit', function () {
    if (window.rmTrack) {
      window.rmTrack('guide_download_request', {
        guide: 'playbook'
      });
    }
  });
})();
