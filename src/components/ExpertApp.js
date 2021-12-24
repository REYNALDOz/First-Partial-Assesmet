import React, { useState, useEffect } from 'react'
import { Image } from './Image';


export const ExpertApp = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const url = 'https://fakestoreapi.com/products';
        const resp = await fetch(url);
        const data = await resp.json();

        const products = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.image
            }
        })

        console.log(products);
        setImages(products);
    }



    return (
        <>
            <h1 className='title'>PRODUCTS</h1>
        
            <div className='card-img'>

                {
                    images.map(img => (
                        <Image
                            key={img.id}
                            {...img }
                        />
                    ))
                }

            </div>

        </>
    )
}
