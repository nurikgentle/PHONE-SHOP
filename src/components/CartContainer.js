import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const { cartItems, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Ваше Избранное</h2>
          <h4 className='empty-cart'>на данный момент пусто</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default CartContainer;
