function manipulateString() {
    let input = document.getElementById('userInput').value;
    
    // Display the original string
    document.getElementById('originalString').innerText = input;
    
    // Convert to Uppercase
    let upperCase = input.toUpperCase();
    document.getElementById('upperCase').innerText = upperCase;
    
    // Convert to Lowercase
    let lowerCase = input.toLowerCase();
    document.getElementById('lowerCase').innerText = lowerCase;
    
    // Get the Length of the string
    let length = input.length;
    document.getElementById('stringLength').innerText = length;
    
    
    // Replace spaces with hyphens
    let replaced = input.replace(/ /g, '-');
    document.getElementById('replacedString').innerText = replaced;
}