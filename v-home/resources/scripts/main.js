import tools from './tools';
/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING

    const typeOfLineButton = document.querySelectorAll('[data-js-vf="_buttonTypeLine"]');
    const infosPortability = document.querySelectorAll('[data-js-vf="_plazos"]');
    const infosNewNumber = document.querySelectorAll('[data-js-vf="_contado"]');
    const surprisePlazos = document.querySelector('[data-js-vf="_surprisePlazos"]');
    const surpriseContado = document.querySelector('[data-js-vf="_surpriseContado"]');
    const surprisePlazos2 = document.querySelector('[data-js-vf="_surprisePlazos2"]');
    const surpriseContado2 = document.querySelector('[data-js-vf="_surpriseContado2"]');

    const showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
    const stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');

    const banner = document.querySelector('[data-js="_banner"]');
    const ticket = document.querySelector('[data-js-vf="_ticket"]');
    const mddFooter = document.querySelector('.MDDfooter');
    const mddHeader = document.querySelector('.mdd-desktop');


    let width = document.documentElement.clientWidth;
    let isDesktop = width > 768;


    [...typeOfLineButton].forEach(label => {
        label.addEventListener('click', () => typeLine(label));

    });

    document.addEventListener('scroll', showStickyRate);

    if( isDesktop ){
        document.addEventListener('scroll', positionOfTicket);
        document.addEventListener('scroll', ticketOpacity);
    }



    function typeLine(label) {
        const lineType = label.getAttribute("data-js-vf-value");
        if(lineType==="newNumber"){
            newNumber()
        } else {
            portability()
        }
    }
    function portability() {
      surprisePlazos.classList.remove('ws10-u--hidden');
      surpriseContado.classList.add('ws10-u--hidden');
      surprisePlazos2.classList.remove('ws10-u--hidden');
      surpriseContado2.classList.add('ws10-u--hidden');
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
        surprisePlazos.classList.add('ws10-u--hidden');
        surpriseContado.classList.remove('ws10-u--hidden');
        surprisePlazos2.classList.add('ws10-u--hidden');
        surpriseContado2.classList.remove('ws10-u--hidden');
    }

    function showStickyRate(){
        let showStickyHeight = showSticky.getBoundingClientRect();
        if (showStickyHeight.top <= 0){
            stickyRate.classList.remove('ws10-u--hidden')

        } else {
            stickyRate.classList.add('ws10-u--hidden')

        }
    }

    function ticketOpacity(){
        let ticketHeight = ticket.offsetHeight;
        let mddHeaderHeight = mddHeader.offsetHeight;
        let mddFooterHeight = mddFooter.getBoundingClientRect();

        if((mddFooterHeight.top - (ticketHeight + mddHeaderHeight)) < 0){
            ticket.classList.add('vf-ticket__opacity0')
        } else {
            ticket.classList.remove('vf-ticket__opacity0')

        }
    }

    function positionOfTicket() {
        let infoBanner = banner.getBoundingClientRect();
        if(infoBanner.top < 0){
            ticket.setAttribute('style', 'position:fixed; top: 70px;');
        } else {
            ticket.setAttribute('style', 'position:absolute;');
        }

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
