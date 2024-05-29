let boxes = document.querySelectorAll(".boxes");
let images = document.querySelectorAll(".images");
let scrambleBtn = document.getElementById("scrambleBtn");

const img1 = new Image();
img1.src = "../../images/1.jpg";
const img2 = new Image();
img2.src = "../../images/2.jfif";
const img3 = new Image();
img3.src = "../../images/3.jfif";
const img4 = new Image();
img4.src = "../../images/4.jfif";
const img5 = new Image();
img5.src = "../../images/5.jfif";
const img6 = new Image();
img6.src = "../../images/6.jpg";
const img7 = new Image();
img7.src = "../../images/7.jpg";
const img8 = new Image();
img8.src = "../../images/8.jpg";
const img9 = new Image();
img9.src = "../../images/9.jfif";
const img10 = new Image();
img10.src = "../../images/10.jpg";
const img11 = new Image();
img11.src = "../../images/11.jpg";
const img12 = new Image();
img12.src = "../../images/12.jpg";
const img13 = new Image();
img13.src = "../../images/13.jpg";
const img14 = new Image();
img14.src = "../../images/14.jpg";
const img15 = new Image();
img15.src = "../../images/15.jfif";
const img16 = new Image();
img16.src = "../../images/16.jpg";
const img17 = new Image();
img17.src = "../../images/17.jfif";
const img18 = new Image();
img18.src = "../../images/18.webp";
const img19 = new Image();
img19.src = "../../images/19.jpg";
const img20 = new Image();
img20.src = "../../images/20.jpg";
const img21 = new Image();
img21.src = "../../images/21.jpg";
const img22 = new Image();
img22.src = "../../images/22.jpg";
const img23 = new Image();
img23.src = "../../images/23.jpg";
const img24 = new Image();
img24.src = "../../images/24.jpg";
const img25 = new Image();
img25.src = "../../images/25.jpg";
const img26 = new Image();
img26.src = "../../images/26.jfif";
const img27 = new Image();
img27.src = "../../images/27.jpg";

let imgArray = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
  img8.src,
  img9.src,
  img10.src,
  img11.src,
  img12.src,
  img13.src,
  img14.src,
  img15.src,
  img16.src,
  img17.src,
  img18.src,
  img19.src,
  img20.src,
  img21.src,
  img22.src,
  img23.src,
  img24.src,
  img25.src,
  img26.src,
  img27.src,
];

function getRandomImage() {
  images.forEach((img) => {
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    img.src = imgArray[randomIndex];
  });
}

scrambleBtn.addEventListener("click", getRandomImage);
