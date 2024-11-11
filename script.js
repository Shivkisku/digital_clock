function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = convertToHindiDigits(h) + ":" + convertToHindiDigits(m) + ":" + convertToHindiDigits(s);
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;  // add zero in front of numbers < 10
    }
    return i;
}

function convertToHindiDigits(num) {
    const hindiDigits = ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"];
    return num.toString().split('').map(digit => hindiDigits[parseInt(digit)]).join('');
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
