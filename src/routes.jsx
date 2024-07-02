import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/Projects';
import Templates from './pages/Templates';
import Agents from './pages/Agents';
import Tools from './pages/Tools';
import Deliverables from './pages/Deliverables';
import DataSources from './pages/DataSources';
import Usage from './pages/Usage';
import Billing from './pages/Billing';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Credits from './pages/Credits';


const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/deliverables" element={<Deliverables />} />
      <Route path="/datasource" element={<DataSources />} />
      <Route path="/usage" element={<Usage />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/help" element={<Help />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/credits" element={<Credits />} />
    </Routes>
  )
}

export default RoutesComponent
