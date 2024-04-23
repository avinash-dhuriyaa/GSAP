 let tl = gsap.timeline()
 tl.from("#nav h3",{
     y:-50,
     opacity:0,
     duration : 0.8,
     delay : 0.3,
     stagger:0.3 
})
   
tl.from("#main h1",{
     x:-500,
     opacity:0,
     duration : 0.8,
     stagger:0.4 
})
tl.from("img",{
     x:100,
     opacity:0,
     rotate :180,
     duration : 0.6,
     stagger:0.6 
    
})
var typingEffect = new Typed("h1",{
     strings : ["Frontend Developer"],
     loop : true,
     typeSpeed : 100, 
     backSpeed : 80,
     backDelay : 2000
   })
   