function calculate() {
    var goldPrice22 = parseFloat(document.getElementById("gold22_price").value);
    var goldPrice21 = parseFloat(document.getElementById("gold21_price").value);
    var goldPrice18 = parseFloat(document.getElementById("gold18_price").value);
    var silverPrice = parseFloat(document.getElementById("silver_price").value);

    var goldAmt22 = goldPrice22 * parseFloat(document.getElementById("gold22_amount").value);
    var goldAmt21 = goldPrice21 * parseFloat(document.getElementById("gold21_amount").value);
    var goldAmt18 = goldPrice18 * parseFloat(document.getElementById("gold18_amount").value);
    var silverAmt = silverPrice * parseFloat(document.getElementById("silver_amount").value);

    var bank = parseFloat(document.getElementById("bankSavings").value);
    var cash = parseFloat(document.getElementById("cashSavings").value);
    var sanchay = parseFloat(document.getElementById("shanchaySavings").value);
    var dsop = parseFloat(document.getElementById("dsopSavings").value);
    var pb = parseFloat(document.getElementById("pbSavings").value);
    console.log(bank);
    var arr = [goldAmt22, goldAmt21, goldAmt18, silverAmt, bank, cash, sanchay, dsop, pb];
    //console.log(arr);
    var i;
    for (i = 0; i < arr.length; i++) {

        if (isNaN(arr[i])) {
            arr[i] = 0;
        } else {
            arr[i] = arr[i];
        }
    }
    //console.log(arr);


    var precious = (arr[0] + arr[1] + arr[2] + arr[3]) * .025;

    var money = (arr[4] + arr[5] + arr[6] + arr[7] + arr[8]) * .025;

    var zakat = (precious + money);
    var minZakat;

    if (arr[2] == 0 && arr[1] == 0 && arr[0] != 0) {
        minZakat = goldPrice22 * 87.45 * .025;
    } else if (arr[2] == 0 && arr[1] != 0 && arr[0] == 0) {
        minZakat = goldPrice21 * 87.45 * .025;
    } else if (arr[2] == 0 && arr[1] != 0 && arr[0] != 0) {
        minZakat = goldPrice21 * 87.45 * .025;
    } else if (arr[2] != 0 && arr[1] == 0 && arr[0] == 0) {
        minZakat = goldPrice18 * 87.45 * .025;
    } else if (arr[2] != 0 && arr[1] == 0 && arr[0]!= 0) {
        minZakat = goldPrice18 * 87.45 * .025;
    } else if (arr[2] != 0 && arr[1] != 0 && arr[0]== 0) {
        minZakat = goldPrice18 * 87.45 * .025;
    } else if (arr[2] != 0 && arr[1] != 0 && arr[0]!= 0) {
        minZakat = goldPrice18 * 87.45 * .025;
    } else {
        minZakat = goldPrice22 * 87.45 * .025;
    }


    //console.log(minZakat);

    if (zakat >= minZakat) {
        var x = document.getElementById("zakatp");
        x.innerHTML = "Total Amount: " + zakat.toFixed(2).toString();
        +" Tk";
    } else {
        var x = document.getElementById("zakatp");
        x.innerHTML = "Not Eligible for Zakat";
    }


}