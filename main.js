let btn = document.querySelector('.about');
let for_about = document.querySelector('.for-about');
let bot = document.querySelector('.bot')

for_about.style.display = 'none'
bot.addEventListener('click', () => {
    for_about.style.display = 'none'
})

btn.addEventListener('click', () =>{
    if(for_about.style.display === 'none'){
        for_about.style.display = 'block';
        setTimeout(() => for_about.classList.remove(".for-about"), 10000)
    }
    else {
        for_about.style.display = 'none';
    }
})




















// ScrollReveal({
//     reset: true,
//     distance:'60px',
//     delay: 50,
//     duration: 1500
// });

// ScrollReveal().reveal('.menu-inner1 h4', { delay: 50, interval:100, origin: 'bottom' });