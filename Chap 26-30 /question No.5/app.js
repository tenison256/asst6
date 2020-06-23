var heads="Heads"
var tails="Tails"
var toss=(Math.random()*2)+1
var floor=Math.floor(toss)
if(floor===1)
{
    document.write(floor+"<br>"+"Random coin value: "+tails)
}
else if(floor===2)
{
document.write(floor+"<br>"+"Random coin value: "+heads) 
}
