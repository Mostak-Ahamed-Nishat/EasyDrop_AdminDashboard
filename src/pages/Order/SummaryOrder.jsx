/* eslint-disable react/prop-types */
import { useState } from 'react';

const SummaryOrder = ({ products }) => {
  const [discount, setDiscount] = useState('0'); 

  const deliveryCharge = 300;
  const discountValue = Number(discount) || 0;

  // total cost before discount--------
  const totalBeforeDiscount = products.reduce((acc, product) => acc + product.totalPrice, 0) + deliveryCharge;
  
  // Total--------------
  const total = totalBeforeDiscount - discountValue;

  //  Quantity of (main product + additional variants)
  const calculateTotalQuantity = (product) => {
    let totalQuantity = product.quantity;
    if (product.additionalVariants && product.additionalVariants.length > 0) {
      totalQuantity += product.additionalVariants.reduce((acc, variant) => acc + variant.quantity, 0);
    }
    return totalQuantity;
  };

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      {products.length === 0 ? (
        <p>No products selected</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="flex justify-between p-2 rounded-lg">
              <h3 className="text-lg font-semibold">
                {product.name} <strong className='text-xs font-medium'>{calculateTotalQuantity(product)} item(s)</strong>
              </h3>
              <p className="font-semibold">Tk {product.totalPrice}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Summary Details */}
      {products.length > 0 && (
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>Delivery Charge</span>
            <span>Tk {deliveryCharge}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount (in taka)</span>
            <input
              type="number" 
              value={discount}
              onChange={(e) => setDiscount(e.target.value)} 
              className="border rounded px-2 py-1 w-24"
            />
          </div>
          <div className="flex justify-between mb-2">
            <span>Total (including discount)</span>
            <span>Tk {total}</span>
          </div>
          <div className="border-t my-2"></div>
          <div className="flex justify-between">
            <span>Cash On Delivery</span>
            <span>Tk {total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryOrder;
