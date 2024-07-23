let count=0;
var color=document.getElementsByTagName("h2");
var back=document.getElementsByClassName("task");
var text=document.getElementsByTagName("span")
function call(){
    let arr=['Red','Green','Yellow','Blue']
    back[0].style.backgroundColor=arr[count];
    color[0].style.color=arr[count];
    text[0].innerHTML=arr[count]
    count++;
    if(count>3){
         count=0;
    }

}
