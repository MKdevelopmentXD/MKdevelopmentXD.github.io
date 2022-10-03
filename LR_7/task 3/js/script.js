let windowForm = document.querySelector(".window");

let ByTicketBtn = document.getElementById("concert-map");

let sendFormBtn = document.getElementById("btnSendForm");

let mainForm = document.querySelector("form");

ByTicketBtn.addEventListener("click", (event) => {
  let variable = event.target;

  if (variable.classList.contains("button")) {
    windowForm.style.display = "block";
  }
});

sendFormBtn.addEventListener("click", (event) => {
  if (!confirm("Send data?")) {
    event.preventDefault();
    alert("Data was not send. Try again.");
    mainForm.reset();
    windowForm.style.display = "none";
  }
});
