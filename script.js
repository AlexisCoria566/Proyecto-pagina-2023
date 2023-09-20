function showAlert(){
    return alert("Formulario enviado exitosamente");
}

/*buscador*/
document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".card-body").forEach(producto =>{
  
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?producto.classList.remove("filtro")
              :producto.classList.add("filtro")
        })
  
    }
  
  
})

/*modal*/
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

/* Rellenar modal */

function sendData(id){
  var img = document.getElementById("card-image-"+id);
  var src = img.getAttribute("src");
  var modalImg = document.getElementById("image-card-modal");
  document.getElementById("card-title-modal").textContent = document.getElementById("card-title-"+id).textContent;
  document.getElementById("card-text-modal").textContent = document.getElementById("card-text-"+id).textContent;
  console.log(img)
  modalImg.setAttribute("src", src);
}
