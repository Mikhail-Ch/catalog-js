import Catalog from "./modules/Catalog";
import './styles/style.sass';


const url = 'db/goods.json';
const catalog = new Catalog(url);
catalog.renderCard();


