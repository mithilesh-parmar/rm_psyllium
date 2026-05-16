(function () {
  var params = new URLSearchParams(window.location.search);
  var guide = params.get('guide');

  if (guide === 'playbook') {
    if (window.rmTrack) {
      window.rmTrack('guide_download', { guide: 'playbook' });
    }
    window.setTimeout(function () {
      var link = document.querySelector('[data-auto-download]');
      if (link) link.click();
    }, 650);
  }
})();
