function takeANumber(katzDeliLine){
  let counter = 0;
  counter += 1;
  katzDeliLine.push(counter);
    return `Welcome you are number ${counter}.`;
    // Welcome you are number 28
}
const array = []
takeANumber(array) // =》 Welcome you are number 1
takeANumber(array) // =》 Welcome you are number 2
takeANumber(array) // =》 Welcome you are number 3
nowServing(array) // => Currently serving 1
takeANumber(array) // => Welcome you are number 3

// [2,3,3]

function nowServing(katzDeliLine){
    if(katzDeliLine.length){
        return `Currently serving ${katzDeliLine.shift()}.`;
    }else{
        return `There is nobody waiting to be served!`
    }
}


function currentLine(katzDeliLine){
    var line = [];
    if(katzDeliLine.length){
        for(var i=0; i<katzDeliLine.length; i++){
            line.push(`${i+1}. ${katzDeliLine[i]}`)
        }
		return `The line is currently: ${line.join(', ')}`
    } else{
        return `The line is currently empty.`
    }
}

console.log(currentLine(["Kate", "Alice"]))
console.log(currentLine(["Laura", "Alex"]))
