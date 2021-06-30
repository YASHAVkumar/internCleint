import React from 'react';
import axios from 'axios';
import  cookie  from 'react-cookies';
 const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
class Login extends React.Component{
  constructor(props){
    super(props);

    this.state={username:"",password:"",tut:false};
  }

set=(e)=>{
   e.preventDefault();
   console.log(this.state);
    axios.post(BACKEND_URL+"/users",this.state)
    .then((res)=>{
       console.log(res.data);
       if(res.data)
       {
        //const { cookies } = this.props;
        cookie.save('user_data',res.data,{path:'/'})
        if(this.state.tut==false)
        window.location='/StudentDashboard';
        if(this.state.tut==true)
          window.location='/TutorDashboard';

       }

    });
}

func=(e)=>{
  let name=e.target.name;
   let value=e.target.value;
   if(name=="username")
   {
     this.setState({username:value});
     console.log("check1")
   }
   if(name=="password")
   {this.setState({password:value}); console.log("check")}
   if(name=="tutor" &&value=="on")
   {this.setState({tut:true});}
   else
   {
     this.setState({tut:false});
   }
}

  render(){
   return (
     <>
      <h1>I'm from Login page</h1>
      <fieldset>
       <legend>Login Form</legend>
        <div>
          <form onSubmit={this.set}>
             <label>Username</label>: <input type="text" name="username" required onChange={this.func.bind(this)} placeholder="Enter Your Username"/>
             <label>Password</label>: <input type="password" name="password" required onChange={this.func.bind(this)}   placeholder="Enter Your Password"/>
             <label>Are You tutor</label>: <input type="checkbox" onChange={this.func.bind(this)}  name="tutor"/>
             <input type="submit" name="login" value="Login In"/>
          </form>
           <h6>If You don't have account Create new Account</h6>
           <a href="/register">Sign Up</a>
        </div>
      </fieldset>
     </>
   )
  }
}

export default Login;