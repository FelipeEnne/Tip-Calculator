const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};

const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate == "") {
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "number please";
    error.style.display = "block";
    hideError();
    error.innerHTML = "Please enter bill and rate service.";
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip: ${tipAmt}`;

    let totalBill = Number(bill) + tipAmt;
    total.innerHTML = `Total bill: ${totalBill}`;
  }
};

btn.addEventListener("click", calculateTip);
