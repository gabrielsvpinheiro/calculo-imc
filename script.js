const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {
  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = '';

    if (imc < 18.5) {
      classification = 'Abaixo do peso.';
    }
    else if (imc < 25) {
      classification = 'Com peso ideal. Parabéns!';
    }
    else if (imc < 30) {
      classification = 'Levemente acima do peso.';
    }
    else if (imc < 35) {
      classification = 'Com obesidade grau I.';
    }
    else if (imc < 40) {
      classification = 'Com obesidade grau II.';
    }
    else {
      classification = 'Com obesidade grau III. Cuidado!';
    }

    resultado.innerHTML = `IMC: ${imc} - ${classification}`;
  }
  else {
    resultado.innerHTML = 'Preencha todos os campos!';
  }
}