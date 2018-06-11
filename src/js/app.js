$(document).ready(() => {
  init();

  function init() {
    goToThatSpot("#about-link", "#about");
    goToThatSpot("#projects-link", "#projects");
    goToThatSpot("#contact-link", "#contact");
  }

  function goToThatSpot(spot1, spot2) {
    $(spot1).on('click', function(){
      var loc = spot2;
        $('html, body').animate({
            scrollTop: $(loc).offset().top
        }, 1000);
    });
  }
})
