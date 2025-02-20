import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
 
    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        //No usar push ya que muta el estado
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }

        </>
    )
}

export default GifExpertApp;