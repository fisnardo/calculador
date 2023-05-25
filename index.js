const container = document.getElementById('calculator');

const buttons = [
    '/', '1', '2', '3', 
    '*', '4', '5', '6', 
    '-', '7', '8', '9', 
    '+', '0', '.', '=', 
];

const resultado = document.createElement('div');
resultado.id = 'resultado';
resultado.classList.add('resultado');
container.appendChild(resultado);

buttons.forEach(buttonValue => {
    const button = document.createElement('button');
    button.id = 'button';
    button.textContent = buttonValue;
    container.appendChild(button);
  });


container.addEventListener('click', event => {
    if (event.target.matches('button')) {
      const clickedButton = event.target;
      const buttonValue = clickedButton.textContent;
  
      if (buttonValue === '=') {
        try {
          const value = resultado.textContent;
          const resultValue = eval(value);
          resultado.textContent = resultValue;
        } catch (error) {
          resultado.textContent = 'Error';
        }
      } else {
        resultado.textContent += buttonValue;
      }
    }
  });

const clearButton = document.createElement('div')
clearButton.textContent = 'C'
clearButton.classList.add('borrar')
container.appendChild(clearButton)

clearButton.addEventListener('click', event => {
  resultado.textContent = '';
})
