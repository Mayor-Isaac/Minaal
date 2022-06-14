var myVar;
function myFunction(){
    myVar = setTimeout (showpage, 3000);
}
function showpage(){
    document.getElementById ("loader").style.display = "none";
    document.getElementById("myDiv").style.display ="block";
}