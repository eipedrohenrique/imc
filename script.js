function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = weight / (height * height);
    const roundedIMC = imc.toFixed(2);

    let classification = '';
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else if (imc < 34.9) {
        classification = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        classification = 'Obesidade grau 2';
    } else {
        classification = 'Obesidade grau 3';
    }

    document.getElementById('result').innerText = `Seu IMC é ${roundedIMC}. Classificação: ${classification}.`;
}
