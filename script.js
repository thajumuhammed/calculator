// 1.display number in the text box
function displaynumber(num){
    result.value += num;
}

// 2.clear text box
function clearbox(){
    result.value="";
}

// 3.evaluate expression
function evaluateExpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output
}

// 4.Remove button(using slice)
function removelastitem(){
    currentInput=result.value;
   result.value=currentInput.slice(0,-1)
}