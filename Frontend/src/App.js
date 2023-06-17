import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import EmployeeDirectory from './Pages/EmployeeDirectory';
import EmployeeCreate from './components/EmployeeCreate';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';

export const client = new ApolloClient({
  uri: 'http://localhost:4000 ',
  cache: new InMemoryCache(),
});


function App() {



  return (
   <>
    <ApolloProvider client={client}>
      <Header/>
      <Routes>
        <Route path="/" element={<EmployeeDirectory />} />
        <Route path="/create-emplooyee" element={<EmployeeCreate />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </ApolloProvider>
   </>
  );
}

export default App;
