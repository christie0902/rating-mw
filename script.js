// const textRating = document.querySelector(".rating__value").textContent;
// const stars = document.querySelectorAll(".rating__star");

// stars.forEach((star, i) => {
//   star.addEventListener("click", (e) => {
//     star.classList.add("rating__star--on");
//     let rating = i + 1;
//     textRating.innerText = `${rating}`;
//   });
// });
// import 'dotenv/config'
let rating = 0
const textRating = document.querySelector(".rating__value");
const stars = document.querySelectorAll(".rating__star");

stars.forEach((star, i) => {
  star.addEventListener("click", (e) => {
    stars.forEach((star) => star.classList.remove("rating__star--on"));

    for (let j = 0; j <= i; j++) {
      stars[j].classList.add("rating__star--on");
    }

    // Set the rating value
    rating = `${i + 1}`;
    textRating.innerText = rating;

  });
});


const postData = async () => {

  const myResponse = await fetch(`https://test-api.codingbootcamp.cz/api/${process.env.MY_API_KEY}/ratings`, {
    "method": "POST",
    "body": JSON.stringify({
      "rating_subject": `Movie Number ${Math.floor(Math.random() * 50)}`,
      "rating_value": rating
    }),
    "headers": {
      'Content-Type': 'application/json'
    }
  })
  const myUsableResponse = await myResponse.json()
  console.log(myUsableResponse)
}
