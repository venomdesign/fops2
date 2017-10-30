    // Set up some global variables
    var menuState = "icon"; // Used to manage the state of the hamburger menu

    function slideMenuOpen(state) {
      if (state === 'icon') {
        // set the menu state
        menuState = 'full';

        // show/hide the menus
        $('#menuContainer').animate({
          width: "15em"
        }, 200, "linear", function () {
          $('#fullSideMenu').show();
          $('#iconSideMenu').hide();
        });

        // swap out the collapse icon
        $('.hamburgerIcon').html('<i id="faHamburgerIcon" class="fa fa-angle-double-left fa-2x fa-inverse"></i>');
      } else {
        // set the menu state
        menuState = 'icon';

        // show/hide the menus
        $('#iconSideMenu').show();
        $('#fullSideMenu').hide();
        $('#menuContainer').animate({
          width: "50px"
        }, 200, "linear");

        // We want burgers!
        $('.hamburgerIcon').html('<i id="faHamburgerIcon" class="fa fa-bars fa-2x fa-inverse"></i>');
      };

    }

    $(document)
      .ready(function () {
        //$('.hamburger').click(function () {
        //  slideMenuOpen(menuState);
        //});

        // set the tooltips for the icon menu, based on user settings
        if (localStorage.getItem('showTooltips') == null) {
          localStorage.setItem('showTooltips', 'true');
        };

         if (localStorage.getItem('showTooltips') === 'true') {
         }
      });