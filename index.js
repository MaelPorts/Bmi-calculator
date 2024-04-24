const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

function bmiCalculator() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  if (isNaN(height) || isNaN(weight)) {
    alert('Please enter valid numbers for height and weight.');
    return;
}
const bmi = weight / ((height / 100) * (height / 100));
const resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    // Optional: Display BMI categories
    if (bmi < 18.5) {
      resultElement.textContent += ' (Underweight)';
  } else if (bmi < 25) {
      resultElement.textContent += ' (Normal Weight)';
  } else if (bmi < 30) {
      resultElement.textContent += ' (Overweight)';
  } else {
      resultElement.textContent += ' (Obese)';
  }
}