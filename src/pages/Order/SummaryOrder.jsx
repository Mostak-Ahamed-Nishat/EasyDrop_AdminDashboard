/* eslint-disable react/prop-types */

const SummaryOrder = ({ products, productsData }) => {
  const deliveryCharge = 300;
  const discount = 300;
  const cashOnDelivery = 300;
  const total = products.reduce((acc, product) => acc + product.totalPrice, 0) + deliveryCharge;

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      
      {products.length === 0 ? (
        <p>No products selected</p>
      ) : (
        <ul className="flex flex-col-full ">
          {products.map((product) => {
            const productData = productsData.find((p) => p.id === product.id);
            return (
              <li key={product.id} className="flex gap-4 mb-4">
                {/* Product Image */}
                {productData && (
                  <img
                    src={productData.img}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}

                  {/* Product Details */}
                <div className=" ">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <div className="flex justify-between items-center mt-10 w-full ">
                    <p className="text-black">
                      <strong>Tk {product.price}</strong> x {product.quantity}
                    </p>
                    <p className="font-semibold text-right  ml-[235px]">
                      Tk {product.totalPrice}
                    </p>
                  </div>


                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Summary Details */}
      {products.length === 0 ? '' :
        <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Delivery Charge</span>
          <span>Tk {deliveryCharge}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total</span>
          <span>Tk {total}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount</span>
          <span>Tk {discount}</span>
          </div>
          <div className="border bg-gray-200"></div>
        <div className="flex justify-between">
          <span>Cash On Delivery</span>
          <span>Tk {cashOnDelivery}</span>
        </div>
      </div>
      }
    </div>
  );
};

export default SummaryOrder;
