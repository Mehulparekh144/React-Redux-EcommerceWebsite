import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=> state.cart)
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MyStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/cart">Cart</Link>
                            </li>


                            <span className="cartCount badge bg-secondary mx-3">Cart Count  <br /> <br />{items.length}</span>







                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
