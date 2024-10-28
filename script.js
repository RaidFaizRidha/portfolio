$(document).ready(function(){
    // Show hide popover
    $(".dropdown").click(function(){
        $(this).find(".dropdown-content").slideToggle("fast");
    });
  });
  
  $(".dropdown-content").click(function(event){
      event.stopPropagation();
  });
  
  $(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-content").slideUp("fast");
    }
  });

$(".simon-game img").mouseenter(function () {
    $(".simon-game .description").show();
    $(".simon-game img").attr("src", "./assets/simon-game.gif");
});

$(".simon-game").mouseleave(function () {
    $(".simon-game .description").hide();
    $(".simon-game img").attr("src", "./assets/simon-game.png");
}).mouseleave();

$(".greener img").mouseenter(function () {
    $(".greener .description").show();
    $(".greener img").attr("src", "./assets/greener.gif");
});

$(".greener").mouseleave(function () {
    $(".greener .description").hide();
    $(".greener img").attr("src", "./assets/greener.png");
}).mouseleave();

$(".drum-kit img").mouseenter(function () {
    $(".drum-kit .description").show();
    $(".drum-kit img").attr("src", "./assets/drum-kit.gif");
});

$(".drum-kit").mouseleave(function () {
    $(".drum-kit .description").hide();
    $(".drum-kit img").attr("src", "./assets/drum-kit.png");
}).mouseleave();

window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
);