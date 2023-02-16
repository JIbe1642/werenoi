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
window.addEventListener('scroll', () => {

    var trigger = Math.round(window.scrollY / window.innerHeight * 1000) / 1000;
    console.log(trigger)

    time = clamp(0, videoMain.duration, trigger * 15);

    if (trigger > mTrigger) {
        if (time > videoMain.currentTime) {
            videoMain.currentTime = time;

        }

    } else {
        videoMain.currentTime = time;
        if (videoMain.currentTime < videoMain.duration) {
            videoMain.play()
        }

    }

    if (videoMain.currentTime == videoMain.duration) {
        last.classList.remove('hide')
    } else {
        last.classList.add('hide')
    }


    content.style.opacity = range(3.5, 4, 1, 0, trigger);
    corps.style.transform=`translateY(${range(3, 5, 0, -80, trigger)}%)`;

    bouro.style.transform=`translate(${range(3, 5, 0, -15, trigger)}%,${range(3, 5, 0, 15, trigger)}%)`;


    mTrigger = trigger;
})