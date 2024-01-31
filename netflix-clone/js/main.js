// let tabContent = document.querySelectorAll(".tab-content-item");
// let tabItem = document.querySelectorAll(".tab-item");

// function removeBorder() {
//   tabItem.forEach((item) => {
//     item.classList.remove("tab-border");
//   });
// }
// function removeShow() {
//   console.log("Removing show class");
//   tabContent.forEach((item) => {
//     item.classList.remove("show");
//   });
// }

// // function addBorder(e) {
// //   removeBorder();
// //   removeShow();
// //   console.log("Adding border and show classes");
// //   this.classList.add("tab-border");
// //   console.log(this.id);
// //   let grabId = document.querySelector(`#${this.id}-content`);
// //   grabId.classList.add("show");
// // }

// // function addBorder(e) {
// //   removeBorder();
// //   removeShow();

// //   this.classList.add("tab-border");
// //   let tabContentId = `${this.id}-content`;
// //   document.getElementById(tabContentId).classList.add("show");
// // }

// function addBorder(e) {
//   console.log("Adding border and show classes");

//   removeBorder();
//   removeShow();

//   this.classList.add("tab-border");
//   let tabContentId = `${this.id}-content`;
//   console.log(`Targeting content with id: ${tabContentId}`);

//   let tabContentElement = document.getElementById(tabContentId);

//   if (tabContentElement) {
//     tabContentElement.classList.add("show");
//     console.log("Show class added to tab content");
//   } else {
//     console.error(`Cannot find element with id: ${tabContentId}`);
//   }
// }

// tabItem.forEach(function (item) {
//   item.addEventListener("click", addBorder);
// });

let tabContent = document.querySelectorAll(".tab-content-item");
let tabItem = document.querySelectorAll(".tab-item");

function removeBorder() {
  tabItem.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

function removeShow() {
  tabContent.forEach((item) => {
    item.classList.remove("show");
  });
}

function addBorderAndShow(e) {
  removeBorder();
  removeShow();

  this.classList.add("tab-border");

  let tabContentId = `${this.id}-content`;
  let tabContentElement = document.getElementById(tabContentId);

  if (tabContentElement) {
    tabContentElement.classList.add("show");
  } else {
    console.error(`Cannot find element with id: ${tabContentId}`);
  }
}

tabItem.forEach(function (item) {
  item.addEventListener("click", addBorderAndShow);
});
