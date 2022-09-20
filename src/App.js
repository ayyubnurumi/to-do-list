import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

import { PublicRoute } from "./routes/PublicRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AuthLayout } from "./auth/AuthLayout";
import Login from "./auth/Login/Login";
import Regist from "./auth/Regist/Regist";
import Task from "./pages/Task/Task";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<AuthLayout />}>
            <Route index path="/login" element={<Login />} />
            <Route path="/registration" element={<Regist />} />
            <Route path="/" element={<Navigate to={"/login"} replace />} />
          </Route>
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index path="/task" element={<Task />} />
          <Route path="/" element={<Navigate to={"/task"} replace />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
