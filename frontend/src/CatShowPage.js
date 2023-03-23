import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const CatShowPage = () => {
  const params = useParams();
  const [cat, setCat] = useState(null);
  const [error, setError] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentBreed, setCurrentBreed] = useState("");
  const [currentImgUrl, setCurrentImgUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const fetchCatById = () => {
    console.log("fetching cat");
    fetch(`http://localhost:3001/cats/${params.catId}`).then((response) => {
      if (response.status === 200) {
        response.json().then((cat) => {
          setCat(cat);
          setCurrentName(cat.name);
          setCurrentBreed(cat.breed);
          setCurrentImgUrl(cat.imgUrl);
        });
      } else {
        response.json().then((error) => setError(error.message));
      }
    });
  };

  useEffect(() => {
    fetchCatById();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/cats/${params.catId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: currentName,
        breed: currentBreed,
        imgUrl: currentImgUrl,
      }),
    }).then(() => {
      setIsEditing(false);
      fetchCatById();
    });
  };

  return (
    <div>
      {cat ? (
        <div className="h-screen flex flex-col justify-center items-center bg-blue-200">
          <div className="w-96 p-2 flex justify-between items-center rounded-t-lg bg-blue-400">
            {isEditing ? (
              <form 
                className="w-full flex flex-col"
                onSubmit={handleSubmit}
                >
                <div className="flex">
                  <div className="text-blue-200 font-semibold mr-1">Name: </div>
                  <input
                    className="rounded-md bg-blue-100 px-2 py-[1px] w-1/2"
                    value={currentName}
                    onChange={(e) => {
                      setCurrentName(e.target.value);
                    }}
                  />

                  <div className="text-blue-200 font-semibold mx-1">Breed: </div>
                  <input
                    className="rounded-md bg-blue-100 px-2 py-[1px] w-1/2"
                    value={currentBreed}
                    onChange={(e) => {
                      setCurrentBreed(e.target.value);
                    }}
                  />
                </div>

                <div className="text-blue-200 font-semibold">Image URL: </div>

                <input
                  className="rounded-md bg-blue-100 px-2 py-[2px]"
                  value={currentImgUrl}
                  onChange={(e) => {
                    setCurrentImgUrl(e.target.value);
                  }}
                />
                <div className="mt-2 flex justify-center items-center text-white font-semibold">
                  <button className="px-2 py-1 bg-orange-300 rounded-md mx-2">
                    submit
                  </button>

                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setIsEditing(!isEditing);
                    }}
                  >
                    cancel
                  </div>
                </div>
              </form>
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <div className="m-2 text-4xl text-zinc-100 font-semibold">
                    {cat.name}
                  </div>
                  <div className="m-2 flex m-2 text-xl font-semibold">
                    <div className="mx-1 text-blue-200">Breed: </div>
                    <div className="text-orange-300">
                      {cat.breed}
                    </div>
                  </div>
                </div>
                <i 
                className="fa-solid fa-trash"
                onClick={ () => {
                  fetch(`http://localhost:3001/cats/${params.catId}`, {
                    method: "DELETE"
                  }).then(() => {
                    navigate('/');
                  })
                }}
                ></i>
                <i
                  onClick={() => {
                    setIsEditing(!isEditing);
                  }}
                  className="m-2 text-3xl cursor-pointer text text-rose-300 fa-regular fa-pen-to-square"
                ></i>
              </>
            )}
          </div>
          <img
            className="rounded-b-lg w-96 h-96 object-cover"
            src={cat.imgUrl}
          />
          
        </div>
      ) : (
        <div className="text-red-500 text-5xl">{error}</div>
      )}
    </div>
  );
};

export default CatShowPage;
