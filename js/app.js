console.log("Hey Dev!")
const main = document.querySelector(".listener-pokemon")
//console.log(card)

const url = "https://pokeapi.co/api/v2/pokemon/"
let count = 400 

// 400 foi o numero maximo de pokemons que eu consegui filtrar com a api estavel.
//acima de 400 a api já fica instavel e acaba nao mostrando todos os pokemons que a doc disponibiliza!

// mas se você quiser pode alterar esse valor, talvez rode melhor na sua maquina do que na minha! 😉❤️

const get_api = async function(pokemon){
    const api_response = await fetch(url + pokemon)
    //console.log(api_response)    
    const data = await api_response.json()
    //console.log(data)

    return data
}

const user_api = async function(){

    for(let i = 1; i <= count; i++){
        //console.log(i)
        const data = await get_api(i)
        
        const card = document.createElement("article")
        card.classList = "card"

            const header_card = document.createElement("div")
            header_card.classList = "header-card"
                const type = document.createElement("p")
                const xp = document.createElement("p")
                type.classList = "type"
                
            const main_card = document.createElement("div")
            main_card.classList = "main-card"
                const imgPrincipal = document.createElement("img")
                imgPrincipal.classList = "img-principal"

            const footer_card = document.createElement("div")
            footer_card.classList = "footer-card"
                const nome = document.createElement("h2")
                const imgGif = document.createElement("img")
                imgGif.classList = "img-gif"

        main.appendChild(card)
        
        card.appendChild(header_card)
        card.appendChild(main_card)
        card.appendChild(footer_card)
        
        header_card.appendChild(type)
        header_card.appendChild(xp)

        main_card.appendChild(imgPrincipal)

        footer_card.appendChild(nome)
        footer_card.appendChild(imgGif)

        type.innerHTML = data
        ["types"]
        ["0"]
        ["type"]
        ["name"]

        nome.innerHTML = data.name
        xp.innerHTML = "XP " + data.base_experience
        imgPrincipal.src = data.sprites.other.dream_world.front_default
        
        imgGif.src = data
        ["sprites"]
        ["versions"]
        ["generation-v"]
        ["black-white"]
        ["animated"]
        ["front_default"]

    }
    
    const inp = document.querySelector("input")
    inp.oninput = busca;

    function busca(){
        const valor = inp.value.toLowerCase()
        //console.log(valor)
        const card_all = document.querySelectorAll("article")
        //console.log(card_all)

        card_all.forEach(
            function(i){
                if(i.textContent.includes(valor)){
                    //console.log(true)
                    i.classList.remove("removerItem")
                } else {
                    //console.log(false)
                    i.classList.add("removerItem")
                }
            }
        )
    
    }

    const typePokemon = document.querySelectorAll(".type")
    //console.log(typePokemon)

    typePokemon.forEach(
        function(typePoke){
            //console.log(typePoke.textContent)

            if(typePoke.textContent === "fire"){
                //console.log(typePoke.offsetParent.childNodes["1"])
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(172, 98, 52, 0.431)"
                
                return
            }
            
            if(typePoke.textContent === "grass"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(52, 172, 114, 0.431)"

                return
            }
            if(typePoke.textContent === "water"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(52, 124, 172, 0.431)"
                
                return
            }
            
            if(typePoke.textContent === "bug"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(52, 172, 70, 0.431)"

                return
            }
            
            if(typePoke.textContent === "poison"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(92, 93, 154, 0.431)"

                return
            }
            if(typePoke.textContent === "electric"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(172, 160, 52, 0.431)"
                
                return
            }
            
            if(typePoke.textContent === "ground"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(67, 61, 54, 0.431)"

                return
            }
            if(typePoke.textContent === "fairy"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(125, 64, 134, 0.431)"

                return
            }
            if(typePoke.textContent === "fighting"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(151, 229, 239, 0.431)"

                return
            }
            if(typePoke.textContent === "rock"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(97, 82, 112, 0.323)"
                return
            }
            if(typePoke.textContent === "ghost"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(231, 212, 244, 0.555)"

                return
            }
            if(typePoke.textContent === "psychic"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(138, 52, 172, 0.431)"

                return
            }
            if(typePoke.textContent === "normal"){
                typePoke.offsetParent.childNodes["1"].style.background = "rgba(153, 175, 173, 0.431)"

                return
            }

        }
    )

}

user_api()


const btn = document.querySelector("#theme")
btn.onclick = theme;

function theme(){
    const i = document.querySelector("ion-icon")
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const github = document.querySelector("footer a")

    body.classList.toggle("darck-body")
    header.classList.toggle("darck-header")
    i.classList.toggle("darck-btn")
    github.classList.toggle("gt-darck")
}

const btnCookie = document.querySelector("#btn-cookie")
const cookie = document.querySelector(".cookie")
btnCookie.onclick = closeCookie;

function closeCookie(){

    cookie.style.display = "none"

    alert("Olá! seja bem vindo(a), Obrigado por acessar meu website!, não se preocupe esse cookie🍪 e apenas estatico, não tem funcionalidade! 😉❤️")

}