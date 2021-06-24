import tools from './tools';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING


    const buttonsTypeTotal = document.querySelectorAll('[data-js-vf="_buttonVelocity"]');
    const badgeTotal = document.querySelector('[data-js-vf="_badgeTotal"]');

    // Función para elegir el tipo de Vodafone One ilimitada Total

    [...buttonsTypeTotal].forEach(button =>{
        button.addEventListener("click", () => typeOfRate());
    })
    function typeOfRate() {
       const typeOfTotal = document.querySelectorAll('[data-js-vf="_priceTotal"]');
       

       [...buttonsTypeTotal].forEach((button, index) =>{
       
            if (button.classList.contains('vf-active')){
                button.classList.remove('vf-active');
                button.classList.remove('vf-bold');
                typeOfTotal[index].classList.add('ws10-u--hidden');
                badgeTotal.classList.add('ws10-u--hidden');
                
            } else {
                button.classList.add('vf-active');
                button.classList.add('vf-bold');
                typeOfTotal[index].classList.remove('ws10-u--hidden');
                badgeTotal.classList.remove('ws10-u--hidden');
            }
        })
    }

    



    const buttonsTypeMaxi = document.querySelectorAll('[data-js-vf="_buttonVelocityMaxi"]');
    const badgeMaxi = document.querySelector('[data-js-vf="_badgeMaxi"]');

    // Función para elegir el tipo de Vodafone One ilimitada MAxi

    [...buttonsTypeMaxi].forEach(button =>{
        button.addEventListener("click", () => typeOfRateMaxi());
    })
    function typeOfRateMaxi() {
       const typeOfMaxi = document.querySelectorAll('[data-js-vf="_priceMaxi"]');
      

       [...buttonsTypeMaxi].forEach((button, index) =>{
        
            if (button.classList.contains('vf-active')){
                button.classList.remove('vf-active');
                button.classList.remove('vf-bold');
                typeOfMaxi[index].classList.add('ws10-u--hidden');
                badgeMaxi.classList.add('ws10-u--hidden');
                
                
            } else {
                button.classList.add('vf-active');
                button.classList.add('vf-bold');
                typeOfMaxi[index].classList.remove('ws10-u--hidden');
                badgeMaxi.classList.remove('ws10-u--hidden');
               
                
            }
        })
    }




    const buttonsTypeIlimitada = document.querySelectorAll('[data-js-vf="_buttonVelocityIlimitada"]');
    const badgeIlimitada = document.querySelector('[data-js-vf="_badgeIlimitada"]');

    // Función para elegir el tipo de Vodafone One ilimitada 

    [...buttonsTypeIlimitada].forEach(button =>{
        button.addEventListener("click", () => typeOfRateIlimitada());
    })
    function typeOfRateIlimitada() {
       const typeOfIlimitada = document.querySelectorAll('[data-js-vf="_priceIlimitada"]');

       [...buttonsTypeIlimitada].forEach((button, index) =>{
            if (button.classList.contains('vf-active')){
                button.classList.remove('vf-active');
                button.classList.remove('vf-bold');
                typeOfIlimitada[index].classList.add('ws10-u--hidden');
                badgeIlimitada.classList.add('ws10-u--hidden');
            } else {
                button.classList.add('vf-active');
                button.classList.add('vf-bold');
                typeOfIlimitada[index].classList.remove('ws10-u--hidden');
                badgeIlimitada.classList.remove('ws10-u--hidden');
            }
        })
    }
};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

};
