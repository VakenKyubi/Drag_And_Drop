const element = document.querySelector(".drag_element");
const drop_zone = document.querySelector(".drop_zone");

let x;
let y;

// element : dragstart, dragend

element.addEventListener("dragstart", function(event){
    //console.log("dragstart", event.target);
    this.style.background = "orange";
    x = event.offsetX;
    y = event.offsetY;
});

element.addEventListener("dragend", function(event){
    //console.log("dragend", event.target);
    this.style.background = "limegreen";
});

// drop_zone : dragenter, dragleave, dragover, drop

drop_zone.addEventListener("dragenter", function(){
    //console.log("dragenter");
});

drop_zone.addEventListener("dragleave", function(){
    //console.log("dragleave");
});

drop_zone.addEventListener("dragover", function(event){
    event.preventDefault();
})

drop_zone.addEventListener("drop", function(event){
    element.style.position = "absolute";
    element.style.top = (event.pageY - y) + "px";
    element.style.left  = (event.pageX - x) + "px";
});