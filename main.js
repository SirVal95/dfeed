// let btn = document.querySelector('.about');
// let for_about = document.querySelector('.for-about');
// let bot = document.querySelector('.bot')

// for_about.style.display = 'none'
// bot.addEventListener('click', () => {
//     for_about.style.display = 'none'
// })

// btn.addEventListener('click', () =>{
//     if(for_about.style.display === 'none'){
//         for_about.style.display = 'block';
//         setTimeout(() => for_about.classList.remove(".for-about"), 10000)
//     }
//     else {
//         for_about.style.display = 'none';
//     }
// })


window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a')

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    }), 1000;

    // for (let i = 0; i < anchors.length; i++) {
    //     const anchor = anchors[i];

    //     anchor.addEventListener('click', e => {
    //         e.preventDefault();
    //         let target = e.target.href;

    //         transition_el.classList.add('is-active');

    //         setTimeout(() => {
    //             window.location.href = target;
    //         }, 1000);
    //     })

        
    // }
}















// ScrollReveal({
//     reset: true,
//     distance:'60px',
//     delay: 50,
//     duration: 1500
// });

// ScrollReveal().reveal('.in-in-about h1, .in-in-about2 h3', { delay: 50, interval:100, origin: 'top' });
// ScrollReveal().reveal('.in-in-about h4, .in-in-about2 h4, .testimonies', { delay: 50, interval:100, origin: 'bottom' });