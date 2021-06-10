import tools from './tools';
import {
  analyticsAndThirdURLForCta,
  keysCTAS
} from './analyticsAndThirdURLForCta';
import utad_data from './utag_data';


/*
 *   Método que se dispara cuando el ws2r.vX.css
 *   ya se ha cargado y ha pintado la web
 * */
tools.onStylesReady = () => {
  console.log('Site visually ready');
  // DO SOMETHING
};



/*
 *   Método que se dispara cuando el ws2r.vX.js
 *   ya se ha cargado y está diponible.
 * */
tools.onFrameworkReady = () => {

  console.log('Site functionality ready');

  // Speed Selector
  const typeOfSpeedButton = document.querySelectorAll('[data-js-vf="_buttonSpeed"]');
  const typeOfLineButton = document.querySelectorAll('[data-js-vf="_buttonTypeLine"]');

  // Bloques de información para mostrar y/o ocultar en el HTML
  

  const infoPortability = document.querySelectorAll('[data-js-vf="_portability"]');
  const infoNewNumber = document.querySelectorAll('[data-js-vf="_newNumber"]');

  const secondLine = document.querySelectorAll('[data-js-vf="_secondLine"]');
  const secondLine2 = document.querySelectorAll('[data-js-vf="_secondLine2"]');


  const showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
  const stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');
  const banner = document.querySelector('[data-js="_banner"]');
  const ticket = document.querySelector('[data-js-vf="_ticket"]');
  const mddFooter = document.querySelector('.MDDfooter');
  const mddHeader = document.querySelector('.mdd-desktop');

  const queryString = window.location.search;

  /**
   * Declaración de las fucniones. 
   */


  /**
   * Función para mostrar u ocultar elementos dentro del HTML en función de la acción que se le pase. 
   * @param {string} action tipo de acción a ejecutar
   * @param {array} listInfo Listado de elementos HTML sobre los que se ejecutará la acción 
   * @returns 
   */
  const toggleInfo = (action = 'hide', listInfo = []) => {
    if (listInfo.length === 0) return console.error(`[Fn: toogleInfoRegular] The param listInfo is empty `)
    const actions = {
      'hide': () => {
        listInfo.forEach((item) => {
          item.classList.add('ws10-u--hidden');
          item.setAttribute('aria-hidden', 'true');
        })
      },
      'show': () => {
        listInfo.forEach((item) => {
          item.classList.remove('ws10-u--hidden');
          item.removeAttribute('aria-hidden', 'true');
        })
      }
    }
    actions[action]()
    return false
  }

  /**
   * Función que recibe un element HTML para ver que tipo de acción va a ejecutar. 
   * @param {HTMLElement} label Elemento del HTML que deciditá la acción  
   */
  const actionsType = (label) => {
    const speedType = label.getAttribute('data-js-vf-value');
    const rate = {
      "newNumber": () => newNumber(),
      "portability": () => portability()
    }
    rate[speedType]();
  }

  /**
   * Función que Oculta la información de la tarifa recomendad y muestra la información de la tarifa regular. 
   * Marcar el checkbutton correspondiente 
   */


  /**
   * Función que MUESTRA la información de la TARIFA RECOMENDA y OCULTA la información de la TARIFA REGULAR
   */




  /**
   * Función que MUESTRA la información de PORTABILIDAD y OCULTA la información de la NUEVO NUMERO
   */

  const portability = () => {
    toggleInfo('show', [...infoPortability, ...secondLine, ...secondLine2])
    toggleInfo('hide', infoNewNumber)
  }

  /**
   * Función que MUESTRA la información de NUEVO NUMERO y OCULTA la información de la PORTABILIDAD
   */

  const newNumber = () => {
    toggleInfo('show', infoNewNumber)
    toggleInfo('hide', [...infoPortability, ...secondLine, ...secondLine2])
  }


  /**
   * Funcionalidades para el ticket de la página
   */
  const showStickyRate = () => {
    const infoBanner = banner.getBoundingClientRect();
    if ((infoBanner.bottom - 80) < 0) {
      stickyRate.classList.remove('ws10-u--hidden');
    } else {
      stickyRate.classList.add('ws10-u--hidden');
    }
  }

  const hideStickyRate = () => {
    const mddFooterHeight = mddFooter.getBoundingClientRect();
    const showStickyHeight = stickyRate.getBoundingClientRect();

    if (mddFooterHeight.top < showStickyHeight.top) {
      stickyRate.classList.add('ws10-u--hidden');
    }
  }

  const positionOfTicket = () => {
    let infoBanner = banner.getBoundingClientRect();
    if (infoBanner.top < 0) {
      ticket.setAttribute('style', 'position:fixed; top: 50px;');
    } else {
      ticket.setAttribute('style', 'position:absolute;');
    }
  }

  const ticketOpacity = () => {
    let ticketHeight = ticket.offsetHeight;
    let mddHeaderHeight = mddHeader.offsetHeight;
    let mddFooterHeight = mddFooter.getBoundingClientRect();
    if ((mddFooterHeight.top - (ticketHeight + mddHeaderHeight)) < 0) {
      ticket.classList.add('vf-ticket__opacity0');
    } else {
      ticket.classList.remove('vf-ticket__opacity0');
    }
  }


  /**
   * Funcionalidades para la analitica de la web
   */

  /**
   *
   *
   * @param {object} jsonData Información que tiene que incluirse en el HTML
   */
  const addAnalyticsThirdURL = (jsonData) => {
    const ctaList = document.querySelectorAll('[data-cta]');
    ctaList.forEach(cta => {
      const textA11y = cta.querySelector('[data-cta-a11y]');
      const [
        velocity,
        type,
        position
      ] = cta.getAttribute('data-cta').split(':');

      if (analyticsAndThirdURLForCta[velocity][type][position]?.url !== undefined) cta.setAttribute('href', analyticsAndThirdURLForCta[velocity][type][position]?.url);
      if (analyticsAndThirdURLForCta[velocity][type][position]?.category !== undefined) cta.setAttribute('data-analytics-category', analyticsAndThirdURLForCta[velocity][type][position]?.category);
      if (analyticsAndThirdURLForCta[velocity][type][position]?.element !== undefined) cta.setAttribute('data-analytics-element', analyticsAndThirdURLForCta[velocity][type][position]?.element);
      if (analyticsAndThirdURLForCta[velocity][type][position]?.context !== undefined) cta.setAttribute('data-analytics-context', analyticsAndThirdURLForCta[velocity][type][position]?.context);
      if (analyticsAndThirdURLForCta[velocity][type][position]?.id !== undefined) cta.setAttribute('data-analytics-id', analyticsAndThirdURLForCta[velocity][type][position]?.id);
      if (analyticsAndThirdURLForCta[velocity][type][position]?.callToAction !== undefined) cta.setAttribute('onmousedown', analyticsAndThirdURLForCta[velocity][type][position]?.callToAction);
      if (analyticsAndThirdURLForCta[velocity][type][position]?.a11y !== undefined) textA11y.innerHTML = analyticsAndThirdURLForCta[velocity][type][position]?.a11y;
    });
  };

  /**
   * Bloque de inicialización de la página
   */

  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('scroll', () => {
      positionOfTicket();
      ticketOpacity();
      showStickyRate();
      hideStickyRate();
    });
  } else {
    document.addEventListener('scroll', () => {
      showStickyRate();
      hideStickyRate();
    });
  }


  [...typeOfSpeedButton].forEach(label => {
    label.addEventListener('click', () => actionsType(label));
  });

  [...typeOfLineButton].forEach(label => {
    label.addEventListener('click', () => actionsType(label));
  });

  addAnalyticsThirdURL(analyticsAndThirdURLForCta)
};
