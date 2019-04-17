function takeANumber(katzDeliLine){

  katzDeliLine.push(katzDeliLine.length);
    return `Welcome you are number ${katzDeliLine.length}.`;
    // Welcome you are number 28
}

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
