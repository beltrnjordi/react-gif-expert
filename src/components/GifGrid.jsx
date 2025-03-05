import {createElement, React, useEffect, useState} from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    
    return (
    <>
        <h3>{category}</h3>
        {
            // isLoading ? (<h2>Cargando...</h2>) : null
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
            {
                // UTILIZANDO DESESTRUCTURACION
                // images.map( ({id, title, url}) => (
                // <div key={id}>
                //     <li>{title}</li>
                //     <img src={url}></img>
                // </div>
                
                
                images.map( image => (
                // <div key={image.id}>
                //     <li>{image.title}</li>
                //     <img src={image.url}></img>
                // </div>
                <GifItem
                    key={image.id}
                    // url={image.url}
                    // title={image.title}
                    {...image }
                />
            ))
        }
        </div>
        
    </>
    )
}