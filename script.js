let userInput;
//to set the date not higher than current date
document.addEventListener("DOMContentLoaded", function () {
  userInput = document.getElementById("birth");
  let currentDate = new Date().toISOString().split("T")[0];
  userInput.max = currentDate;
});

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let todayDate = new Date();

  let d2 = todayDate.getDate();
  let m2 = todayDate.getMonth() + 1;
  let y2 = todayDate.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    //we will add total days in that month by current and then subtract it by dob
    d3 = new Date(y1, m1, 0).getDate() + d2 - d1;
  }
  //if the month goes negative
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  console.log(
    `birth${d1}/${m1}/${y1}---current${d2}/${m2}/${y2}===diffrence${d3}/${m3}/${y3}`
  );

  document.getElementById("YY").textContent = y3;
  document.getElementById("MM").textContent = m3;
  document.getElementById("DD").textContent = d3;
}
// Attach the calculateAge function to the form's submit event
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  calculateAge(); // Call the calculateAge function when the form is submitted
});
