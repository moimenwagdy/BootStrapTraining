let join = document.querySelector(".join");
let log = document.querySelector(".login");
let toHideAndShow = document.querySelectorAll("[id='g']");
let list = document.querySelector("ul");

log.addEventListener("click", function () {
  toHideAndShow.forEach((ele) => {
    if (ele.classList.contains("show")) {
      ele.classList.remove("show");
    } else {
      ele.classList.add("show");
    }
  });
});

let listToggle = document.querySelectorAll(".se-list li");

console.log(listToggle);

addEventListener("click", (e) => {
  listToggle.forEach((list) => {
    if (e.target.parentElement.classList.contains("se-list")) {
      list.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

let navToggler = document.querySelector(".navbar-toggler");
let navList = document.querySelector(".navbar-collapse");

navToggler.addEventListener("click", () => {
  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
  } else {
    navList.classList.add("show");
  }
});

let landPage = document.querySelector(".landing");

landPage.addEventListener("click", () => {
  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
  }

  toHideAndShow.forEach((ele) => {
    if (ele.classList.contains("show")) {
      ele.classList.remove("show");
    }
  });
});
