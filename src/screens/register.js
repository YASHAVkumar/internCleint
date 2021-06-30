import React from 'react';
import AsStudent from '../components/asStudent';
import AsTutor from '../components/asTutor';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class Register extends React.Component{

  render()
  {
   return (
   <>
      <h1>I'm from Register page</h1>
        <div>
            <ul>
               <li>
                <a href="register/asStudent">asStudent</a>
               </li>
               <li>
                 <a href="register/asTutor">asTutor</a>
                </li>

            </ul>

          </div>


   </>
   )
  }
}

export default Register;