// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConditionList from './components/ConditionList';
import ViewWorkflows from './components/ViewWorkflows';
import ViewTree from './components/ViewTree'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConditionList />} />
        <Route path="/view-workflows" element={<ViewWorkflows />} />
        <Route path="/view-tree/:workflowId" element={<ViewTree />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
