//create onchange event
document.querySelector(".input_container").onchange = () => {
  //get user input
  const totalBillInput = Number(document.getElementById("billTotal").value);
  const tipsProcentageInput = Number(document.getElementById("tipInput").value);
  //create output
  let tipValue = totalBillInput * (tipsProcentageInput / 100);
  let totalValue = totalBillInput + tipValue;
  //display output
  document.getElementById("totalTipAmount").innerHTML = tipValue.toFixed(2);
  document.getElementById("totalBill").innerHTML = totalValue.toFixed(2);
};
