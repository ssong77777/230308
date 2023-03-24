let btnList = document.querySelectorAll("#btnSlides button");
let slideList = document.querySelector("#slideList");

let idx = 0;

btnList.forEach((btnSlide, idx) => {
  btnSlide.addEventListener("click", function () {
    slideList.style.transform = `translate(${idx * -100}%)`;
  });
});
