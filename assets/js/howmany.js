function howMany() {

    var item = document.getElementById('item').value;
    var x = 110;
    var y = document.getElementById("inputNo").value;
    var z = y / x;
    var rounded = Math.round(z * 100) / 100

    document.getElementById('result').innerHTML =
    item + " is equal to about " + rounded + " Boeing 737's!";
}
