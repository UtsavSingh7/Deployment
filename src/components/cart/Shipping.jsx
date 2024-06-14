import React from 'react'

function Shipping() {
  return (
    <section className="Shipping">
        <main>
            <h1>SHIPPING DETAILS</h1>
            <form>
                <div>
                    <label>H.No</label>
                    <input type ="text" placeholder="Enter House No"/>
                </div>
                <div>
                    <label>City</label>
                    <input type ="text" placeholder="Enter City"/>
                </div>
                <div>
                    <label>PinCode</label>
                    <input type ="number" placeholder="Pin code"/>
                </div>
                <div>
                    <label>Country</label>
                    <select>
                        <option Value ="">Country</option>
                        <option Value="">India</option>
                    </select>
                </div>
                <div>
                    <label>Country</label>
                    <select>
                        <option Value ="">State</option>
                        <option Value="">Mumbai</option>
                    </select>
                </div>
                <div>
                    <label>Phone no</label>
                    <input type ="number" placeholder="Enter phone No"/>
                </div>
                <button type= "submit" href ="/confirmorder">Confirm Order</button>
            </form>
        </main>
    </section>
  )
}

export default Shipping
