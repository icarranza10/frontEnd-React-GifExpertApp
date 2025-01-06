import React from "react";

//Si quisieramos recibir todo el objeto
/*
export default function GifItem(img) {
  console.log("prueba de Gif Item" + img.title);
  return <div> {img.title} </div>;
}*/

export default function GifItem({ id, title, url }) {
  return (
    <div className="card">
      <img src={url} alt={title}></img>
    </div>
  );
}
