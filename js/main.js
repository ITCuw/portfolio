//Get Modal Elements
var modal = document.getElementById('modal');
//Get opem Modal botton
var modalBtn = document.getElementById('readMore')
//Get Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//Listen for Open Click Event
modalBtn.addEventListener('click', openModal);
//Listen for Close Click Event
closeBtn.addEventListener('click', closeModal);
//Listen For Outside Click
window.addEventListener('click', clickOutside);
//Open Modal
function openModal(){
  modal.style.display = 'flex';
}
//Close Modal
function closeModal(){
  modal.style.display = 'none';
}
//Close Modal if Outside Click
function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
