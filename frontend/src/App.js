import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Home/Home'
import Users from './components/Admin/Users/Users';
import NotFound from './components/Layout/NotFound/NotFound';
import Permissions from './components/Admin/Permissions/Permissions';
import TPermissions from './components/Admin/TenderPermissions/TPermissions';


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={ <Home />  }/>
      <Route path='*' element={ <NotFound />  }/>
      <Route path='/admin/users' element={ <Users />  }/>
      <Route path='/admin/permissions' element={ <Permissions />  }/>
      <Route path='/admin/tpermissions' element={ <TPermissions />  }/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
