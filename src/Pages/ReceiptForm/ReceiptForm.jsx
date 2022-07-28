import React from 'react';

const ReceiptForm = () => {
  return (
    <section className="bg-[#dddeee] py-10">
      <div className="container mx-auto px-5 md:px-7 lg:px-10 max-w-[1300px]">
        <h2 className="underline text-xl font-bold">Receipt Details</h2>
        <form>
          <div className="w-full md:w-[75%] lg:w-[60%] flex justify-between mt-5">
            <label className="w-1/4 required" htmlFor="date">
              Date
            </label>
            <input
              className="w-3/4 rounded py-1 px-2 bg-gray-100 focus:outline-none"
              type="text"
              placeholder="Enter Date"
            />
          </div>
          <div className="w-full md:w-[75%] lg:w-[60%] flex justify-between mt-2">
            <label className="w-1/4 required" htmlFor="amount">
              Amount
            </label>
            <input
              className="w-3/4 rounded py-1 px-2 bg-gray-100 focus:outline-none"
              type="text"
              placeholder="Enter Amount (in INR)"
            />
          </div>
          <div className="w-full md:w-[75%] lg:w-[60%] flex justify-between mt-2">
            <label className="w-1/4 required" htmlFor="payment-method">
              Payment Method
            </label>
            <select class="select select-secondary w-3/4 rounded px-2 bg-gray-100 focus:outline-none border-none max-h-9 min-h-6">
              <option selected>Cash</option>
              <option>Google Pay</option>
              <option>Bank Payment</option>
              <option>Paypal</option>
              <option>Card</option>
              <option>Mobile Banking</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReceiptForm;
