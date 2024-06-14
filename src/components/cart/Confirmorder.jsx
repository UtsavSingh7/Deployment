import React from 'react'

function Confirmorder() {
  return (
    <section className="confirmorder">
        <main>
            <h1>CONFIRM ORDER</h1>
            <form>
            <div><label>CASH ON DELIVERY</label>
            <input type ="radio" name= "payment"/>
            </div>
            <div><label>ONLINE</label>
            <input type ="radio" name= "payment"/>
            </div>
            <button typoe ="submit">PLACE ORDER</button>
            </form>
        </main>
    </section>
  )
}

export default Confirmorder
