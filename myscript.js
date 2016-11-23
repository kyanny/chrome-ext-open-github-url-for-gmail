window.addEventListener('keyup', function(e) {
  if (e.key === "v") {
    Array.prototype.slice.call(
      document.querySelectorAll('a')
    ).some(function(el) {
      if (el.textContent.match(/^View it on GitHub$/i)) {
        el.click();
        return true;
      }
    });
  }
});
