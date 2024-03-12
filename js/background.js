const images = ["img0.jpg", "img1.jpg", "img2.jpg"];

const imageChange = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${imageChange}`;

document.body.appendChild(bgImage);

bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.zIndex = "-1";
