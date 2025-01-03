import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories5 />
      <Categories1 />
      <Categories2 />
      <Categories3 />
      <Categories4 />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">Ahlan</div>
    </header>
  );
}

function Banner() {
  return (
    <section className="banner">
      <h1>Introducing Exclusive Sneakers, Shoes, Slides & Perfumes</h1>
      <p>Use code <strong>AHLAN20</strong> for 20% off your first purchase!</p>
    </section>
  );
}

function Categories1() {
  return (
    <section className="categories">
      <div className="category">
        <img src="sneakers-banner.jpg" alt="Sneakers" />
        <h2>Men</h2>
      </div>
      <div className="category">
        <img src="shoes-banner.jpg" alt="Shoes" />
        <h2>Women</h2>
      </div>
    </section>
  );
}
function Categories2() {
  return (
    <section className="categories">
      <div className="category">
        <img src="sneakers-banner.jpg" alt="Sneakers" />
        <h2>Men</h2>
      </div>
      <div className="category">
        <img src="shoes-banner.jpg" alt="Shoes" />
        <h2>Women</h2>
      </div>
    </section>
  );
}
function Categories3() {
  return (
    <section className="categories">
      <div className="category">
        <img src="sneakers-banner.jpg" alt="Sneakers" />
        <h2>Men</h2>
      </div>
      <div className="category">
        <img src="shoes-banner.jpg" alt="Shoes" />
        <h2>Women</h2>
      </div>
    </section>
  );
}
function Categories4() {
  return (
    <section className="categories">
      <div className="category">
        <img src="sneakers-banner.jpg" alt="Sneakers" />
        <h2>Men</h2>
      </div>
      <div className="category">
        <img src="shoes-banner.jpg" alt="Shoes" />
        <h2>Women</h2>
      </div>
    </section>
  );
}
function Categories5() {
  return (
    <section className="fullimg">
      <div className="category">
        <img src="sneakers-banner.jpg" alt="Sneakers" />
        <h2>Men</h2>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Ahlan. All Rights Reserved.</p>
    </footer>
  );
}

export default App;