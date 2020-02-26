
function isFactor(factor, total) {
    // console.log(total % factor);
    if(factor == 1) {
        return true;
    }
    if(total % factor == 0) {
        return true;
    } else {
        return false;
    }
}

function showFactors(array) {
    let i = 0;
    for (i; i < array.length; i++) {
        // console.log("i: " + i + ", element: " + array[i] + "<br />");
        if(i == array.length - 1) {
            document.write(array[i]);
        } else {
            document.write(array[i] + ", ");
        }
    }
}

function addFactors(array) {
    let i = 0, sum = 0;
    for(i; i < array.length; i++) {
        // console.log(sum + "<br />");
        sum += array[i];
        // console.log(sum + "<br />");
    }
    return sum;
}

function getFactors(number) {
    const num = Number(number);
    let i = 1;
    let array = [];
    for(i; i < num; i++) {
        // console.log(isFactor(i, num));
        if(isFactor(i, num)) {
            // console.log("<br />" + num + "<br />");
            array.push(i);
        }
        // console.log(array + "<br />");
    }
    return array;
}

let runAmicable = document.getElementById("button");
runAmicable.onclick = function(){
    let number1 = document.getElementById("num1").value;
    number1 = Number(number1);
    let number2 = document.getElementById("num2").value;
    number2 = Number(number2);
    document.write("Number 1: " + number1 + ",  Number 2: " + number2);
    const num1Factors = getFactors(number1);
    // console.log("<br />" + num1Factors + "<br />");
    const num2Factors = getFactors(number2);
    const num1Sum = addFactors(num1Factors);
    const num2Sum = addFactors(num2Factors);
    if(num1Sum == number2 && num2Sum == number1) {
        document.write("<br />" + number1 + " and " + number2 + " are amicable!<br />");
    }
}