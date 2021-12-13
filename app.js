
const menuItem = document.getElementsByClassName('bloc-menu')
const sousMenus = document.getElementsByClassName('sous-menu')
var ssMenuAffiche
var largeur = window.innerWidth

/**
 * Fonction affiche la div sous menu au survol de la souris, pour DESKTOP
 */
function menuAuSurvol(){
    Array.from(menuItem).forEach(item => {
        item.addEventListener('mouseenter', (e)=>{
            ssMenuAffiche = e.target.childNodes[2]
            if (typeof ssMenuAffiche !== "undefined"){
                ssMenuAffiche.style.display = "block";
            }
        })
        item.addEventListener('mouseleave', (e) =>{
            if (typeof ssMenuAffiche !== "undefined" && item.parentNode.className !== 'footer-menu' ){
               ssMenuAffiche.style.display = "none" 
            }
        })
    })
    Array.from(sousMenus).forEach(ssMenu =>{
        ssMenu.addEventListener('mouseleave', (e) =>{
            if(e.target.parentNode.parentNode.className != 'footer-menu'){
                e.target.style.display = "none"
            }
           
        })
    })
}

/**
 * Fonction affiche la div sous menu au clique de l'utilisateur, pour MOBILE
 */
function menuAuClique(){
    Array.from(menuItem).forEach(item =>{
        item.addEventListener('click',(e)=>{
            if(item.parentNode.id == "menu-menu"){
                if (e.target.parentNode.parentNode.className == 'section-menu'){
                    e.preventDefault()
                }
                if (e.target.nextElementSibling != null){
                    ssMenu = e.target.nextElementSibling
                }
                if (ssMenu != null && ssMenu.style.display != "block" ){
                    ssMenu.style.display = "block"
                } else if (ssMenu != null){
                    ssMenu.style.display = null
                    
                }
            } 
        })
    })
}

function animationMenu(largeur){
    if (largeur > 750){
        menuAuSurvol()
    } else if(largeur < 750){
        menuAuClique()
    }
}

animationMenu(largeur)

window.addEventListener('resize', () =>{
    largeur = window.innerWidth
    animationMenu(largeur)
})

