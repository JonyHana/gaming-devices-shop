import { useState } from 'react';
import { server } from '../../../config/index';

import styles from '../../../styles/ProductPage.module.css';

const product = ({ productInfo }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`add to cart -> quantity: ${quantity}`);
  }

  return (
    <div className={styles.container}>
      <h1>{productInfo.name}</h1>

      <div className={styles.purchaseContainer}>
        <div className={styles.purchaseContainerVideo}>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${productInfo.ytEmbedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`Embedded YouTube video of ${productInfo.name}`}
          />
        </div>
        <div className={styles.purchaseContainerOptions}>
          {'$' + productInfo.price}
          <form onSubmit={handleSubmit}>
            <label>
              Quantity:
              <input type='number' min='1' max='10' defaultValue={quantity} onChange={handleChange} />
            </label>
            <input type='submit' value='Add to Cart' />
          </form>
        </div>
      </div>
      
      <h3>Description</h3>
      <p>{productInfo.description}</p>

      <h3>About</h3>
      <ul>
        {productInfo.about.map((bulletin, i) => (
          <li key={i}>{bulletin}</li>
        ))}
      </ul>

      <h3>Specifications</h3>
      <ul>
        <li>Brand: {productInfo.specifications.brand}</li>
        <li>Model Number: {productInfo.specifications.model_number}</li>
        <li>Weight: {productInfo.specifications.weight}</li>
        <li>Dimensions: {productInfo.specifications.dimensions}</li>
      </ul>
    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/products/`);
  const products = await res.json();

  let paths = products.map(product => {
    return { params: { id: product.id.toString() } }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/products/${context.params.id}`);
  const productInfo = await res.json();

  return {
    props: { productInfo }
  }
}

export default product