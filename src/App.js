import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import { AuthLayout } from "./auth/AuthLayout";
import { Login } from "./auth/Login";
import { Registration } from "./auth/Registration";
import { Home } from "./main/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
