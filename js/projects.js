const header=["ShopForHome","Currency Converter","Quotes Generator","Face Recognition","Anand: The mini Robot","Advance Traffic Light Control System"," Dual Energy System","Pollution Catcher"]
const desc = [
    "It is a e-commerce online shopping website which is developed for purchasing home essentials product. Where React and Material UI is used for frontend, Nodejs is used for backend and Mongodb is used to store information about products. This site is made for admin (Can update quantity and Details of product) as well as user (Can visit and purchase products).",
    "It is basic html5,css,javascript based project which is design for find any currency rate based on present time scenario. It's responsive in nature.",
    "This project can create different quotes with their author name and it is responsive in nature. It works on HTML5, CSS, Javascript.",
    "The code of this project is written in python language, in which through Machine Learning, program will train to capture the face after that it identify that who the person is.",
    "In this project, There are a boat with four wheels and one hand. With the help of Code(which write in Embedded C) fed into Arduino Uno(Atmega 328 Microcontroller) to control their wheels as well as their hands By Mobile Phone.",
    " It is a prototype of real traffic light. This project had extrafeatures as compared to real traffic light system (To give priority to emergency vehicles like:- Ambulance as well as government vehicle). It is programmed in embedded C language on Arduino software and work with Arduino UNO(Atmega328 microcontroller).",
    "The main feature of this system is to store energy from two different natural resources ( Like:- Solar Energy and Wind energy). The structure of this system is similar to sunflower whose petal work as fan which will rotate when wind will blow And face of the system will change along with sun to get maximum energy.",
    "There are two exhaust which connected with one side of a chamber and the other side is covered with three to four air filter layer ( like:- charcoal layer, polyurethane foam layer). So when exhaust is on, then the dirty air is capture by one end of chamber and pure air exit by exhaust."
]
const github =[
    'https://github.com/KumarHarsh2001/Shop4Home.git',
    'https://github.com/KumarHarsh2001/Exchange_Currency.github.io/tree/master',
    'https://github.com/KumarHarsh2001/Quotes.github.io',
    'https://github.com/KumarHarsh2001/Advance-Traffic-Control-System-ATCS-',
    'https://kumarharsh2001.github.io/Exchange_Currency.github.io/',
    'https://kumarharsh2001.github.io/Exchange_Currency.github.io/',
    'https://kumarharsh2001.github.io/Exchange_Currency.github.io/'
]
const visit = [
    'https://kumarharsh2001.github.io/error.github.io/',
    'https://kumarharsh2001.github.io/Exchange_Currency.github.io/',
    'https://kumarharsh2001.github.io/Quotes.github.io/',
    'https://kumarharsh2001.github.io/error.github.io/',
    'https://kumarharsh2001.github.io/error.github.io/',
    'https://kumarharsh2001.github.io/error.github.io/',
    'https://kumarharsh2001.github.io/error.github.io/'
    
]

const project_ul = document.querySelector('.project')

function project_box(i){
    
    const li = document.createElement('li')
    li.setAttribute('class','project-box')

    const heading = document.createElement('div')
    heading.setAttribute('class','heading')
    heading.innerHTML = header[i];

    const discription = document.createElement('div')
    discription.setAttribute('class','project-discription')
    discription.innerHTML = desc[i];

    const proBtn = document.createElement('div');
    proBtn.setAttribute('class','project-btn')

    const btn1 = document.createElement('button')
    btn1.setAttribute('class','btn')

    const a1 = document.createElement('a');
    a1.setAttribute('class','lnk1')
    a1.setAttribute('href',github[i]);
    a1.setAttribute('target','_blank')
    a1.innerHTML = `GitHub`
    btn1.append(a1)

    const btn2 = document.createElement('button')
    btn2.setAttribute('class','btn')
    const a2 = document.createElement('a');
    a2.setAttribute('class','lnk2')
    a2.setAttribute('href',visit[i]);
    a2.setAttribute('target','_blank')
    a2.innerHTML = `Visit`
    btn2.append(a2)

    proBtn.append(btn1)
    proBtn.append(btn2)

    li.append(heading)
    li.append(discription)
    li.append(proBtn)

    project_ul.append(li)

    // console.log(i);
}
function project_box_without_btn(i){
    
    const li = document.createElement('li')
    li.setAttribute('class','project-box')

    const heading = document.createElement('div')
    heading.setAttribute('class','heading')
    heading.innerHTML = header[i];

    const discription = document.createElement('div')
    discription.setAttribute('class','project-discription')
    discription.innerHTML = desc[i];

    // const proBtn = document.createElement('div');
    // proBtn.setAttribute('class','project-btn')

    // const btn1 = document.createElement('button')
    // btn1.setAttribute('class','btn')

    // const a1 = document.createElement('a');
    // a1.setAttribute('class','lnk1')
    // a1.setAttribute('href',github[i]);
    // a1.setAttribute('target','_blank')
    // a1.innerHTML = `GitHub`
    // btn1.append(a1)

    // const btn2 = document.createElement('button')
    // btn2.setAttribute('class','btn')
    // const a2 = document.createElement('a');
    // a2.setAttribute('class','lnk2')
    // a2.setAttribute('href',visit[i]);
    // a2.setAttribute('target','_blank')
    // a2.innerHTML = `Visit`
    // btn2.append(a2)

    // proBtn.append(btn1)
    // proBtn.append(btn2)

    li.append(heading)
    li.append(discription)
    // li.append(proBtn)

    project_ul.append(li)

}

document.addEventListener('DOMContentLoaded',function(){
    for(let i=0;i<header.length;i++){
        if(i<3){
            project_box(i);
        }
        else{
           console.log(i);
            project_box_without_btn(i);
       }
   }
})
    



