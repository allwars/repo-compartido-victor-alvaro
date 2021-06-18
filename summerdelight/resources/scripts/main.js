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
    const cardFilters = document.querySelectorAll('[data-js-vf="_filter"]');

    [...cardFilters].forEach(filter => {
        filter.addEventListener('click', () => changeFilter(filter));
    });

    function changeFilter(filter) {
        if ( filter.classList.contains('vf-filter-one') ){
            [...familyCards].forEach(filter => {
                filter.classList.remove("ws10-u--hidden");
            });
        } else {
            [...familyCards].forEach(filter => {
                filter.classList.add("ws10-u--hidden");
            });
        }
        console.log(filter);
        // familyCards.classList.remove("ws10-u--hidden");
    }

};
