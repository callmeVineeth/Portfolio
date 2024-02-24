import './App.css';
import { DataContext } from './DataContext';
import { useContext } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';



function App() {

  const{darkMode} = useContext(DataContext)

  return (
    <Router>
      
    
        <div className={` App bg-gradient-to-tr from-white to-violet-300 ${darkMode && ' bg_pattern  bg_pattern2 text-white '} transition-colors duration-700`}>
             
             <AnimatedRoutes/>

        </div>
    
    
    </Router>
    );
}

export default App;
