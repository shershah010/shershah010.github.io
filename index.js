document.querySelector(".circle").addEventListener("mousemove", function(e) {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    let theta = Math.atan2(y, x) + (Math.PI / 2);
    theta = theta * 180 / Math.PI;
    console.log(theta);
    this.setAttribute("style", "transform: translate(-50%, -50%) rotate(" + theta + "deg)")
});
