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
      <div className="fullimg1 fullimg">
        <a href=''></a>
      </div>
      <div className="fullimg2 fullimg">
        <a href=''></a>
      </div>
    </section>
  );
}
function Categories2() {
  return (
    <section className="categories">
      <div className="fullimg3 fullimg">
        <a href=''></a>
      </div>
      <div className="fullimg4 fullimg">
        <a href=''></a>
      </div>
    </section>
  );
}
function Categories3() {
  return (
    <section className="categories">
      <div className="fullimg5 fullimg">
        <a href=''></a>
      </div>
      <div className="fullimg6 fullimg">
        <a href=''></a>
      </div>
    </section>
  );
}
function Categories4() {
  return (
    <section className="categories">
      <div className="fullimg7 fullimg">
        <a href=''></a>
      </div>
      <div className="fullimg8 fullimg">
        <a href=''></a>
      </div>

    </section>
  );
}
function Categories5() {
  return (
    <section className="categories">
      <div className="fullimg9 fullimg">
        <a href=''></a>
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