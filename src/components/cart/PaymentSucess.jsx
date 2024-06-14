import React from 'react'
import {Link} from "react-router-dom"

function PaymentSucess() {
  return <section className='paymentsuccess'>
    <main>
        <h1>Order Confirmed</h1>
        <p> ORDER PLACED SUCESSFULLY YOU CAN NOW CHECK THE STATUS</p>
        <Link to ="/myorders">Check Status</Link>
    </main>

  </section>
  
}

export default PaymentSucess
