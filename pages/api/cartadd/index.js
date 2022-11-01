export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Error 405 Occured' });
        return;
    }

    //console.log(req.body.product, req.body.product.id, parseInt(req.body.product.quantity));
    
    // TODO: add item(s) to cart in user's DB row.

    res.status(200).send({ message: 'Item has been added to your cart.' });
}
