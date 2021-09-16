
const myImages = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg',
    'images/img10.jpg'
];



let count = 0;
const img = document.getElementById('img');
setInterval(() => {
    if (count >= myImages.length) {
        count = 0
    }
    const url = myImages[count]
    img.setAttribute('src', url);
    count++;
}, 2000)