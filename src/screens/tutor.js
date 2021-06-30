import React,{Component} from 'react';
import  cookie from 'react-cookies';
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
class TutorDashboard extends Component{
   constructor(props){
      super(props);
      this.state={userData:"",mentees:[]}
    }
   componentDidMount(){
     const data=cookie.load('user_data');
     this.setState({userData:data});
     axios.get(BACKEND_URL+"/users/"+data._id+"/students")
      .then((res)=>{
         this.setState({mentees:res.data})
         console.log("daf");
      })

   }
  render(){
   console.log(this.state.mentees);
     var op=this.state.mentees.map((b,i)=>{
          var loot=b.programmes.map((g,ind)=>{
             if(g!=null)
             var gold=g.modules.map((o,m)=>{
              if(o!=null)
              { var status;
                if(o.completed=="true")
                  status="<h1>completed</h1>";
                 else
                 status="Not completed";
               return(
                <div key={m} style={{border:"2px solid red"}}>

                  <h6>{o.modName}</h6>
                  <h6>{status}</h6>
                  <br/><br/>
                 </div>
               )
               }
             })

             if(g.course.CourseName!=null)
             {return(
             <div key={ind} style={{border:"2px solid green",margin:"10px"}}>

               <h5>{g.course.CourseName}</h5>
               <h6>{g.course.CoursePrice}</h6>
              <h3>Course Modules</h3>
               <h5>{gold}</h5>
               <br/><br/>
             </div>
             )}
             else
             {
              return (<h1>Not enrolled in any module</h1>)
             }
          });

       return (
         <div key={i}>
            <h3>
             {b.mentees.name}
            </h3>
            <h3>
              {b.mentees.email}
            </h3>
             <div>
                 <h1>Courses</h1>
                 {loot}
             </div>
         </div>

       )
     })
     return (
       <>
          <h1>Tutor DashBoard</h1>
         <hr/>
          <ul>
            <li>{this.state.userData.name}</li>
            <li>{this.state.userData.email}</li>
            <li>{this.state.userData.phone_no}</li>
            <li>{this.state.userData.highest_degree}</li>
          </ul>
         <hr/>
         <br/>
         <br/>
         <div>
            {op}
         </div>
       </>
     )
  }
}
export default TutorDashboard;