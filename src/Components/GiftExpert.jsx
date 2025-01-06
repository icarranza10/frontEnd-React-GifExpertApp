import React, { useState } from "react";

import { GifGrid, AddCagory } from "./index";

export default function GiftExpert() {
  const [Categories, setCategories] = useState(["Dragon Ball", "One Punch"]);
  console.log(`Primer Log ${Categories}`);

  const addCategory = (event) => {
    console.log(event);
    //setCategories([...Categories, 'new value']);
    //setCategories(cat => [...Categories, 'new value second way']);

    //setCategories(cat => ['new value third way', ...Categories]);
    if (Categories.includes(event)) return;

    setCategories([event, ...Categories]);
  };

  return (
    <div>
      <h1>Gift Expert</h1>
      <AddCagory
        //addNewCategoryFromComponent={setCategories}
        onAddNewCategory={(event) => addCategory(event)}
      />
      {/* <button onClick={addCategory}>Agregar</button> */}

      {
        Categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
        /*
             <ol>
                Categories.map((category, i) => {
                return <li key={i}> {category} </li>
              
              }) 
              </ol>
              */
      }
    </div>
  );
}
