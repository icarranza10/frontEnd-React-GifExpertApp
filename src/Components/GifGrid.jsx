import { useEffect, useState } from "react";
import React from "react";
import { getMyGift } from "../helper/getGif";
import GifItem from "./GifItem";
import { useFechGifs } from "../Hooks/useFetchGifs";

export default function GifGrid({ category }) {
  const { counter, images, isLoading } = useFechGifs(category);

  console.log({ counter, images, isLoading });

  return (
    <>
      <h1>{category}</h1>

      {isLoading && <h3> Cargando ...</h3>}

      <div className="card-grid">
        {
          /*

          <h3>{counter}</h3>
      <button onClick={() => setcounter(counter + 1)}> Click Me </button> 
      
        images.map((img, i) => {
          return <li key={i}> {img.title} </li>;
        })
        */

          //Usando desestructuracion
          /*
          images.map(({ id, title }) => {
            return <li key={id}> {title} </li>;
          }) */

          //Usando un solo objeto y enviarlo a un funcional component

          //Si se desea enviar los parametros predefinidos
          /*images.map((img) => (
            <GifItem key={img.id} title={img.title} url={img.url} />
          ))*/

          //Si se desea pasar todo el objeto de un solo, se esparce con {...img}
          images.map((img) => (
            <GifItem key={img.id} {...img} />
          ))
        }
      </div>
    </>
  );
}
