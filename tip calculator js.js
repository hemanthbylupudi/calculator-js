function function1() {
    let billAmountInput = document.getElementById("billAmount").value;
    let percentageTipInput = document.getElementById("percentageTip").value;
    let errorPara = document.getElementById("errorMessage");
    let tipAmount = document.getElementById("tipAmount");
    let totalAmount = document.getElementById("totalAmount");

    if (billAmountInput === "") {
        errorPara.textContent = "Please Enter a valid Input";
    } else if (percentageTipInput === "") {
        errorPara.textContent = "Please Enter a valid Input";
    } else {
        let billAmount = parseInt(billAmountInput);
        let percentageTip = parseInt(percentageTipInput);
        let calculatedTip = billAmount * (percentageTip / 100);
        let calculatedTotal = billAmount + calculatedTip;
        errorPara.textContent = "";
        tipAmount.value = calculatedTip;
        totalAmount.value = calculatedTotal;

    }
}