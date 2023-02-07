import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'
import Spinner from './Spinner'
import Alert from './Alert'

const Products = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.product)
    // const [products, setProducts] = useState([])

    useEffect(() => {

        // const fetchProducts = async () => {

        //     const res = await fetch("https://fakestoreapi.com/products");
        //     const data = await res.json();

        //     setProducts(data);
        // }

        dispatch(fetchProducts());

    }, [])


    const handleAdd = (product) => {
        dispatch(add(product));


    }

    if (status === STATUSES.LOADING) {
        return <Spinner />
    }
    if (status === STATUSES.ERROR) {
        return <Alert/>

    }

    return (
        <div>
            <div className="row">
                {
                    products.map(product => (
                        <div key={product.id} className="col-md-3">
                            <div  className="card mx-2 my-3">
                                <img src={product.image} className="card-img-top p-3" style={{ height: "50%", width: "50%", margin: "auto" }} alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
                                    <button onClick={() => handleAdd(product)} className="btn btn-dark my-3"> Add to Cart</button>

                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>

        </div>
    )
}

export default Products
