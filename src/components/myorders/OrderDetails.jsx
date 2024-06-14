import React from 'react'

function OrderDetails() {
  return (
  <section className ="orderdetails">
    <main>
        <h1>ORDER DETAILS</h1>
        <div>
            <h1>Shipping</h1>
            <p>
                <b>Addresss</b>
                {"chsvhkshklshdshio"}
            </p>


        </div>
        <div>
            <h1>CONTACT</h1>
            <p>
                <b>NAME</b>
                {"UTSAV"}
            </p>
            <p>
                <b>PHONE</b>
                {"9966879709"}
            </p>

        </div>
        <div>
            <h1>STATUS</h1>
            <p>
                <b>ORDER STATUS</b>
                {"PROCESSING"}
            </p>
            <p>
                <b>PLACED AT</b>
                {"23 -02-2024"}
            </p>
            <p>
                <b>DELIVERED  AT</b>
                {"23 -02-2024"}
            </p>
        </div>
        <div>
            <h1>PAYMENT</h1>
            <p>
                <b>PAYMENT METHOD</b>
                {"ONLINE"}
            </p>
            <p>
                <b>PAYMENT REFERENCE</b>
                {"EGEETEE"}
            </p>
            <p>
                <b>PAID AT</b>
                {"23 -02-2024"}
            </p>
        </div>
        <div>
            <h1>AMOUNT</h1>
            <p>
                <b>ITEMS TOTAL</b>
                {2132}
            </p>
            <p>
                <b>TAX</b>
                {200}
            </p><p>
                <b> TOTAL AMOUNT</b>
                {232}
            </p>
            
        </div>
        <article>
            <h1>ORDERED ITEMS</h1>
            <div>
                <h4>CHEESE BURGER</h4>
            <div><span>{12}</span> X<span>{232}</span></div>
            </div>
            <div>
                <h4> VEG CHEESE BURGER</h4>
            <div><span>{10}</span> X<span>{500}</span></div>
            </div>
            <div>
                <h4>  BURGER FRIES</h4>
            <div><span>{10}</span> X<span>{1000}</span></div>
            </div>
            <div>
                <h4>Sub Total</h4>
            <div>{2132}</div>
            </div>
        </article>
    </main>
  </section>


  )
}

export default OrderDetails
