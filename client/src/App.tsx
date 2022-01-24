import Footer from 'components/Footer/footer';
import Navbar from 'components/Navbar/navbar';
import Table from 'components/Table/table';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <h1>Hello World!</h1>
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
