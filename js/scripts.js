/************************
 *  Toggle the day/night UI experience
 *****/
let dayNightElements = [
    document.querySelector('#dayNight'),
    document.querySelector('#heroBox'),
    document.querySelector('#box1'),
    document.querySelector('#box2'),
    document.querySelector('#box3'),
    document.querySelector('#typedElement'),
    document.querySelector('.serviceBoxTitle'),
    document.querySelector('.serviceBoxText'),
    document.querySelector('.serviceBodyText')
];
dayNight.onclick = function () {
    dayNightElements.forEach(item => {
        // check if item is there in the current page's DOM
        if (item != undefined) {
            item.classList.toggle('night');
        }
    });
}

/************************
 *  Animate the typedElement using the external JS Library
 *****/
let typingText = new Typed('#typedElement', {
    strings: ['products', 'customers', 'industries', 'vendors', 'markets', 'competitors'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    cursorChar: '▂',
    smartBackspace: false,
    loop: true
});
