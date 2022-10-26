import { server } from '../config/index';
import ProductItem from '../components/ProductItem';

import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  return (
    <section className={styles.productsContainer}>
      {products.map(
        product => <ProductItem key={product.id} product={product} />
      )}
    </section>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  return {
    props: { products }
  }
}
