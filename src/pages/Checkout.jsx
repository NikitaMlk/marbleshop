const Checkout = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <form>
          <input type="text" placeholder="Name" className="border p-2 block w-full"/>
          <input type="email" placeholder="Email" className="border p-2 block w-full mt-2"/>
          <button type="submit" className="bg-green-500 text-white p-2 mt-4">Place Order</button>
        </form>
      </div>
    );
  };
  
  export default Checkout;
  