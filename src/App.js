import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import { Layout } from "./layout/Layout";
import { Login } from "./auth/Login";
import { Registration } from "./auth/Registration";
import { Task } from "./task/Task";
import { Profile } from "./profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="login" element={<Login />} replace/>
          <Route path="registration" element={<Registration />} />
          <Route path="home" element={<Task />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
