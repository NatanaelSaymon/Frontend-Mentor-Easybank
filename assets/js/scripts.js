let show = true
const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener("click", () =>{
  if(show == true){
    document.body.style.overflow = "hidden"
  }
  else{
    document.body.style.overflow = "initial"
  }
  
  menuSection.classList.toggle("on", show)
  show = !show
})