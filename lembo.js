


// $(document).ready(function() {
//     let interval = setInterval(nextSlide, 2200);
//     function nextSlide() {
//         let $activeSlide = $('.active');
//         let $nextSlide = $activeSlide.next('.slide');
//         if ($nextSlide.length > 0) {
//             $nextSlide.addClass('active');
//             $activeSlide.removeClass('active');
//         } else {
//             clearInterval(interval); 
//         }
//     }
// });

var page = document.querySelector(".nava")
var cursor = document.querySelector(".page")
page.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
page.addEventListener("mouseenter",function(){
gsap.to(cursor,{
    scale:1,
    opacity:1
})
})

page.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
    })

var tl=gsap.timeline()
tl.from(".nav1",{
    y:-150,
        duration:2,
        delay:1.4,
        stagger:1
})
    tl.from(".lembotext",{
        x:-1500,
        duration:2,
        delay:0.4
    })
    tl.from(".lembotext1",{
        y:1500,
        duration:2,
        delay:0.4,
        stagger:1
    })

gsap.to(".imagea .image",{
    transform:"translateX(-675%)",
    scrollTrigger:{
        trigger:".imagea ",
        scroller:"body",
        
        start:"top 10%",
        scrub:2,
        pin:true
    }
})



