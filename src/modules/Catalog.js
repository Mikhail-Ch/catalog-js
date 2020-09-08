import CardProduct from "./CardProduct";

export default class Catalog {
  constructor(url) {
    this.container = document.querySelector('.product-row');
    this.data = this.getData(url);
  }

  getData(url) {
    return(
      fetch(url).then(response => response.json())
    )
  }

  renderCard() {
    this.data.then(data => {
      data.forEach(item => {
        const product = new CardProduct({...item}).createCard();
        this.container.insertAdjacentHTML('beforeend', product);
      });
    })
  }
}

