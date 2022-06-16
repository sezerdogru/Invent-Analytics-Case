import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Detail from './pages/Detail'

function App() {  
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center p-2"> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="detail/" element={<Detail />} /> 
     </Routes>
    </div>
  );
}

export default App;
