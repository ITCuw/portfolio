//Get Modal Elements
var modal = document.getElementById('modal');
//Get opem Modal botton
var openBtn = document.querySelectorAll('.openBtn.btn');
var allSlides = document.getElementsByClassName("slide");
//Get Close Button
var closeBtn = document.getElementsByClassName("closeBtn")[0];
//Open Modal
[].forEach.call(openBtn, function(el) {
  el.onclick = function() {
      if (el.id == 'vimocityOpen'){
        //uncheck all slides
        allSlides.checked = false;
        //check intro Vimocity Slide
        document.getElementById("i1").checked = true;
        //display content
        modal.style.display = "flex";
      } else if (el.id == 'radarOpen'){
        //uncheck all slides
        allSlides.checked = false;
        //check intro Vimocity Slide
        document.getElementById("i6").checked = true;
        //display content
        modal.style.display = "flex";
    }
  }
})
//Close Modal
closeBtn.onclick = function(){
  modal.style.display = 'none';
}
//Close Modal if Outside Click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
