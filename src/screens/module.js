import React from 'react';
import  cookie from 'react-cookies';

class Modules extends React.Component{

  render(){
   console.log(cookie.load('user_data'));
   return (
      <h1>I'm from Main page</h1>

   )
  }
}

export default Modules;