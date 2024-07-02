import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import QuemSomos from './components/quemsomos/QuemSomos';
import AreasAtuacao from './components/areasatuacao/AreasAtuacao';
import Advogados from './components/advogados/Advogados';
import RedesSociais from './components/redessociais/RedesSociais';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <QuemSomos />
      <AreasAtuacao />
      <Advogados />
      <RedesSociais />
      <Contato />
      <Footer />
    </>
  )

}

export default App;
