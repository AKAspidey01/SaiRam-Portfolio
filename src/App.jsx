import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// import Header from './Components/Shared/Header/Header';
// import Footer from './Components/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact={true} Component={Home} path='/'/>
        </Routes>
        <Toaster 
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
              fontFamily: 'Poppins',
              paddingRight: 15,
              paddingLeft: 15,
            },
        
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
      />
      </Router>
    </>
  )
}

export default App
