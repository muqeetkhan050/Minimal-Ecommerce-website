import React from 'react';

const MenCard=({name,price, image})=>{
    return(
        <div className="card border border-dark shadow-sm p-3" style={{ width: "100%", maxWidth: "300px" }}>
        <img src={image} className="card-img-top rounded" alt={name} style={{ height: "250px", objectFit: "cover" }} />
        <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text fw-bold text-success">${price}</p>
        <button className="btn btn-primary">Add to Cart</button>
        </div>
        </div>
    )
}
export default MenCard