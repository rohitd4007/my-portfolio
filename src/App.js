import './App.css';
import './index.css'
import MyExperience from './Components/myExperience/myExperience';
import MyHeader from './Components/myHeader/myHeader';
import MyInfo from './Components/myInfo/myInfo';
import MyProject from './Components/myProjects/myProjects';

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
    </div>
  );
}

export default App;
