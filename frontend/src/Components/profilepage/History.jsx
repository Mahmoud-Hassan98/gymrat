import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function History() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:8000/payment/getpayment', config);
        setPayments(response.data.payments);
        console.log(response.data.payments); // Log the fetched payments data
      } catch (error) {
        console.error('Error fetching payment history:', error);
      }
    };
  
    fetchPayments();
  }, []);
  return (
    <>
    {payments.map((payment, index) => (
      <div key={index}>
        <div className="container">
          <div className="card-body">
            <div className="container mb-5 mt-3">
              <div className="row my-2 mx-1 justify-content-center">
                {index === 0 || payments[index - 1].payment_id !== payment.payment_id ? (
                  <table className="table table-striped table-borderless" style={{ width: "80%", margin: "0 auto", backgroundColor: "white" }}>
                    <thead style={{ backgroundColor: "#ffdd00" }} className="text-black">
                      <tr>
                        <th colSpan="5">Payment Num: {payment.payment_id}  </th>
                        
                      </tr>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Type Of Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments
                        .filter((p) => p.payment_id === payment.payment_id)
                        .map((p, idx) => (
                          <tr key={idx}>
                            <th scope="row">{idx + 1}</th>
                            <td>{p.name}</td>
                            <td>{p.product_type}</td>
                            <td>{p.price}</td>
                            <td>{p.payment_cost}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
  

  )
}
