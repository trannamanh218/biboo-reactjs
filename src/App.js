import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryLeft from "./pages/CategoryLeft";
import Home from "./pages/Home";
import IndividualLeft from "./pages/IndividualLeft";
import Layout from "./pages/Layout";
import Nopage from "./pages/Nopage";
import Seach from "./pages/Seach";
import "bootstrap/dist/css/bootstrap.min.css";
import Dateils from "./pages/Dateils";
import Player from "./pages/Player";
import Pdf from "./pages/Pdf";
import Question from "./pages/Question";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="seach" element={<Seach />} />
          <Route path="categoryleft" element={<CategoryLeft />} />
          <Route path="individualleft" element={<IndividualLeft />} />
          <Route path="*" element={<Nopage />} />
        </Route>
        <Route path="dateils" element={<Dateils/>}/>
        <Route path="player" element={<Player/>}/>
        <Route path="pdf" element={<Pdf/>}/>
        <Route path="question" element={<Question/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
