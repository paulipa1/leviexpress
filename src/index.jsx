import React from 'react';
import { render } from 'react-dom';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import './style.css';

const App = () => (
  <div className="container">
    <Header />
    <div className="logo"></div>
    <h1>Webová aplikace</h1>
    <main>
      <p>
        Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí{' '}
        <a href="https://www.npmjs.com/package/create-czechitas-app">
          create-czechitas-app
        </a>
        .
      </p>
    </main>
    <Footer />
    <p>Czechitas, Digitální akademie: Web</p>
  </div>
);

render(<App />, document.querySelector('#app'));
