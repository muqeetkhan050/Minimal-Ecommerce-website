import React from 'react';

const Men = () => {
    return (
        <>
            <div className='men-container' style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 100px',
            }}>
                <div style={{
                    marginTop:'70px',
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div>
                        <h1 style={{width:'100%', height:'35%', margin: 0}}>SALE</h1>
                        <p style={{
                            margin: '10px 0',
                            fontSize: '1.2rem'
                        }}>Don't miss out</p>
                        <button style={{
                            border: '2px solid black',
                            background: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}>Men</button>
                    </div>
                </div>
                
                <img style={{
                    width:'40%', 
                    height:'25%', 
                    borderRadius:'10px',
                    marginTop:'70px'
                }} src="/men.jpg" alt="Men's Collection"/>
            </div>
        </>
    )
}
export default Men;
