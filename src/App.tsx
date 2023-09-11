import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PosteListe from "./pages/Posts/PostListe/PosteListe";
import InfoPost from "./pages/Posts/InfoPost/InfoPost";
import UpdatePost from "./pages/Posts/UpdatePost/UpdatePost";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PosteListe />} />
        <Route path="/posts/:id" element={<InfoPost />} />
       
      </Routes>
    </>
  );
};

export default App;
