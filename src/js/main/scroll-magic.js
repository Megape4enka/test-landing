import {TimelineMax} from 'gsap'

(function () {

    let controller = new ScrollMagic.Controller();
    const wipeAnimation = new TimelineMax()
        // animate to second
        .to("#slideContainer", 1, {z: -180} )
        .to("#slideContainer", 1, {x:"-25%"} )
        .to("#slideContainer", 1, {z: 0} )
        // animate to third
        .to("#slideContainer", 1, {z: -180, delay: 0.6} )
        .to("#slideContainer", 1, {x:"-50%"} )
        .to("#slideContainer", 1, {z: 0} )
        // animate to forth
        .to("#slideContainer", 1, {z: -180, delay: 0.6} )
        .to("#slideContainer", 1, {x:"-75%"} )
        .to("#slideContainer", 1, {z: 0} )

    const scene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "600%"
    })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);
}())