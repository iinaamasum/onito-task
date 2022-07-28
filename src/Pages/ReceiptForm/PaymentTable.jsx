import React from 'react';

const PaymentTable = ({ receipt }) => {
  return (
    <section className="bg-[#f7f7f7] min-h-[50vh]">
      <div class="overflow-x-auto container mx-auto px-5 md:px-7 lg:px-10 max-w-[1300px]">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {receipt.map((data, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{data.date}</td>
                <td>{data.amount}</td>
                <td>{data.payMethod}</td>
                <td>{data.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentTable;
