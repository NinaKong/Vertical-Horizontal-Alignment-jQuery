(function(){
    window.console.log("1");
    var target = document.getElementById("Vertical");

    var windowWidth = $(window).width();
    var targetWidth = target.offsetWidth;

    var windowHeight = $(window).height();
    var targetHeight = target.offsetHeight;

    var targetTop = (windowHeight - targetHeight)/2;
    var targetLeft = (windowWidth - targetWidth)/2;

    window.console.log("2");
    document.getElementById("Vertical").style.top = targetTop + "px";
    document.getElementById("Vertical").style.left = targetLeft + "px";
    window.console.log("3");
})();