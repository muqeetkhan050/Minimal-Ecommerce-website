import React from 'react';

function WomenPage(){
    return (
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

export default WomenPage;