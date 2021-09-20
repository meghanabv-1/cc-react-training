const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const equalsButton = document.querySelector('.btn-equals')
const display = document.querySelector('.display')
const clearButton = document.querySelector('.btn-clear')
const deleteButton = document.querySelector('.btn-delete')

let displayData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => { 
          const buttonValue = button.getAttribute('data-num');

        
        displayData += buttonValue;

        display.textContent = displayData;
    })
})

equalsButton.addEventListener('click', () => { 
    displayData=eval(displayData)
    display.textContent = displayData
})

clearButton.addEventListener('click', () => { 
    displayData = "";
    display.textContent = displayData;
  })

  deleteButton.addEventListener('click',()=>{
      displayData = displayData.slice(0, -1);
      display.textContent = displayData;
  })