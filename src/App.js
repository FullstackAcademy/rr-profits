import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import { fetchCompanies, fetchWidgets } from './store'
import { Routes, Route } from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Widgets from './Widgets';
import WidgetForm from './WidgetForm';
import EditWidget from './EditWidget';

const App = ()=> {
  const { companies, widgets } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCompanies());
      dispatch(fetchWidgets());
  }, [])

  return (
    <div>
      <h1>Acme Companies & Profits</h1>
      <Nav />
      <Routes>
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:id' element={<Company />} />
        <Route path='/widgets' element={ <Widgets />} />
        <Route path='/widgets/create' element={ <WidgetForm />} />
        
        <Route path='/widgets/:id' element={ <WidgetForm />} />
      </Routes>
    </div>
  );
};

export default App;

{/* <Route path='/widgets/edit/:id' element={ <EditWidget />} /> */}