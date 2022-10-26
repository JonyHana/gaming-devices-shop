import { products } from '../../../data';

export default function handler(req, res) {
    const id = req.query.id;
    
    let productsFiltered = products.filter(
        product => product.id.toString() === id
    );

    if (productsFiltered.length !== 0) {
        res.status(200).json(productsFiltered[0]);
    }
    else {
        res.status(400).json({ message: 'Product not found.' });
    }
}
