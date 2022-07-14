import { removeItem, increase} from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import stars from '../img/star.png'
import icon from '../img/icon.png'


const CartItem = ({ id, img, title, price, amount, porc, Mainphoto, secondPhoto, ssd }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <div className='left'>
        <img className='phone' src={img} alt={title} />
      </div>
      <div className='middle'>
        <h1>{title}</h1>
        <div className='review'>
          <div className='star'>
            <img src={stars} alt='' className='stars' />
            <img src={stars} alt='' className='stars' />
            <img src={stars} alt='' className='stars' />
            <img src={stars} alt='' className='stars' />
            <img src={stars} alt='' className='stars' />
          </div>
          <div>
           <h4 className='item-price'><p>15 отзывов</p></h4>
          </div>
        </div>
        <h4><span>Процессор</span> <props>{porc}</props></h4>
        <h4><span>Основная камера</span> <props>{Mainphoto}</props> </h4>
        <h4><span>Фронтальная камера</span> <props>{secondPhoto}</props> </h4>
        <h4><span>Встроенная память</span> <props>{ssd}</props></h4>
        <h4><span>Оперативная память</span> <props>{ssd}</props></h4>
      </div>
      <div className='right'>
        <p className='price'>{price}</p>
        <button
          className='korzinka'
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          В Корзину
        </button>
        <div className='remove'>
          <img onClick={() => {
            dispatch(removeItem(id));
          }} className='icon' src={icon} alt='' />
        <button
          className='delete'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Удалить
        </button>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
