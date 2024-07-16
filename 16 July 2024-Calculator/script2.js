function convert() {
    // Get input value (Celsius temperature)
    var celsius = document.getElementById("celsius").value;

    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.textContent = `${celsius} Celsius = ${fahrenheit} Fahrenheit`;
}
