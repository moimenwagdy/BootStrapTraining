let join = document.querySelector(".join");
let log = document.querySelector(".login");
let toHideAndShow = document.querySelectorAll("[id='g']");
let list = document.querySelector("ul");

join.addEventListener("click", function () {
  toHideAndShow.forEach((ele) => {
    if (ele.classList.contains("show")) {
      ele.classList.remove("show");
    } else {
      ele.classList.add("show");
    }
  });
});

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
