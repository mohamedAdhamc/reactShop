const OrderSummary = ({ subtotal, discount, total }) => {

  return (
    <div className=" bg-gray-200 p-4 rounded-md dark:text-gray-700">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount:</span>
        <span>${discount}</span>
      </div>
      <div className="flex justify-between">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
