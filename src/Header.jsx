import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Header = () => {
    const { cartCount } = useContext(CartContext);
    return (
        <div style={{ width: '100%', margin: '0px', padding: '0px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '0px', padding: '0px' }}>


                <nav className="navbar navbar-light bg-light px-4">
                    <Link to="/" className="navbar-brand fw-bold">🛍️ MyShop</Link>
                    <Link to="/cart" className="btn btn-outline-primary">
                        Cart ({cartCount})
                    </Link>
                </nav>
            </div>
        </div>





    )


}
export default Header;