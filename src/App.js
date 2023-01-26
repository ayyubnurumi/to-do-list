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
// import { PublicRoute } from "./route/PublicRoute";
// import { ProtectedRoute } from "./route/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<PublicRoute />}> */}
            <Route index path="login" element={<Login />}/>
            <Route path="registration" element={<Registration />} />
            <Route path="/" element={<Navigate to="login" />} replace />
          {/* </Route> */}
          {/* <Route path="/" element={<ProtectedRoute />}> */}
            <Route path="home" element={<Task />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="/" element={<Navigate to="home" />} replace /> */}
          {/* </Route> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} replace/>
      </Routes>
    </Router>
  );
}

export default App;
