import './App.css';
import './index.css'
import MyExperience from './Components/myExperience/myExperience';
import MyHeader from './Components/myHeader/myHeader';
import MyInfo from './Components/myInfo/myInfo';
import MyProject from './Components/myProjects/myProjects';
import ContactForm from './Components/reachMe/contactForm';
import Skills from './Components/mySkills/skills';

function App() {
  return (
    <div className="app-container">
      <MyHeader />
      <div id='home'>
        <MyInfo />
      </div>
      <div id='about'>
        <MyExperience />
      </div>
      <div id='projects'>
        <MyProject />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='contact'>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
