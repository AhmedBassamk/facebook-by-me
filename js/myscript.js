var drop = document.getElementById("drop");
var dropdown = document.getElementById("dropdown");
var zx = document.getElementById("zx");
var cc = document.getElementById("cc");
var mss = document.querySelectorAll("#mss");
var messege = document.getElementById("dropdow");
var close = document.getElementById("close");

drop.onclick = function(){
    dropdown.classList.toggle("as")
}
mss.forEach(element => {
    element.onclick = function(){
    messege.classList.toggle("opp")
}
});
close.onclick = function(){
    messege.classList.toggle("opp")

}
