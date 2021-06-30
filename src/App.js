import logo from './logo.svg';
import './App.css';
import Register from './screens/register';
import Login from './screens/login';
import StudentDashboard from './screens/student';
import TutorDashboard from './screens/tutor';
import Modules from './screens/module';
import AsStudent from './components/asStudent';
import AsTutor from './components/asTutor';
import Navbar from './components/navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <h1 style={{fontSize:"70px"}}>Well-Come To Educational Web Page</h1>
    <Navbar/>

    <BrowserRouter>
       <Switch>
          <Route exact path='/'>
             <Modules/>
          </Route>
          <Route exact path='/register'>
             <Register/>
          </Route>

          <Route exact path='/login'>
              <Login/>
          </Route>

          <Route exact path='/StudentDashboard'>
              <StudentDashboard/>
          </Route>

          <Route exact path='/TutorDashboard'>
               <TutorDashboard/>
          </Route>

           <Route path='/register/asStudent'>
               <AsStudent/>
           </Route>

           <Route path='/register/asTutor'>
               <AsTutor/>
           </Route>
        </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
