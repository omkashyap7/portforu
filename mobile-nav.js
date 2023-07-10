
    const bars = document.querySelector('.header__bars');
    const mobilenav = document.querySelector('.mobile-nav');
    bars.addEventListener('click', ()=>{
        mobilenav.classList.toggle('mobile-nav');

        
    });

    //for light and dark mode
    const themeTogglebtn = document.querySelectorAll('#theme-toggle');
    themeTogglebtn.forEach(btn =>{
        btn.addEventListener('click', () =>{
            document.body.classList.toggle('light-mode');
        })
    
    });
    



