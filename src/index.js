import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Footer from './Footer';
import Skills from './Skills';
import RecentProjects from './Projects/RecentProjects';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
ReactGA.initialize('G-YTF161B095'); // add your tracking id here.

try{
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log("tracking")
}
catch(e){
  console.error(e)
}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Skills />
    <RecentProjects />
    {/* <Projects /> */}
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
