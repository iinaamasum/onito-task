import React from 'react';
import { BiCommand } from 'react-icons/bi';

const ReceiptForm = () => {
  return (
    <section className="bg-[#dddeee] py-10">
      <div className="container mx-auto px-5 md:px-7 lg:px-10 max-w-[1300px]">
        <h2 className="underline text-xl font-bold">Receipt Details</h2>
        <form>
          {/* date  */}
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
          {/* amount */}
          <div className="w-full md:w-[75%] lg:w-[60%] flex justify-between mt-2">
            <label className="w-1/4 required" htmlFor="amount">
              Amount
            </label>
            <input
              className="w-3/4 rounded py-1 px-2 bg-gray-100 focus:outline-none"
              type="number"
              placeholder="Enter Amount (in INR)"
            />
          </div>
          {/* payment method */}
          <div className="w-full md:w-[75%] lg:w-[60%] flex justify-between mt-2">
            <label className="w-1/4 required" htmlFor="payment-method">
              Payment Method
            </label>
            <select class="select select-secondary w-3/4 rounded px-2 bg-gray-100 focus:outline-none border-none max-h-8 min-h-6">
              <option selected>Cash</option>
              <option>Google Pay</option>
              <option>Bank Payment</option>
              <option>Paypal</option>
              <option>Card</option>
              <option>Mobile Banking</option>
            </select>
          </div>
          {/* remark */}
          <div className="w-full md:w-[75%] lg:w-[60%] flex justify-between mt-2">
            <label className="w-1/4" htmlFor="remark">
              Remark
            </label>
            <input
              className="w-3/4 rounded py-1 px-2 bg-gray-100 focus:outline-none"
              type="text"
              placeholder="Enter Remark"
            />
          </div>
          <div className="w-full md:w-[75%] lg:w-[60%] flex justify-between mt-5">
            <label className="w-1/4" htmlFor=""></label>
            <div className="flex justify-around items-center w-full">
              <button className="border-2 border-red-500 rounded px-10 py-2 text-lg font-medium uppercase text-red-500 hover:text-black hover:bg-red-500 flex flex-col">
                <span>Cancel</span>
                <span className="flex items-center">(ESC)</span>
              </button>
              <button className="bg-green-700 hover:bg-green-600 rounded px-10 py-2 text-lg font-medium uppercase text-white flex flex-col">
                <span>Submit</span>
                <span className="flex items-center">
                  (<BiCommand /> + S)
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReceiptForm;
