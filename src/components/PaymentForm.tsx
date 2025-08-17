

export default function PaymentForm() {


  return (
    <form className="flex flex-col gap-4">
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div>
        <label htmlFor="expirationDate" className="block text-sm font-medium">
          Expiration Date
        </label>
        <input
          type="text"
          id="expirationDate"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="MM/YY"
        />
      </div>
      <div>
        <label htmlFor="cvv" className="block text-sm font-medium">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="123"
        />
      </div>
      <button
        
        className="mt-4 bg-gray-800 text-white p-2 rounded-md"
      >
        Pay Now
      </button>
    </form>
  );
}
