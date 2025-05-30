import { Routes, Route } from "react-router-dom";
import Home from "./Component/HomeComponent/Home";
import StoryDetail from "./Component/StoryDetailComponent/StoryDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:id" element={<StoryDetail />} />
    </Routes>
  );
}

export default App;
