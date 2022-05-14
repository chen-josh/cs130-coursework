/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

let currentIndex = 0;

const images = [
    'images/beach1.jpg',
    'images/beach2.jpg',
    'images/beach3.jpg',
    'images/beach4.jpg',
    'images/beach5.jpg',
    'images/beach6.jpg',
    'images/beach7.jpg',
    'images/beach8.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
        idx += 1;
    });
};

const showImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    // console.log("currentIndex:", currentIndex);
    displayImage();
}

const displayImage = () => {
    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;
}

const showNext = () => {
    currentIndex += 1;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    displayImage();
}

const showPrev = () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    displayImage();
}

const attachEventHandlers = () => {
    for (const elem of document.querySelectorAll('.image')) {
        elem.onclick = showImage;
    }
    document.querySelector('.next').onclick = showNext;
    document.querySelector('.prev').onclick = showPrev;
    document.querySelector('.featured_image').onclick = showNext;
}

initScreen();
attachEventHandlers();