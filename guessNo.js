const max=prompt("enter the maximum limit");
const guess=  prompt("enter your guessing number");
while(true){
  
  let actual=Math.floor(Math.random()*max)+1;
    if(guess==actual){
        console.log("Congratulation you got right no"+":"+guess);
        break;
    }
   else if(guess>actual){
    guess=prompt("your no is large please enter less no");
   }
   else{
    guess = prompt("your no is small please enter big no");
   }
};