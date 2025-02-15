import React from 'react';
import MenCard from './MenCard'


const Mproducts=[
    {id:1, name: 'T-shirt', price:20, image:'public/men1.jpg'},
    {id:2, name: 'shirt', price:30, image:'public/men1.jpg'},
    {id:3, name: 'jackets', price:40, image:'public/men1.jpg'}
];

const MenPage=()=>{
    return(
        <div className="container py-5">
       <h1 className="text-center mb-4 fw-bold text-primary">All Clothes</h1>
       <div className="d-flex flex-wrap justify-content-center gap-4">
        {
            Mproducts.map((product)=>(
                <div className="col" key={product.id}>
                <MenCard {...product}/>
                </div>

            ))
            
        }
       
       </div>
        </div>
    )
}

export default MenPage;