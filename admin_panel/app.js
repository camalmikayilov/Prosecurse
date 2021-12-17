const title = document.querySelector("#title")
const desc = document.querySelector("#desc")
const img = document.querySelector("#img")
const send = document.querySelector(".send")
const clear = document.querySelector(".clear")


let newImageResult = null
    img.addEventListener("change",(e)=>{
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = ()=>{
            newImageResult = reader.result
        }
        reader.readAsDataURL(file)
    })

send.addEventListener("click",()=>{
    axios.post("https://camal-ddf46-default-rtdb.firebaseio.com/advice.json",{title : title.value , desc: desc.value, 
        id : Date.now(), img : newImageResult})
        .then(res=>{
            console.log(res)
            title.value = ""
            desc.value = ""
            img.value = ""
        })
        .catch(error=>console.log(error))
})

clear.addEventListener("click",()=>{
    axios.delete("https://camal-ddf46-default-rtdb.firebaseio.com/advice.json").then(res=>console.log(res))
    .catch(error=>console.log(error))
})


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

const titles = document.querySelector("#titles")
const dec = document.querySelector("#dec")
const icon = document.querySelector("#icon")
const sends = document.querySelector(".sends")
const clears = document.querySelector(".clears")


let newIconResult = null
    icon.addEventListener("change",(e)=>{
        const files = e.target.files[0]
        const readers = new FileReader()
        readers.onloadend = ()=>{
            newIconResult = readers.result
        }
        readers.readAsDataURL(files)
    })

sends.addEventListener("click",()=>{
    axios.post("https://camal-ddf46-default-rtdb.firebaseio.com/we.json",{ icon : newIconResult, titles : titles.value , dec: dec.value, 
        id : Date.now(),})
        .then(res=>{
            console.log(res)
            icon.value = ""
            titles.value = ""
            dec.value = ""
        })
        .catch(error=>console.log(error))
})
clears.addEventListener("click",()=>{
    axios.delete("https://camal-ddf46-default-rtdb.firebaseio.com/we.json").then(res=>console.log(res))
    .catch(error=>console.log(error))
})