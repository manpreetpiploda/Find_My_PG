import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [image, setImage] = useState("");
  console.log(image);

  const uplode = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < image.length; i++) {
      const file = image[i];
      formData.append("image", file);
    }

    await axios.post("https://find-my-pg-backend.onrender.com/api/upload/image", formData);
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => setImage(e.target.files)}
          type="file"
          multiple
        ></input>
        <button onClick={uplode}> Upload</button>
      </form>
    </>
  );
};

export default Test;
