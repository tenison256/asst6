var pass=prompt("Enter the password")
var a= pass.charAt(i)
if(a<=9){
    var p=prompt("Password cannot begin with a number \n Please Enter a valid password ")
}
for(var i=0;i<=pass.length;i++)
{
    var c=""; 
    var b=pass.charCodeAt(i)
      if((b>=!65||b<=!90||b>=!97||b<=!122)&&c<=!9&&pass.length<6){
        var e=prompt("Enter valid password")
 }
}
