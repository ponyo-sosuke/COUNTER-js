

// buttons and counter text

// on construit le counteur
const counter = document.querySelector("#counter")
// on passe aux boutons
const btns = document.querySelectorAll('.btn')

// commande pour chaque bouton
// initialize the count variable
let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e. currentTarget.classList

        if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('decrease')) {
            count--
        } else {
            count = 0
        }

        // inferieur a 0 impossible
        if (count <= 0) {
            count = 0
        }
        // si au dessus de 12 reste a 12
        if (count > 12) {
            count = 12
        }

        // couleurs selon le niveau >0
        if (count === 12) {
            counter.style.color = 'blue'
        }
        // entre 0 et strictement 11
        if (count > 0 && count < 12) {
            counter.style.color = 'red'
        }
        // violet si <0
        if (count < 0) {
            counter.style.color = 'purple'
        }
        // egal a 0
        if (count === 0) {
            counter.style.color = 'gray'
        }
        

        counter.textContent = count
    })
})

