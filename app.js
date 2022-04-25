// var myForm = document.getElementById("myForm");
// // Event listener that listens for submit event

// const h1 = document.createElement("h1");

// myForm.appendChild(h1);

// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // retrieve values
//   var userage = document.getElementById("age").value;

//   // validate age
//   if (userage >= 18) {
//     h1.innerText = "you can drink appear";
//   } else {
//     h1.innerText = "you’re too young";
//   }
// });

//* better solution //
const btn = document.querySelector("button");
const input = document.querySelector("input");
const h4 = document.createElement("h4");
document.body.appendChild(h4);

btn.addEventListener("click", function () {
  if (input.value >= 18) {
    h4.innerText = "you can drink";
  } else {
    h4.innerText = "you're too young";
  }
});
