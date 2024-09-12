import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicPage from './pages/PublicPage';
import AdminPage from './pages/AdminPage';
import TenantPage from './pages/TenantPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the public page */}
        <Route path="/" element={<PublicPage />} />
        
        {/* Route for the admin page */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Route for tenant pages */}
        <Route path="/:tenant" element={<TenantPage />} />
      </Routes>
    </Router>
  );
}

export default App;