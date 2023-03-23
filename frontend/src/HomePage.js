import { useState, useEffect } from "react";
import CatItem from "./CatItem";

const HomePage = () => {
  const [cats, setCats] = useState([]);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imgUrl, setImgUrl] = useState('');


  const fetchAllCats = () => {
    fetch("http://localhost:3001/cats")
      .then(response => response.json())
      .then(data => setCats(data));
  };


  useEffect(() => {
    fetchAllCats();
  }, []);

  // useEffect(fetchAllCats, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, breed, imgUrl }),
    }).then(() => {
      fetchAllCats();
    });

  };

  const catItems = cats.map((cat) => {
    return < CatItem key={cat.id} cat={cat} fetchAllCats={fetchAllCats}/>
  });


  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
      >
        <input
        className="rounded-md bg-blue-300"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
          value={name}
        />
        <input
        className="rounded-md bg-blue-300"
          placeholder="breed"
         onChange={(e) => {
          setBreed(e.target.value);
        }}
          value={breed} 
        />
        <input 
        className="rounded-md bg-blue-300"
         placeholder="Image URL"
         onChange={(e) => {
          setImgUrl(e.target.value);
        }}
          value={imgUrl} 
        />
        <button
        type='submit'
        >Submit</button>
      </form>
      
      <div className="flex">
        {catItems}
      </div>
    </div>
  );
};

export default HomePage;