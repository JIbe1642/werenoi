// Tools
const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

//const videoIntro=document.querySelector('.video-intro')
const videoMain = document.querySelector('.video-main')
const content = document.querySelector('.wrn-content')
const last = document.querySelector('.wrn-last')
const corps = document.querySelector('.wrn-body')
const bouro = document.querySelector('.wrn-bouro')

var playing = false;
var mTrigger = 0;

// trigger

videoMain.addEventListener('loadeddata', () => {

    console.log('video ok')
    window.addEventListener('scroll', () => {

        var trigger = Math.round(window.scrollY / window.innerHeight * 1000) / 1000;
        //console.log(trigger)



        content.style.opacity = range(1.5, 2, 1, 0, trigger);
        corps.style.transform = `translateY(${range(.5, 3.5, 0, -80, trigger)}%)`;
        bouro.style.transform = `translate(${range(.5, 3.5, 0, -10, trigger)}%,${range(.5, 3.5, 0, 15, trigger)}%)`;

        last.style.transform=`scale(${range(0, .5, 5, 1, trigger)}) translate(${range(0, .5, 0, 0, trigger)}%, ${range(0, .5, -3, 0, trigger)}%)`
        last.style.opacity=range(0, .25, 0, 1, trigger);
        last.style.filter=`blur(${range(0, .6, 5, 0, trigger)}px)`;

        mTrigger = trigger;
    })

})
