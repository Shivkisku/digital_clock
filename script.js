// Mapping English digits to Olchiki digits
const olchikiDigits = ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"];

// Function to convert a number to Olchiki
function toOlchiki(num) {
    return num.toString().split('').map(digit => olchikiDigits[parseInt(digit)]).join('');
}

// Function to update the clock with time
function updateClock() {
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to always display two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Convert the digits of time to Olchiki
    hours = toOlchiki(hours);
    minutes = toOlchiki(minutes);
    seconds = toOlchiki(seconds);

    // Combine time
    const time = `${hours}:${minutes}:${seconds}`;

    // Update the clock with the new time
    document.getElementById('time').textContent = time;
}

// Initialize the clock and update every second
setInterval(updateClock, 1000);

// Initialize the clock when the page loads
updateClock();
