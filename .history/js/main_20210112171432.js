const timeline = gsap.timeline({defaults: {duration:1}})

timeline
    .to('#intro-bg',{scale:1,opacity:1,duration:2})
    .to('#title',{opacity:1})
    .to('#title-desc',{opacity:1})