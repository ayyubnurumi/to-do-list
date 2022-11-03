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
import { AddTask } from "./main/AddTask";
import { AllTask } from "./main/AllTask";
import { CompleteTask } from "./main/CompleteTask";
import { Home } from "./main/Home";
import { Profile } from "./main/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/" element={<Navigate to="login" />} replace/>
        </Route>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AddTask />}>
            <Route index path="home" element={<AllTask />} />
            <Route path="complete-task" element={<CompleteTask />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="home" />} replace />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
