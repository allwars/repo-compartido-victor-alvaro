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
    const typeOfLineButton = document.querySelectorAll('[data-js-vf="_buttonTypeLine"]');
    const infosPortability = document.querySelectorAll('[data-js-vf="_portability"]');
    const infosNewNumber = document.querySelectorAll('[data-js-vf="_newNumber"]');

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

    // Line Selector
  [...typeOfLineButton].forEach(label => {
    label.addEventListener('click', () => typeLine(label));
  });
  function typeLine(label) {
    const lineType = label.getAttribute("data-js-vf-value");
    if(lineType==="newNumber"){
      newNumber()
    } else {
      portability()
    }
  }
  function portability() {
    secondLine.classList.remove('ws10-u--hidden');
    secondLine2.classList.remove('ws10-u--hidden');
    /*terminalesPorta.classList.remove('ws10-u--hidden');*/

    [...infosPortability].forEach((infoPortability,index) => {
      infoPortability.classList.remove('ws10-u--hidden');
      infosNewNumber[index].classList.add('ws10-u--hidden');
    });



  }
  function newNumber() {
    [...infosNewNumber].forEach((infoNewNumber,index) => {
      infoNewNumber.classList.remove('ws10-u--hidden');
      infosPortability[index].classList.add('ws10-u--hidden');

    });

    secondLine.classList.add('ws10-u--hidden');
    secondLine2.classList.add('ws10-u--hidden');
    /*terminalesPorta.classList.add('ws10-u--hidden');*/
  }


  const selectorTabMobile = document.querySelector('[data-vfms-js="buttonMovil"]');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const customParam = urlParams.get('c');

  //  Función para abrir en la tab de las tarifas de movil
  if (customParam =='movil'){
    setTimeout(function(){ selectorTabMobile.click(); }, 100);
  }
};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
  // DO SOMETHING
  const typeOfSpeedButton = document.querySelectorAll('[data-js-vf="_buttonSpeed"]');
  const infoRegular = document.querySelectorAll('[data-js-vf="_regularRate"]');
  const infoRecommended = document.querySelectorAll('[data-js-vf="_recommendedRate"]');

  const recommededCheck = document.querySelector('[data-js-vf="recommendedRateCheck"]');
  const regularCheck = document.querySelector('[data-js-vf="regularRateCheck"]');

  const queryString = window.location.search;
  console.log(queryString);
  if(queryString==="?600mbps" || queryString==="?600mbps=" ){
    regularRate()
    
  } else {
    recommendedRate()   
  }


   [...typeOfSpeedButton].forEach(label => {
     label.addEventListener('click', () => typeSpeed(label));
   });

   function typeSpeed(label) {
     const speedType = label.getAttribute("data-js-vf-value");
     if(speedType==="recommendedRate"){
       recommendedRate() 
     } else {
       regularRate()
     }
   }
   function regularRate() {
     [...infoRegular].forEach((infoRegular,index) => {
       infoRegular.classList.remove('ws10-u--hidden');
       infoRecommended[index].classList.add('ws10-u--hidden');
       recommededCheck.removeAttribute("checked", "");
       regularCheck.setAttribute("checked", "");

       infoRegular.removeAttribute("aria-hidden", "true");
       infoRecommended[index].setAttribute("aria-hidden", "true");
       
     });
   }
   function recommendedRate() {
     [...infoRecommended].forEach((infoRecommended,index) => {
       infoRecommended.classList.remove('ws10-u--hidden');
       infoRegular[index].classList.add('ws10-u--hidden');
       regularCheck.removeAttribute("checked", "");
       recommededCheck.setAttribute("checked", "");

       infoRecommended.removeAttribute("aria-hidden", "true");
       infoRegular[index].setAttribute("aria-hidden", "true");
     });
   }

};
