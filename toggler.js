export function toggleTheme(e) {
    if (e.target.attributes.src.textContent == 'images/icon-sun.svg') {
        console.log('sun');
        document.body.style.setProperty('--background', '#f9fafe')
        document.body.style.setProperty('--offWhite', '#000')
        document.body.style.setProperty('--selago', '#dfe3fa')
        document.body.style.setProperty('--darkGreen', '#f8f8fb')
        document.body.style.setProperty('--darkAccent', '#f8f8fb')
        document.body.style.setProperty('--purple', '#7c5dfa')
        document.querySelector('.switch img').src = 'images/icon-moon.svg'
    } 
     else if(e.target.attributes.src.textContent == 'images/icon-moon.svg') {
        console.log('moon');
            document.body.style.setProperty('--background', '#10121e')
            document.body.style.setProperty('--offWhite', '#f9fafe')
            document.body.style.setProperty('--selago', '#252945')
            document.body.style.setProperty('--darkGreen', 'rgba(0, 96, 100,0.3)')
            document.body.style.setProperty('--darkAccent', '#494e6e')
            document.body.style.setProperty('--purple', '#f9fafe')
            document.querySelector('.switch img').src = 'images/icon-sun.svg'
           
        }
    }
