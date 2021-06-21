import tools from './tools';


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */
tools.onStylesReady = () => {
    console.log("Site visually ready");
    // DO SOMETHING


};


/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */
tools.onFrameworkReady = () => {
    console.log("Site functionality ready");
    // DO SOMETHING

    const familyCards = document.querySelectorAll('[data-js-vf="family"]');
    const cardFilterOne = document.querySelector('.vf-filter-one');
    const checkOne = cardFilterOne.querySelector('input');
    const cardFilterTwo = document.querySelector('.vf-filter-two');
    const checkTwo = cardFilterTwo.querySelector('input');

    cardFilterOne.addEventListener('click', (e) => filterOne(e));
    cardFilterTwo.addEventListener('click', (e) => filterTwo(e));

    function filterOne(e) {
        [...familyCards].forEach(filter => {
            filter.classList.remove("ws10-u--hidden");
        });
        e.currentTarget.classList.add("ws10-c-filter--white");
        cardFilterTwo.classList.remove("ws10-c-filter--white");
        checkOne.checked = true;
        checkTwo.checked = false;
    }

    function filterTwo(e) {
        [...familyCards].forEach(filter => {
            filter.classList.add("ws10-u--hidden");
        });
        e.currentTarget.classList.add("ws10-c-filter--white");
        cardFilterOne.classList.remove("ws10-c-filter--white");
        checkOne.checked = false;
        checkTwo.checked = true;
    }
};
