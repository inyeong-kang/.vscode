const images = [
    "turtle.jpg","seal.jpg","polarbear.png","penguin.jpg","plant.jpg","earth.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bodyStyle = document.body.style;
bodyStyle.background = `url('img/${chosenImage}') no-repeat`;
bodyStyle.backgroundSize = 'cover';
