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

document.addEventListener('scroll', () => {
    const projects = document.querySelectorAll('.project');
    const triggerBottom = window.innerHeight / 5 * 4; // Change value for trigger point

    projects.forEach(project => {
        const boxTop = project.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            project.classList.add('visible');
        }
    });
});
