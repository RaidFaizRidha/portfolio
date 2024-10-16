$(".simon-game img").mouseenter(function () {
    $(".simon-game .description").show();
    $(".simon-game img").attr("src", "./assets/simon-game.gif");
});

$(".simon-game").mouseleave(function () {
    $(".simon-game .description").hide();
    $(".simon-game img").attr("src", "./assets/simon-game.png");
}).mouseleave();

$(".tindog img").mouseenter(function () {
    $(".tindog .description").show();
    $(".tindog img").attr("src", "./assets/tindog.gif");
});

$(".tindog").mouseleave(function () {
    $(".tindog .description").hide();
    $(".tindog img").attr("src", "./assets/tindog.png");
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