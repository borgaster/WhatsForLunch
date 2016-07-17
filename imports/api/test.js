Date.prototype.getDayOfWeek = function(day){
 return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ day ];

}

function dayOfWeek(day){
  if(typeof day === 'number' && (day >=0 && day <=6)){
    return new Date().getDayOfWeek(day);
  }
  else{
    throw "invalid argument"
  }
  
}

console.log(dayOfWeek("bkajs"));