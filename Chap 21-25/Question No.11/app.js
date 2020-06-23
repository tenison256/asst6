var word=prompt("Enter a word")
var firstChar= word.slice(0,1);
var otherChars= word.slice(1);
firstChar=firstChar.toUpperCase();
otherChars= otherChars.toLowerCase();
var w= firstChar+otherChars;
document.write("User Input: "+word+"<br>"+"Title Case: "+w)