$(document).ready(function(){
          let nav_offset_top = $('.header_section').height() + 50;
          function navbarFixed() {
              if ($('.header_section').length) {
                  $(window).scroll(function () {
                      let scroll = $(window).scrollTop();
                      if (scroll >= nav_offset_top) {
                          $('.header_section .main').addClass('navbar_fixed');
                      } else {
                          $('.header_section .main').removeClass('navbar_fixed');
                      }
                  })
              }
          }
         navbarFixed();   
        });


        $(document).ready(function(){
          let $btns = $('.project-section .button-group button');
          $btns.click(function (e) {

            $('.project-section .button-group button').removeClass('active');
                e.target.classList.add('active');
                let selector = $(e.target).attr('data-filter');
                $('.project-section .grid').isotope({
                     filter: selector
                });
              return false;
            })

            $('.project-section .button-group #all').trigger('click');
            $('.project-section .grid .project-link').magnificPopup({
                type: 'image',
                gallery: { enabled: true }
            });  
        });

        function about() {
          window.scrollTo(0,730);
        }
        function skills() {
          window.scrollTo(0,1500);
        }
        function projects() {
          window.scrollTo(0,2180);
        }
        function contact() {
          window.scrollTo(0,2920);
        }


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
