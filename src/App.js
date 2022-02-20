import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './components/dashboard';
import ProjectRelease from './components/project_release';
import './helpers/antd-overrides.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route element={<Dashboard />} exact path="/" />
          <Route element={<ProjectRelease />} exact path="project-release" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
