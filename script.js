function locomotiveinitialize(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveinitialize();
var tl = gsap.timeline()
tl.from("#smile",{
    duration: 1.5,
    rotation: "-50_short",
    repeat: -1,
    ease: Sine.easeInOut,
    yoyo: true
})  
.from("#smile",{
  y:20,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
.from("#smile2",{
  duration: 1.5,
  rotation: "-50_short",
  repeat: -1,
  ease: Sine.easeInOut,
  yoyo: true
})  
.to("#section2>#innerimg",{
rotation: "360",
duration: 40,
repeat: -1,
// yoyo: true,
ease: Sine.easeInOut
})  

.to("#section2>#outerimg",{
  rotation: "-360",
  duration: 40,
  repeat: -1,
  // yoyo: true,
  ease: Sine.easeInOut
  },"")  
.from("#section1>#wc",{
  y:20,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
.from("#section1>h2",{
  y:40,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
.from("#section1>#circlediv",{
  y:50,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
.from("#section1>#brackets",{
  y:40,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
.from("#section1>#arrowup1",{
  y:70,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
.from("#section1>#downarrow1",{
  y:-10,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
.from("#section1>h3",{
  y:70,
  opacity: 0,
  duration:1,
  ease: Expo.easeInOut,
},"")
gsap.from("#works",{
  scrollTrigger:{
    scroller: "#main",
    trigger: "#works",
    // markers:true,
    start: "top 110%",
    end: "top 50%",
    scrub:3
  },
  y:50,
  duration:1,
  opacity:0
})

gsap.to("#inner1",{
  scrollTrigger:{
  scroller:"#main",
  trigger:"#inner1",
  scrub:1,
  // markers:true,
  },
  borderRadius: "0%"
})
gsap.to("#inner2",{
  scrollTrigger:{
  scroller:"#main",
  trigger:"#inner2",
  scrub:1,
  // markers:true,
  // start:"top 80%"
  },
  borderRadius: "0%"
})
gsap.to("#inner3",{
  scrollTrigger:{
  scroller:"#main",
  trigger:"#inner3",
  scrub:1,
  // markers:true,
  // start:"top 60%"
  },
  borderRadius: "0%"
})
gsap.to("#inner4",{
  scrollTrigger:{
  scroller:"#main",
  trigger:"#inner4",
  scrub:1,
  // markers:true,
  // start:"top 40%"
  },
  borderRadius: "0%"
})
gsap.to("#inner5",{
  scrollTrigger:{
  scroller:"#main",
  trigger:"#inner5",
  scrub:1,
  // markers:true,
  // start:"top 20%"
  },
  borderRadius: "0%"
})
gsap.from("#inner1>h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner1>h1",
    scrub:2,
    start:"top 50%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner1>h2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner1>h2",
    scrub:2,
    start:"top 85%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner2>h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner2>h1",
    scrub:2,
    start:"top 50%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner2>h2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner2>h2",
    scrub:2,
    start:"top 85%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner3>h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner3>h1",
    scrub:2,
    start:"top 50%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner3>h2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner3>h2",
    scrub:2,
    start:"top 85%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner4>h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner4>h1",
    scrub:2,
    start:"top 50%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner4>h2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner4>h2",
    scrub:2,
    start:"top 85%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner5>h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner5>h1",
    scrub:2,
    start:"top 50%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
gsap.from("#inner5>h2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#inner5>h2",
    scrub:2,
    start:"top 85%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})

gsap.from("#section5>h2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section5>h2",
    scrub:2,
    start:"top 85%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})

gsap.from("#section5>h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section5>h1",
    scrub:2,
    start:"top 85%",
    end:"top 25%",
    // markers:true
  },
  y:20,
  opacity:0
})
// var tl = new TimelineMax();
// var r1 = 10;
// var r2 = 0;
// var SPEED = 0.3;

// function addRadius1() { 
//   tl.to("#inner1", SPEED, {borderRadius: "+=" + r1 + "%"});  
// }

// function addRadius2() { 
//   r2 += 10;
//   tl.to("#inner1", SPEED, {borderRadius: r2 + "%"});  
// }
// addRadius1();
// addRadius2();