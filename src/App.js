import LoginComponent from "./components/LoginComponent";

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import DashboardComponent from "./components/DashboardComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route exact path="/user" element={<DashboardComponent />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
