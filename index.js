const menu = document.querySelector(".menu")
const grande = document.querySelector("#sidemenu")
const foto = document.querySelector(".foto")
const nombre = document.querySelector(".nombre")
const titulo = document.querySelector(".titulo")

menu.addEventListener("click",()=>{

    console.log(titulo);
    if(!grande.classList.contains("ancho-reducido")){

        grande.classList.add("ancho-reducido")
        foto.classList.add("foto-100")
        nombre.classList.add("no-nombre")
        titulo.classList.add("no-titulo")

    }else{
        grande.classList.remove("ancho-reducido")
        foto.classList.remove("foto-100")
        nombre.classList.remove("no-nombre")
        titulo.classList.remove("no-titulo")
    }
})