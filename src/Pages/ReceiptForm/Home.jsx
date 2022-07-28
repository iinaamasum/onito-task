import React, { useState } from 'react';
import PaymentTable from './PaymentTable';
import ReceiptForm from './ReceiptForm';

const Home = () => {
  const [receipt, setReceipt] = useState([]);
  return (
    <section>
      <ReceiptForm receipt={receipt} setReceipt={setReceipt} />
      <PaymentTable receipt={receipt} />
    </section>
  );
};

export default Home;
