let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function adjustFontSize() {
    // Set a maximum and minimum font size
    const maxFontSize = 3;
    const minFontSize = 1;

    // Set a base font size and factor for adjustment
    const baseFontSize = 1.5; // You can adjust this value
    const fontSizeAdjustFactor = 0.8; // You can adjust this value

    // Calculate the new font size based on the content length
    const contentLength = display.value.length;
    let newFontSize = baseFontSize / (contentLength * fontSizeAdjustFactor);

    // Ensure the font size stays within the specified range
    newFontSize = Math.max(minFontSize, Math.min(maxFontSize, newFontSize));

    // Apply the new font size to the display
    display.style.fontSize = `${newFontSize}em`;
}


document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Check if the key is a number, operator, or Enter key
    if (/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        // Remove the last character from the display
        display.value = display.value.slice(0, -1);
    }
});
