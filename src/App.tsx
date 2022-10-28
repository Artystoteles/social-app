import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Main from "./pages/main/main";
import Login from "./pages/login";
import CreatePost from "./pages/createPost/createPost";
//import components
import Navbar from "./components/sidebar";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App__sidebar">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
