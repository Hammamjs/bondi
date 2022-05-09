


let lis = document.querySelectorAll('.navbar .nav-link');



lis.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        lis.forEach(li => {
            li.classList.remove('active');
        })
        e.target.classList.add('active');

        let sc = document.getElementById(el.getAttribute('data-scroll'));

        sc.scrollIntoView({behavior: 'smooth' , block: 'start'})


    });

});

