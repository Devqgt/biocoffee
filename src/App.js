import React from 'react';
//import './style/App.scss';
// Components
//import DesktopNav from './components/navbar/desktop-nav';
//import MobileNav from './components/navbar/mobile-nav';
//import Backdrop from "./components/navbar/backdrop";
//import Hero from './components/hero/hero';
//import Portfolio from "./components/portfolio/portfolio";
//import Partners from "./components/partners/partners";
//import About from "./components/about/about";
//import Blog from "./components/blog/blog";
//import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { Routes } from './routes/index'

import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled);
  }

  // Detect if user is scorlled down (used for add/disable extra large navbar)
  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  };
  // On closeMobileMenu click close navbar
  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };
  // Mobile menu handler
  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  render() {
    // BACKDROP RENDER
    //
    return (
      <>
      <Routes/>
      <Footer/>
      </>
    );
  }
}

export default App;
