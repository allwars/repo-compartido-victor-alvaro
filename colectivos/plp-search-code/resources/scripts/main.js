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
    const searchForm = document.querySelector('.js-form');
    const inputSearch = document.getElementById('searchCode');
    const buttonSearch = document.querySelector('.vfms-button__search');
    const buttonUnderstood = document.querySelector('.vfms-button__understood'); 
    const modals = document.querySelector('[data-vfes-js="_modal"]');
    const modalFindCode = document.getElementById('codeFind');
    const modalNoFoundCode = document.getElementById('noFoundCode');
    const instanceModal = new ws10.backdrop({ $element: modals });
    const textClean = document.querySelector('.vfms-text-clean');
    let company = ""
    let companySelected = document.getElementById('company-selected');
    const btnClose = document.querySelector('[data-js-vf="vfms-close"]');
    textClean.addEventListener("click", function () { buttonSearch.disabled = true });
    buttonSearch.addEventListener("click", findCode);
    buttonUnderstood.addEventListener("click", closeBackDropAndClean);

    function closeBackDropAndClean(e) {
        e.preventDefault(); 
        btnClose.click();
    }

    const  errorText= document.querySelector('[data-js-vf="error-text"]');

   
    

    function findCode(e) {
        e.preventDefault(); 
        let inputCode = inputSearch.value.toUpperCase();
        
        fetch('https://www.vodafone.es/c/srv/vf-back-trastienda/api/urlCode/getInfoByCode', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({code:inputCode}),
        })
            .then(response => response.json())
            .then(json => {
                console.log("json-", json.existsCode)
                let codes = json.existsCode;

                company = json.company; 
                if (codes===true ){           
                    companySelected.innerHTML = company;
                    // descomentar en producción
                    checkPopUp("valido");
                    const contentModal = document.querySelector("#modalok");
                    ws10.utils.getInstanceForElement(contentModal).openBackdrop(contentModal.querySelector("#search-result"));                  
                }
                else{ 
                    // descomentar en producción               
                    checkPopUp("invalido");
                    const contentModal = document.querySelector("#modalko");
                    ws10.utils.getInstanceForElement(contentModal).openBackdrop(contentModal.querySelector("#search-result"));  
                }
            });
    }    
    let counterKeys = 0;
    const inputHandler = (currentText) => {
        const inputCurrentText = currentText;
        const inputStr = inputSearch.value
        var hyphen = inputStr.charAt(11);
        console.log("hyphen", hyphen );
        counterKeys +=1;
        console.log("input-current", inputCurrentText );
        console.log("input", inputStr.length )
        if (inputStr.length === 1 && inputCurrentText!="VF"){
            showError();
        }
        else{
            hideError();
        } 
        if (inputStr.length === 2 && inputCurrentText!="VF-"){
            showError();
        }
        else{
            hideError();
        } 
        inputSearch.value.length === 16 ? buttonSearch.disabled = false : buttonSearch.disabled = true ;
    }
    function showError() {
        errorText.classList.remove('ws10-u--hidden');  
        inputSearch.classList.add('ws10-c-text-field__input--error');  
    }

    function hideError() {
        errorText.classList.add('ws10-u--hidden');  
        inputSearch.classList.remove('ws10-c-text-field__input--error');  
    }

    const checkValueLength = event => {
        (event.keyCode === 8 && inputSearch.value.length === 16) || inputSearch.value.length === 16 ? buttonSearch.disabled = false : buttonSearch.disabled = true ;
    }
    inputSearch.addEventListener('keypress', e => inputHandler(e.target.value + e.key));
    inputSearch.addEventListener('keyup', checkValueLength);
  
   
};
