export default class CardProducts {
  constructor({title, description, specifications, image, price}) {
    this.title = title;
    this.description = description;
    this.specifications = specifications;
    this.image = image;
    this.price = price;
  }

  createCard() {
    return (`
         <div class="product__card">
           <div class="product__card-box">
              <h4 class="product__card-title">${this.title}</h4>
              <img src="${this.image}" class="product__card-img" alt="${this.title}"/>
              <div class="product__card-bottom">
                <span>${this.price} &#8381;</span>
                <a href="#" class="product__card-btn">Подробнее</a>
              </div>
           </div>
         </div>
     `
    )
  }
}
