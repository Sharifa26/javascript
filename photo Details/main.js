function display(element){
    document.getElementById('pic').innerHTML = element.alt;
}

function revert(){
    document.getElementById('pic').innerHTML = "Hover over a Place to display details."
}