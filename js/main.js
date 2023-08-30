const nav = document.querySelector('.nav')
window.addEventListener('click',function(e) {
    if(mql.matches){
        if((e.target !== nav)){
            document.querySelector('#headerId').classList.remove('nav-add');
            // larr.style.display = 'none';
            ham.style.display = 'inline';
        }
        if((e.target === ham)){
            document.querySelector('#headerId').classList.add('nav-add');
            // larr.style.display = 'inline';
            ham.style.display = 'none';
        } 
    }
})


function resNature(event){
    if(event.matches){
        document.querySelector('#headerId').classList.remove('nav-add');
        ham.style.display = 'inline';
    }
}
mql.addListener(resNature)


// document.addEventListener('DOMContentLoaded',()=>{
//     if(screen.width < 550){
//         console.log("screen width",screen.width)
//     }
// })

// window.addEventListener('click',function(e) {
//     if((e.target !== ham)){
//         // ham.style.display = 'inline'
//             }
    

//     if(mql.matches){
//         if((e.target !== ham)){
//             // ham.style.display = 'inline'
//             console.log("working")
//                 }
//     }
// })







// const mql1 = window.matchMedia('(max-width: 550px)');

// const handleMedia = (event) => {
//     console.log("working") 
//     if (event.matches) {
       
//         console.log("match working") 
//     } 
//     else { 
//         console.log("match media not working") 
//         larr.style.display = 'none';
//         ham.style.display = 'none';
//     }

//   };

// mql1.addListener(handleMedia);