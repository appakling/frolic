$('#toggle_fullscreen').on('click', function(){
  // if already full screen; exit
  // else go fullscreen
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    $('#container').get(0).requestFullscreen();
  }
});