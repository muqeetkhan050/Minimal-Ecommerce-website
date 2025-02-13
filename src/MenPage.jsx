import React from 'react';
import MenCard from './MenCard'


const Mproducts=[
    {id:1, name: 'T-shirt', price:20, image:'this is our image'},
    {id:2, name: 'shirt', price:30, image:'this is our shirt image'},
    {id:3, name: 'jackets', price:40, image:'this is our image for jackets'}
];

const MenPage=()=>{
    return(
        <>
       <div>Here are best shirts</div>
       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {
            Mproducts.map((product)=>(
                <MenCard key={product.id} {...product}/>

            ))
        }
       </div>
        </>
    )
}

export default MenPage;