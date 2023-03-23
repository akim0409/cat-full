import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CatItem = (props) => {
  const { cat, fetchAllCats } = props;
  const navigate = useNavigate();
  const heartRef = useRef(null);

  
  return (
    <div 
    key={cat.id} 
    className="bg-orange-300 m-4 rounded-lg"
    onClick={(event) =>{
      if (event.target === heartRef.current) {
        return;
      } else {
        navigate(`/cats/${cat.id}`);
      }
    }}
    >
      <div className="mt-1 text-orange-600 font-bold text-2xl text-center">{cat.name}</div>
      <div className="mb-1 text-orange-400 font-semibold text-lg text-center">{cat.breed}</div>
      <img className="w-48 h-48 object-cover cursor-pointer" src={cat.imgUrl} />
      <div className="flex items-center">
        <i
          ref={heartRef}
          className="m-2 text-red-600 fa-solid fa-heart cursor-pointer"
          onClick={() => {
            fetch(`http://localhost:3001/cats/${cat.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ likes: cat.likes + 1 }),
            }).then(() => {
              fetchAllCats();
            });
          }}
        ></i>
        <div className="text-orange-100">
          {cat.likes}
        </div>
      </div>
    </div>
  );
};

export default CatItem;
