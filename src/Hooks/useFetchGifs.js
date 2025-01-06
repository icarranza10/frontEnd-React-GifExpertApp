import React, { useEffect, useState } from "react";
import { getMyGift } from "../helper/getGif";

export const useFechGifs = (category) => {
  const [counter, setcounter] = useState(10);

  const [images, setImages] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  const getImages = async () => {
    setisLoading(true);
    const myCurrenImage = await getMyGift(category);
    setImages(myCurrenImage);
    console.log("Aqui se ingreso");
    setisLoading(false);
  };

  useEffect(() => {
    // getMyGift(category);
    getImages();
  }, []);

  return {
    counter,
    images,
    isLoading,
  };
};
