//selector

$(document).ready(function(){
    $("#button1").click(function(){
      $("p").hide();
    });
    $("#buttonshow").click(function(){
        $("p").show();
      });
  });

  $(document).ready(function(){
    $("#button2").click(function(){
      $("#test").hide();
    });
  });

  $(document).ready(function(){
    $("#button3").click(function(){
      $(".test").hide();
    });
  });

  $(document).ready(function(){
    $("#button4").click(function(){
      $(this).hide();
    });
  });
  
  $(document).ready(function(){
    $("#buttontoggle").click(function(){
      $("p").toggle();
    });
  });

  //events

  $(document).ready(function(){
    $(".oneklik").click(function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $(".doubleklik").dblclick(function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $("#hover").hover(function(){
      alert("Kamu memasuki area paragraf dengan fungsi hover");
    },
    function(){
      alert("Bye, Kamu Meninggalkan area paragraf dengan fungsi hover");
    }); 
  });
  
  $(document).ready(function(){
    $(".box").focus(function(){
      $(this).css("background-color", "grey");
    });
    $(".box").blur(function(){
      $(this).css("background-color", "pink");
    });
  });

  //slide

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideUp("slow");
    });
  });

  $(document).ready(function(){
    $("#flipdown").click(function(){
      $("#panel").slideDown("slow");
    });
  });

  //animasi
  $(document).ready(function(){
    $("#buttonAnimasi").click(function(){
      $("div").animate({left: '250px'});
    });
  });
