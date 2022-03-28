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

        // couleurs selon le niveau >0
        if (count === 12) {
            counter.style.color = 'blue'
        }
        if (count > 0) {
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