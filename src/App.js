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
import { ActiveTask } from "./pages/ActiveTask";
import { CompleteTask } from "./pages/CompleteTask";

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
          <Route path="/" element={<Task />}>
            <Route index path="/activetask" element={<ActiveTask />} />
            <Route path="/completetask" element={<CompleteTask />} />
            <Route path="/" element={<Navigate to={"/activetask"} replace />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
