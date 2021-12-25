import React from 'react'

export const Image = ({ title, url }) => {
    console.log(title, url);
    return (
        <div className='card'>
            <div className='container'>
                <div className='image'>
                    <img src={url} alt={title} />
                </div>
                <p>{title}</p>
                <button className='buttonDetail'>Go To Detail</button>
            </div>
        </div>
    )
}




