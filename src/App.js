import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WelcomeBody from './components/WelcomeBody';



function App() {
  
  return (
    
    <>
    
    <NavBar/>
    <WelcomeBody/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <ContactMe/>

    </>
  );
}

export default App;
