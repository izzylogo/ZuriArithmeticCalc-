let firstNum = parseInt(prompt ('Enter first Number:'))
let symbol = prompt ('Choose one of these mathematical operator(*, +, -, /):')
let secondNum = parseInt(prompt ('Enter second Number:'))
let answer


function calculate() {
    if(isNaN(firstNum) || isNaN(secondNum)){
        alert('Please choose a number')
    }else {
        if (symbol === '+'){
            answer = firstNum + secondNum
            document.write(firstNum + secondNum)
        }else if (symbol === '-'){
            answer = firstNum - secondNum
        }else if (symbol === '*'){
            answer = firstNum * secondNum
        }else if (symbol === '/'){
            answer = firstNum / secondNum
        };
        // alert( answer )
        console.log(answer)
    }
    if(answer === undefined){
        document.write('You have an error somewhere')
    }else{
        document.write('Your answer is:' + '' + answer)
    }
}

calculate()