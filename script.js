// const textRating = document.querySelector(".rating__value").textContent;
// const stars = document.querySelectorAll(".rating__star");

// stars.forEach((star, i) => {
//   star.addEventListener("click", (e) => {
//     star.classList.add("rating__star--on");
//     let rating = i + 1;
//     textRating.innerText = `${rating}`;
//   });
// });

const textRating = document.querySelector(".rating__value");
const stars = document.querySelectorAll(".rating__star");

stars.forEach((star, i) => {
  star.addEventListener("click", (e) => {
    stars.forEach((star) => star.classList.remove("rating__star--on"));

    for (let j = 0; j <= i; j++) {
      stars[j].classList.add("rating__star--on");
    }

    // Set the rating value
    textRating.innerText = `${i + 1}`;
  });
});
