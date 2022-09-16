function add(number1,number2){
    return number1 + number2
}

function substract(number1,number2){
    return number1 - number2
}

function multiply(number1,number2){
    return number1 * number2
}

function divide(number1,number2){
    return number1 / number2
}


calculatorScreen = document.querySelector('input');

function operate(operator,numberArray){ 
    if (operator === 947 || numberArray === 947){
        calculatorScreen.value="Error!"
        console.log('somethingswrong')
        return 0
    }

    result = operator(parseInt(numberArray[0]),parseInt(numberArray[1]))
    calculatorScreen.value = result
    return result
}
function writeTheNumber(e){
    calculatorScreen.textContent+= e.target.textContent
}

numberButtons = document.querySelectorAll(".number");
Array.from(numberButtons).map(button => button.addEventListener('click',(e)=>{
    calculatorScreen.value+=e.target.textContent
    
}))

operatorButtons = document.querySelectorAll(".operator");
Array.from(operatorButtons).map(button => button.addEventListener('click',(e)=>{
    calculatorScreen.value+=e.target.textContent
}))

function numberDetect(inputValue){
    if (!inputValue){
        console.log('Somethings terribly wrong')
        return 947
    }
    valueArray = inputValue.split("");
    returnArray = []
    if(valueArray.filter((value)=>{return value === '+'}).length){
        numberArray=inputValue.split("+")
        console.log(numberArray)
        returnArray = numberArray.map(number=>parseInt(number))
        console.log(returnArray)
    }
    else if(valueArray.filter((value)=>{return value === '-'}).length){
        numberArray=inputValue.split("-")
        returnArray = numberArray.map(number=>parseInt(number))
    }
    else if ((valueArray.filter((value)=>{return value === '/'}).length)){
        numberArray=inputValue.split("/")
        returnArray = numberArray.map(number=>parseInt(number))
    }

    else if ((valueArray.filter((value)=>{return value === '*'}).length)){
        numberArray=inputValue.split("*")
        returnArray = numberArray.map(number=>parseInt(number))
    }
    return returnArray

}

function operatorDetect(inputValue){
    if (!inputValue){
        return 947
    } 
    valueArray = inputValue.split("");
    console.log(valueArray)
    if((valueArray.filter((value)=>{return value ==="+"})).length){
        console.log(add)
        return add
    }
    else if ((valueArray.filter((value)=>{return value === '-'})).length){
        console.log(substract)
        return substract
    }
    else if ((valueArray.filter((value)=>{return value === '/'})).length){
        console.log(divide)
        return divide
    }

    else if ((valueArray.filter((value)=>{return value === '*'})).length){
        console.log(multiply)
        return multiply
    }
    else{
        console.log('No operators found')
        console.log(calculatorScreen.value)
    }
}

equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click',()=>operate(operatorDetect(calculatorScreen.value),numberDetect(calculatorScreen.value)))


function clearScreen(){
    calculatorScreen.value="";
}

clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', ()=> clearScreen());

function backspaceHit(){
    calculatorScreenArray = calculatorScreen.value.split("")
    calculatorScreenArray.pop()
    calculatorScreen.value = calculatorScreenArray.join("")
}

backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', ()=> backspaceHit())





//// 12+6-3

function operatorExistsCheck(stringElement){ //gives true if operator already exists
    arrayElement = stringElement.split("");4
    if (arrayElement.filter(element=>{return element === "+"}).length || 
    arrayElement.filter(element=>{return element === "/"}).length || 
    arrayElement.filter(element=>{return element === "*"}).length || 
    arrayElement.filter(element=>{return element === "-"}).length){
        return true
    }
    else{
        return false
    }

function buttonMemory(stringElement){
    temporaryNumber = calculatorScreen.value;
    temporaryNumber2 = null;
    (e)=>{calculatorScreen.value+=e.target.textContent}
    let tempOperator= null;
    let tempResult= null;

    if (!operatorExistsCheck(calculatorScreen.value)){
        temporaryNumber = parseInt(calculatorScreen.value);
        
        (e)=>{
            calculatorScreen.value+=e.target.textContent
            tempOperator = e.target.textContent;
        }

    }
    else {
        temporaryNumber2 = calculatorScreen.value.replace(temporaryNumber,"").replace(tempOperator,"")
        tempResult = operate(operatorDetect(tempOperator.split("")),[parseFloat(temporaryNumber),parseFloat(temporaryNumber2)] );
        (e)=>{
            calculatorScreen.value+=e.target.textContent
            tempOperator = e.target.textContent;
        }
    }  }}