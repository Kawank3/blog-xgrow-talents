import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner"

import { Provider } from "./Context";
import PrivateRoute from "./components/PrivateRoute";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Manage from "./pages/Manage";

import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Toaster
        position="bottom-center"
        offset={{
          bottom: 72
        }}
      />
      <Provider>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/registrar" element={<SignUp />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/gerenciar" element={<PrivateRoute><Manage /></PrivateRoute>} />
        </Routes>
        <Footer/>
      </Provider>
    </Router>
  );
}

export default App;
