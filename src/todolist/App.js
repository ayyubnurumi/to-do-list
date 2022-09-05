import './App.css';

import Routing from './routes';

import {setAuthToken} from './helpers/setAuthToken';

function App() {

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
