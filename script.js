var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(details){
    crsr.style.left=details.x+"px";
    crsr.style.top=details.y+"px";
    blur.style.left=details.x - 200 +"px";
    blur.style.top=details.y - 200 +"px";
})


var h4all=document.querySelectorAll("#nav h4")
// console.log(h4all) /*nodelist of h4 h4 h4 h4 h4 */
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3 //size large
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1 //size normal
        crsr.style.border="0px solid #8AB41F"
        crsr.style.backgroundColor="#8AB41F"
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -2%",                  /* start:"top -25%",
                                            end:"top -70%", */
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.3,  // stagger is used for ek ek krle elements ayenge
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4                                                    
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",    //when c1 is triggered
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4                                                    
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",    
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3                                                   
    }
})