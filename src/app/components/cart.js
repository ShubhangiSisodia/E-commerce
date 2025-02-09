import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div>
                <h2 className="text-lg">{item.name}</h2>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  className="border p-1 w-16"
                />
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-red-500">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-xl">Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
