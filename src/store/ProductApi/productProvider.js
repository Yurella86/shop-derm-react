import React, { useEffect, useState } from 'react';
import ProductContext from './productContext';

const ProductProvider = (props) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            const loadedProducts = []
            const response = await fetch('https://606efbdf0c054f001765814c.mockapi.io/api/v1/products')
            if (!response.ok) {
                setProducts([])
                throw new Error('something wrong with Api')
            }
            const data = await response.json();

            for (const key in data) {

                loadedProducts.push({
                    id: data[key].id,
                    image: data[key].image,
                    name: data[key].name,
                    price: data[key].price,
                    selling: data[key].selling
                })
            }
            setTimeout(() => setProducts(loadedProducts), 1000)
        }

        fetchProducts().catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;