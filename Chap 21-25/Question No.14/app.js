var item=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
item= item.toLowerCase();
var arr = ["cake", "apple pie", "cookies", "chips", "patties"] ;
for(var i=0; i<=arr.length; i++){
    if(arr[i]===item){
        document.write(item +"is available at index in our bakery"+"<br>")
    }else{
        document.write("We are sorry."+"This is not available in our bakery")
    }
    break
}