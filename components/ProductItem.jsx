import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product.id}`}>
        <a>
          <Image
            loader={() => product.img}
            src={product.img}
            width="100%" height="65%"
            layout="responsive"
            objectFit='contain'
            alt={'Image of the ' + product.name} />
        </a>
      </Link>
      <p>{product.name}</p>
      <p><strong>{product.price}</strong></p>
    </div>
  )
}

export default ProductItem