import React from 'react';

const MenPage=({name,price, image})=>{
    return(
        <>
        <img src={image} alt={name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <>{name}</>
        <>${price}</>
        </>
    )
}

export default MenPage;