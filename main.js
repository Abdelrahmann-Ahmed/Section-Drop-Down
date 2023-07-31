dropOne = document.getElementsByClassName("links")[0].children[0]
dropTwo = document.getElementsByClassName("links")[0].children[1]
buttonThree = document.getElementsByClassName("links")[0].children[2]
buttonFour = document.getElementsByClassName("links")[0].children[3]
button = document.getElementsByTagName("button")[0]
login = document.getElementsByClassName("sec-2")[0].children[0]
rigister = document.getElementsByClassName("sec-2")[0].children[1]
drop1 = document.getElementsByClassName("drop-1")[0]
drop2 = document.getElementsByClassName("drop-2")[0]



dropOne.addEventListener("mouseenter",function() {
    drop1.style.visibility = "visible"  
    dropOne.style.fontWeight = "bold"
})


dropTwo.addEventListener("mouseenter",function() {
    drop2.style.visibility = "visible"
    dropTwo.style.fontWeight = "bold" 
})


dropOne.addEventListener("mouseleave",function() {
    drop1.style.visibility = "hidden"
    dropOne.style.fontWeight = "100"
})

dropTwo.addEventListener("mouseleave",function() {
    drop2.style.visibility = "hidden"
    dropTwo.style.fontWeight = "100"
})

buttonThree.addEventListener("mouseenter",function() {
    buttonThree.style.fontWeight = "bold"
}) 
buttonThree.addEventListener("mouseleave",function() {
    buttonThree.style.fontWeight = "100"
}) 

buttonFour.addEventListener("mouseenter",function() {
    buttonFour.style.fontWeight = "bold"
}) 
buttonFour.addEventListener("mouseleave",function() {
    buttonFour.style.fontWeight = "100"
}) 

login.addEventListener("mouseenter",function() {
    login.style.fontWeight = "bold"
}) 
login.addEventListener("mouseleave",function() {
    login.style.fontWeight = "100"
})

rigister.addEventListener("mouseenter",function() {
    rigister.style.fontWeight = "bold"
}) 
rigister.addEventListener("mouseleave",function() {
    rigister.style.fontWeight = "100"
})

button.addEventListener("mouseenter",function() {
    button.style.backgroundColor = "white"
    button.style.color = "black"
})
button.addEventListener("mouseleave",function() {
    button.style.backgroundColor = "black"
    button.style.color = "white"
})


function drop(element) {
    element.style.visibility = "visible"
    element.style.fontWeight = "bold"
}

function bold (element) {
    element.style.fontWeight = "bolder"
}