import {React, useState} from 'react'
import { AddCategory, GifGrid } from './components/index';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Paquita Salas']);
    
    const onAddCategory = (newCategory) => {
        // Agregar un tema que quieran, una nueva categoría
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [...cat, "Valorant"]);
        
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
                currentCategories={categories}
            />
            
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/* listado de gif */}
            {
                categories.map(category => {
                    return (
                        <GifGrid 
                            key={category} 
                            category={category}/>
                    )
                })
            }
            {/* gif item */}
        </>
    )
}
