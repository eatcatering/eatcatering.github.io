const contenedor_cocktel = document.getElementsByClassName("menu-text2").item(0)
const contenedor_menu = document.getElementsByClassName("cock").item(0)
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
          .then((res) => res.json())
          .then((json) => {
            let cocktails = buscar(json.drinks, [178321,17177,11720,178334])
            for (let index = 0; index < cocktails.length; index++) {
              let boton = document.createElement("button")
              boton.classList.add("botonCOCKTAIL")
              boton.innerText = cocktails[index].strDrink
              boton.addEventListener("click",function(){
                let imgTF = document.getElementById("imagencocktail")
                if (imgTF) {
                  contenedor_menu.removeChild(imgTF)
                }
                let img = document.createElement("img")
                img.setAttribute("src",cocktails[index].strDrinkThumb)
                img.classList.add("img-menu")
                img.setAttribute("id","imagencocktail") 
                contenedor_menu.appendChild(img)          
                console.log(img)
              })
              contenedor_cocktel.appendChild(boton)
              console.log(json)
              
            
            } 
          })
          .catch(err => console.log(err))



const menu = document.querySelector(".menu");
const AbrirMenuBtn = document.querySelector(".abrir-menu");
const CerrarMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu() {
  menu.classList.toggle("menu_abierto");
}

AbrirMenuBtn.addEventListener("click", toggleMenu);
CerrarMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_abierto");
  });
});

function buscar(menus, idsMenus) {
    
  let encontrados = menus.filter((menu) => {
      for (let index = 0; index < idsMenus.length; index++) {
          if(menu.idDrink == idsMenus[index]){
              return menu
          }
      }
      
  })
  return encontrados
}
