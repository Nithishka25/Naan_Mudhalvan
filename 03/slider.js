<<<<<<< HEAD
// // let a = 10; => local scope
// // var b = 20; => global scope

// // outer box
// {
//   //inner box
//   {
//         // let a = 10;
//         const a=10
//         var b = 20;
//         a=30
//     console.log(a);
//   }
//     console.log(b);
//     {
//         console.log(b);
//     }
// }
const con = document.getElementById("container");
const miniImg = document.getElementsByClassName("myimg");
console.log(miniImg);
let img = [
  "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://4kwallpapers.com/images/walls/thumbs_3t/21603.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/21608.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/19448.jpg ",
];

let i = 0;
function next() {
  miniImg[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
  con.style.transitionDuration = "1s";
}
// function prev() {
//   i--;
//   if (i < 0) {
//     i = img.length - 1;
//   }
//   con.style.backgroundImage = 'url("' + img[i] + '")';
//   con.style.transitionDuration = "1s";
// }
function prev() {
  miniImg[i].classList.remove("active"); // Remove 'active' class from the current thumbnail
  i--;
  if (i < 0) {
    i = img.length - 1; // Loop back to the last image
  }
  miniImg[i].classList.add("active"); // Add 'active' class to the previous thumbnail
  con.style.backgroundImage = `url("${img[i]}")`;
  con.style.transitionDuration = "1s";
}
=======
// // let a = 10; => local scope
// // var b = 20; => global scope

// // outer box
// {
//   //inner box
//   {
//         // let a = 10;
//         const a=10
//         var b = 20;
//         a=30
//     console.log(a);
//   }
//     console.log(b);
//     {
//         console.log(b);
//     }
// }
const con = document.getElementById("container");
const miniImg = document.getElementsByClassName("myimg");
console.log(miniImg);
let img = [
  "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://4kwallpapers.com/images/walls/thumbs_3t/21603.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/21608.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/19448.jpg ",
];

let i = 0;
function next() {
  miniImg[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
  con.style.transitionDuration = "1s";
}
// function prev() {
//   i--;
//   if (i < 0) {
//     i = img.length - 1;
//   }
//   con.style.backgroundImage = 'url("' + img[i] + '")';
//   con.style.transitionDuration = "1s";
// }
function prev() {
  miniImg[i].classList.remove("active"); // Remove 'active' class from the current thumbnail
  i--;
  if (i < 0) {
    i = img.length - 1; // Loop back to the last image
  }
  miniImg[i].classList.add("active"); // Add 'active' class to the previous thumbnail
  con.style.backgroundImage = `url("${img[i]}")`;
  con.style.transitionDuration = "1s";
}
>>>>>>> 846b000 (Success)
