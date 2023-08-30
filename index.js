const ham = document.querySelector('#ham')
const mql = window.matchMedia('(max-width: 550px)');

// const larr = document.querySelector('#larr')

// document.querySelector('#ham').addEventListener('click',() => {
//     document.querySelector('#headerId').classList.add('nav-add');
//     larr.style.display = 'inline';
//     ham.style.display = 'none';
// } 
// )
// document.querySelector('#larr').addEventListener('click',() => {
//     document.querySelector('#headerId').classList.remove('nav-add');
//     ham.style.display = 'inline';
//     larr.style.display = 'none';
// })


const handleMediaChange = (event) => {
    if (!event.matches) {
        ham.style.display = 'none';
    }


    //     if (event.matches) {
//         // The media query is true (the viewport is 600px or narrower)
//         // Run your code here
//         // ham.style.display = 'inline'
//         if(ham.style.display !== 'inline'){
//             larr.style.display = 'inline'
//         }
//         if(larr.style.display === 'none'){
//             ham.style.display = 'inline';
//             document.querySelector('#headerId').classList.remove('nav-add');
//         }
    
//     } 
//     else {
//         // The media query is false (the viewport is wider than 600px)
//         // Run your code here
//         larr.style.display = 'none';
//         ham.style.display = 'none';
//     }
};

mql.addListener(handleMediaChange);




