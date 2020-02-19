// window load event makes sure image is // loaded before running animation
$(window).on("load", function() {

    var tl = new TimelineMax({repeat:-1});
    tl.to("#clouds", 80, {
        backgroundPosition: "-2247px 0px",
        //autoRound:false,
        ease: Linear.easeNone
    });
    
    });