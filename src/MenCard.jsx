import React from 'react';

const MenCard=({name,price, image})=>{
    return(
        <div className="card shadow-sm border-0">
        <img src={image} alt={name} style={{ height: "250px", objectFit: "cover" }}  />
        <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text fw-bold text-success">${price}</p>
        <button className="btn btn-primary">Add to Cart</button>
        </div>
        </div>
    )
}
export default MenCard