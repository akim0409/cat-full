import { useState, useEffect, useReducer } from "react";

const App = () => {
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

 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, breed, imgUrl }),
    }).then(fetchAllCats);
  };

  const catItems = cats.map((cat) => {
    return <div 
      key={cat.id}
      className="border border-blue-400 m-4 rounded-lg"
    >
      <div>
        {cat.name}
      </div>
      <div>
        {cat.breed}
      </div>
      <img
        className="w-24 h-24"
        src={cat.imgUrl}
      />
    </div>
  });


  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
      >
        <input
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
          value={name}
        />
        <input
          placeholder="breed"
         onChange={(e) => {
          setBreed(e.target.value);
        }}
          value={breed} 
        />
        <input 
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
      
      <div>
        {catItems}
      </div>
    </div>
  );
};

export default App;
