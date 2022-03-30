import { Routes, Route } from "react-router-dom";
import CapitalScreen from "../components/Paises/CapitalScreen";

import PaisesScreen from "../components/Paises/PaisesScreen";
import PaisScreen from "../components/Paises/PaisScreen";
import RegionScreen from "../components/Paises/RegionScreen";
import Sidebar from "../shared/Sidebar";

const DashboardRoutes = () => {
  return (
    <div className="content__dashboard">  
        <Sidebar /> 
        <div>        
            <Routes>
                <Route path="paises" element={<PaisesScreen />}/>
                <Route path="capital" element={<CapitalScreen />} />
                <Route path="region" element={<RegionScreen />}/>
                <Route path="pais" element={<PaisScreen />} />
                <Route path="/" element={<PaisesScreen />}/>
            </Routes>
        </div> 
    </div>
  )
}

export default DashboardRoutes