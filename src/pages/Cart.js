import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'


const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)

  const handleRemove = (productId) =>{
    console.log(productId)
    dispatch(remove(productId))


  }

  return (
    <div>
      <div className="container my-3">
      <h3>Cart</h3>
      <div className="row">
        {
          products.map(product => (
            <div className="col-md-3">
                            <div className="card mx-2 my-3"> 
                                <img src={product.image} className="card-img-top p-3"  style={{height:"50%" ,width:"50%" ,margin:"auto" }} alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
                                    <button onClick = {() => handleRemove(product.id)}  className="btn btn-dark my-3"> Remove</button>
                    
                                </div>
                            </div>
                        </div>
          ))
        }
      </div>
    </div>
    </div>
  )
      }

export default Cart
