import { useState, useEffect } from "react";

const cart = () => {
  const [cartInfo, setCartInfo] = useState(null);

  useEffect(() => {
    console.log(localStorage.getItem('cart'));
    let cartObj = JSON.parse(localStorage.getItem('cart'));
    if (cartObj !== null) {
      setCartInfo(cartObj);
    }
  }, []);

  return (
    <div>
      {cartInfo !== null
      ? <div>
        {Object.keys(cartInfo).map((k) => (
          <div key={k}>
            <p>Product {k}, Quantity: {cartInfo[k]}</p>
          </div>
        ))}
      </div>
      : <div>
        <p>No items in your shopping cart.</p>
      </div>
      }
    </div>
  )
}

export default cart