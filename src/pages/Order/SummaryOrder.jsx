/* eslint-disable react/prop-types */


const SummaryOrder = ({ products }) => {
    // Sample data for products
  
    return  (
      <div className="p-4">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      {products.length === 0 ? (
        <p>No products selected</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Quantity: {product.quantity}</p>
              {product.selectedVariant && <p>Selected Variant: {product.selectedVariant}</p>}
              {product.additionalVariants.length > 0 && (
                <div>
                  <p>Additional Variants:</p>
                  <ul className="list-disc ml-4">
                    {product.additionalVariants.map((variant, index) => (
                      <li key={index}>{variant.variant} - Qty: {variant.quantity}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p>Total Price: {product.totalPrice}Tk</p>
            </li>
          ))}
        </ul>
      )}
    </div>
      );
    }

export default SummaryOrder;