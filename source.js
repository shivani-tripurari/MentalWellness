var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 80 + "px";
  blur.style.top = dets.y - 80 + "px";
});


gsap.to("#nav",{
    backgroundColor : "rgba(0,0,0,0.75)",
    height:"75px",
    duration: 1,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        //markers: true,
        start:"top -40%",
        end: "top -10%",
        scrub: 2
    },
});

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        start:"top -50%",
        end:"top -100%",
        scrub:1
    },
});

gsap.to("#hero-img",{
    opacity: 0.45,
    scrollTrigger:{
        trigger: "#hero-img",
        scroller:"body",
        start:"top -50%",
        end:"top -70%",
        scrub: 1
    }

});

gsap.to("#hero-img",{
    opacity: 0,
    scrollTrigger:{
        trigger: "#hero-img",
        scroller:"body",
        start:"top -70%",
        end:"top -100%",
        scrub: 1
    }

});

gsap.from(".design ",{
    y:50,
    opacity: 0,
    duration: 1,
    delay:0.7,
    scrollTrigger:{
        trigger: ".design",
        scroller:"body",
        //markers: true,
        start: "top 70%",
        end: "top 68%",
        scrub: 3
    }
});

gsap.from("#f-img ",{
    scale:1.2,
    opacity: 0,
    duration: 1.2,
    delay:1,
    scrollTrigger:{
        trigger: "#f-img",
        scroller:"body",
        //markers: true,
        start: "top 66%",
        end: "top 60%",
        scrub: 2
    }
});