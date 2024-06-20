document.getElementById("tempForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;

  if (isNaN(temperature)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  let result;
  let explanation;

  if (unit === "celsius") {
    result = (temperature * 9) / 5 + 32;
    explanation = `${temperature}° Celsius sama dengan ${result.toFixed(2)}° Fahrenheit.`;
  } else if (unit === "fahrenheit") {
    result = ((temperature - 32) * 5) / 9;
    explanation = `${temperature}° Fahrenheit sama dengan ${result.toFixed(2)}° Celsius.`;
  }

  document.getElementById("result").textContent = `Hasil: ${result.toFixed(2)}° ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;
  document.getElementById("explanation").textContent = explanation;
});
