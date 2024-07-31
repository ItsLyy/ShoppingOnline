const navBar = {
  init({header, cartButton}) {
    this._header = header;
    this._cartButton = cartButton;

    this._headerLogic(header);
  },

  _headerLogic(headerContainer) {
    window.onscroll = () => {
      if (window.scrollY || window.pageYOffset > headerContainer.offsetTop) {
        headerContainer.classList.add('fixed');
      } else {
        headerContainer.classList.add('fixed');
      }
    }
  },

  _cartLogic(cartButton) {

  },
};

export default navBar;
