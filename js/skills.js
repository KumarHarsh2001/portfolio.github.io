// DOM element where I need to work.
let pre = document.querySelector('.pre')
let next = document.querySelector('.next')
const ul = document.querySelector('.component')
// path for images of different skills
const skills = [
    './img/skills/c++.png',
    './img/skills/python.png',
    './img/skills/html5.png',
    './img/skills/css.png',
    './img/skills/Js.png',
    './img/skills/Bootstrap.png',
    './img/skills/react.png',
    './img/skills/nodeJs.png',
    './img/skills/ExpressJs.png',
    './img/skills/Mongodb.png'
]
// var for responsive 
let itratorRes;
// Var for Non responsive
let itrator;
// for 3 skills show at a time
const skillsItr = (itrator)=>{
    ul.innerHTML = ``
    for(let i=0;i<itrator;i++){
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.setAttribute('src',`${skills[i]}`)
        img.setAttribute('class',`skill-img`)
        li.append(img)
        ul.append(li)
    }
}
// For single skill show
function skillOne(itr){
    ul.innerHTML = ``
    let li = document.createElement('li')
        let img = document.createElement('img')
        img.setAttribute('src',`${skills[itr]}`)
        img.setAttribute('class',`skill-img`)
        li.append(img)
        ul.append(li)
}

// When DOM is loaded
document.addEventListener('DOMContentLoaded',function(){
    console.log("Screen  ",screen.width)
    if(!mql.matches){
        itrator = 3
        skillsItr(itrator)
        nextPreClick()   
        console.log("lap")
    }
    else{
        itratorRes = 0
        skillOne(itratorRes)
        resNextPreClick()
        console.log("res")
    }
  
})

// For Response Media 

function checkResponsive(event){
    if(event.matches){
        itratorRes = 0
        skillOne(itratorRes)
        resNextPreClick()
        console.log("Res")
    }
    else{
        itrator = 3
        skillsItr(itrator)
        nextPreClick()
        console.log("Lap")
    }
}

mql.addListener(checkResponsive)

// Next pre Click function
function nextPreClick(){
    next.addEventListener('click',function(){
        if(itrator > (skills.length-1) ) itrator = skills.length-1
        else itrator = nextEleForlap(itrator) 
    })
    pre.addEventListener('click',function(){
        if(itrator > 0){
            let itr = itrator
            itrator = preEleForLap(itr)
        }
        else itrator = 0
    })
}

// Responsive Next pre Click function
function resNextPreClick(){
    next.addEventListener('click',function(){
        itratorRes++;
        if(itratorRes > (skills.length-1)) itratorRes = skills.length-1;
        nextEle(itratorRes) 
    })
    pre.addEventListener('click',function(){
        itratorRes--;
        if(itratorRes < 1) itratorRes = 0
        preEle(itratorRes)
    })
}
// *********For Non responsive Calll*****************
// when next icon clicked!
function nextEleForlap(itrator){
    let itr = itrator
    ul.innerHTML = ``
    for(itrator;itrator<(itr+3) && itrator<skills.length;itrator++){
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.setAttribute('src',`${skills[itrator]}`)
        img.setAttribute('class',`skill-img`)
        li.append(img)
        ul.append(li)
    }
    if(itrator > (skills.length-1) ){
        itrator = skills.length-1;
    }
    return itrator
}
// when pre icon clicked!
function preEleForLap(itrator){
    ul.innerHTML = ``
    let itr
    if(itrator<3){
        itr = 0
        itrator = 3
    }
    else{
        itr = itrator-3
    }
    for(itr;itr<itrator;itr++){
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.setAttribute('src',`${skills[itr]}`)
        img.setAttribute('class',`skill-img`)
        li.append(img)
        ul.append(li)
    }
    return itrator-3
}
// *************For Responsice call*************
// when next icon clicked!
function nextEle(itratorRes){
    ul.innerHTML = ``
    let li = document.createElement('li')
    let img = document.createElement('img')
    img.setAttribute('src',`${skills[itratorRes]}`)
    img.setAttribute('class',`skill-img`)
    li.append(img)
    ul.append(li)
    itratorRes++;
    return itratorRes
}
// when pre icon clicked!
function preEle(itratorRes){
    ul.innerHTML = ``
    let li = document.createElement('li')
    let img = document.createElement('img')
    img.setAttribute('src',`${skills[itratorRes]}`)
    img.setAttribute('class',`skill-img`)
    li.append(img)
    ul.append(li)
    return itratorRes-1;
}








// function checkResponsive(event){
//     if(event.matches){
//         itratorRes = 0
//         skillOne(itratorRes)
//         next.addEventListener('click',function(){
//             itratorRes++;
//             if(itratorRes > (skills.length-1)) itratorRes = skills.length-1;
//             nextEle(itratorRes) 
//             console.log("From res next itr ", itratorRes)
//         })
//         pre.addEventListener('click',function(){
//             itratorRes--;
//             if(itratorRes < 1) itratorRes = 0
//             preEle(itratorRes)
//             console.log("From res pre itr ", itratorRes)
//         })
//         console.log("Responcive")
//     }
//     else{
//         itrator = 3
//         skillsItr(itrator)
//         next.addEventListener('click',function(){
//             if(itrator > (skills.length-1) ){
//                 itrator = skills.length-1
//             }
//             else{
//                 itrator = nextEleForlap(itrator)
//                 console.log("From lap next itr ", itrator)
//             }  
//         })
//         pre.addEventListener('click',function(){
//             if(itrator > 0){
//                 let itr = itrator
//                 itrator = preEleForLap(itr)
//                 console.log("From lap pre itr ", itrator)
//             }
//             else{
//                 itrator = 0
//             }
//         })
//         console.log("Laptopmode");
//     }
// }

// mql.addListener(checkResponsive)






















// next.addEventListener('click',function(){
//     if(itrator > (skills.length-1) ){
//         itrator = skills.length-1
//     }
//     else{
//         itrator = nextEle(itrator)
//     }  
// })
// pre.addEventListener('click',function(){
//     if(itrator > 0){
//         let itr = itrator
//         itrator = preEle(itr)
//     }
//     else{
//         itrator = 0
//     }
// })