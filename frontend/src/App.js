import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CatShowPage from "./CatShowPage";

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/cats/:catId" Component={CatShowPage} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;
