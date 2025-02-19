import { useState, useEffect } from "react";
import getGifs from "../helpers/GetGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
    }

    //useEffect, hook que sirve para disparar efectos secundarios, algun proceso que queremos ejecutar cuando algo suceda (xej cuando la categoria cambie quiero ejecutar un efecto) 
    useEffect(() => {
        getImages();
    }, []);


    return (
        <>
            <h3>{category}</h3>

        <div className="card-grid"> 
            { images.map( (image) => (
                <GifItem 
                    key={image.id} 
                    { ...image } // Forma de enviar todas las props de la image al GifItem
                />
                ))
            }
            </div>
        </>
    )
}

export default GifGrid;