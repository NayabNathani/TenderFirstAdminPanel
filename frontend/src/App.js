import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Home/Home'
import Users from './components/Admin/Users/Users';
import NotFound from './components/Layout/NotFound/NotFound';
import TPermissions from './components/Admin/TenderPermissions/TPermissions';
import Login from './components/Auth/Login';
import { useSelector } from 'react-redux';
import ApprovedTenders from './components/Admin/ApprovedTenders/ApprovedTenders';


function App() {

  const { isAuthenticated } = useSelector(state => state.user)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={< Login />} />
        {
          isAuthenticated ? (
            <>
              <Route path='/admin/users' element={<Users />} />
              <Route path='/admin/tpermissions' element={<TPermissions />} />
              <Route path='/admin/approvedtenders' element={<ApprovedTenders />} />
            </>
          ) : (
            <Route path="/login" element={<Navigate to="/login" />} />
          )
        }
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
