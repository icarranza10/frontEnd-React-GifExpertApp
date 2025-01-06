import React, { useState } from "react";

//export default function AddCagory({addNewCategoryFromComponent}) {
export default function AddCagory({ onAddNewCategory }) {
  const [inputCategory, setinputCategory] = useState("Naruto");

  const addNewCategory = ({ target }) => {
    setinputCategory(target.value);
    console.log(`Este es el valor del change${inputCategory}`);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputCategory);
    console.log("prueba");

    if (inputCategory.trim().length <= 1) return;

    //addNewCategoryFromComponent( categories => [inputCategory, ...categories]);
    onAddNewCategory(inputCategory.trim());

    setinputCategory("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Search gift"
        value={inputCategory}
        onChange={addNewCategory}
      />
    </form>
  );
}
