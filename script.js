function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }
  
  if (getWindowWidth() <= 767) {
    console.log('success');
  }