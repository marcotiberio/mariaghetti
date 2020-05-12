// START MENU

  function myFunction3() {
    var x = document.getElementById("start-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
  
// START MENU

// FOLDERS

  $(document).ready(function(){
    $("#notepad-works").click(function(){
        $(".modal-notepad-works").show('fast', 'swing');
    });
    $(".modal-close-notepad-works").click(function(){
        $(".modal-notepad-works").hide(0);
    });
  });

  $(document).ready(function(){
    $("#folder-photos").click(function(){
        $(".modal-photos").show('fast', 'swing');
    });
    $(".modal-close-photos").click(function(){
        $(".modal-photos").hide(0);
    });
});

$(document).ready(function(){
    $("#folder-works").click(function(){
        $(".modal-works").show('fast', 'swing');
    });
    $(".modal-close-works").click(function(){
        $(".modal-works").hide(0);
    });
});

$(document).ready(function(){
    $("#folder-people").click(function(){
        $(".modal-works-people").show('fast', 'swing');
    });
    $(".modal-close-works-people").click(function(){
        $(".modal-works-people").hide(0);
    });
});

$(document).ready(function(){
    $("#folder-type").click(function(){
        $(".modal-works-type").show('fast', 'swing');
    });
    $(".modal-close-works-type").click(function(){
        $(".modal-works-type").hide(0);
    });
});

$(document).ready(function(){
    $("#folder-variations").click(function(){
        $(".modal-works-variations").show('fast', 'swing');
    });
    $(".modal-close-works-variations").click(function(){
        $(".modal-works-variations").hide(0);
    });
});

  $(document).ready(function(){
    $("#pdf").click(function(){
        $(".modal3").show('fast', 'swing');
    });
    $(".modal-close3").click(function(){
        $(".modal3").hide(0);
    });
});

$(document).ready(function(){
    $("#notepad-about").click(function(){
        $(".modal-notepad-about").show('fast', 'swing');
    });
    $(".modal-close-notepad-about").click(function(){
        $(".modal-notepad-about").hide(0);
    });
  });
  
// FOLDERS

$( function() {
  $( "#notepad-about" ).draggable();
} );


// CLOCK

  function clock() { // We create a new Date object and assign it to a variable called "time".
    var time = new Date(),
    
        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),
        
        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes();

    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes);
  
      function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn;
        }
        return standIn;
      }
    }
    setInterval(clock, 1000);
    
// CLOCK


// AUDIO INTRO
    
    $(document).ready(function() {
      $("#intro").get(0).play();
    });
    
// AUDIO INTRO

// SLIDER
    $(document).ready(function(){
      $('.slickslidertype').slick({
      });
    });
    
    $(document).ready(function(){
      $('.slicksliderpeople').slick({
      });
    });
    
    $(document).ready(function(){
      $('.slickslidervariations').slick({
      });
    });

// SLIDER