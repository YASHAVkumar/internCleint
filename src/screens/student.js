import React,{Component} from 'react';
import cookie from 'react-cookies';

class StudentDashboard extends Component{
   constructor(props){
        super(props);
        this.state={userData:""}
      }
         componentDidMount(){
           const data=cookie.load('user_data');
           //const data1=JSON.parse(data);
           this.setState({userData:data});
         }
  render(){
     console.log(this.state.userData.courses);
      for(var i in this.state.userData.courses)
        console.log(i);
     return (
       <>
          <h1>Student DashBoard</h1>
         <ul>
            <li>{this.state.userData.name}</li>
            <li>{this.state.userData.email}</li>
            <li>{this.state.userData.phone_no}</li>
            <li>{this.state.userData.highest_degree}</li>

          </ul>
       </>
     )
  }
}
export default StudentDashboard;