var katzDeliLine = []

let ticketNumber = 1

function takeANumber(line) { 
  
  line.push(ticketNumber)
  
  ticketNumber++
  
}

function nowServing(line) {
   if (line.length === 0) {
    return "There is nobody waiting to be served!"
    
  }
  return `Currently serving ${line.splice(0,1)}.`
 
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
    }
  
  var namesString = "The line is currently: "

  for (var i= 0; i < line.length; i++) {
    namesString += `${i+1}. ${line[i]}`
    if (i < line.length - 1) {
      namesString += ", "
    }
  } 
  return namesString
}