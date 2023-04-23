import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'
import { Component } from 'react'
// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page!..</h1>
//       <p>This is finding path page</p>
//       <Outlet/>
//       {/* passing props to class based components */}
//       <ProfileClass name={"DeeapkClass"} roll={"19"} />
//     </div>
//   )
// }

//CALLING ORDER OF LIFECYCLE METHODS..
// Parent-Constructor
// Parent-Render
// Child-Constructor
// Child-Render
// Child-componentDidMount
// Parent-componentDidmount
//Read about React LifeCycle methods

class About extends Component{
constructor(props){
  super(props);
  

  console.log("Parent-Constructor");
  //whenever class is initialized for the 1st time constructor is bydefault called

}


componentDidMount(){
  //It is best place to API call
//HOME WORK-> why I can make function componentDidMount async but not
//But I can't make callback function of useEffect async???


console.log("Parent-componentDidmount")
}




  render() {
    console.log("Parent-Render");

    //parent constructor
    //parent render
            //first child constructor
            //first child render
            //second child constructor
            //decond child render

            //DOM Update for Children starts..
            //first child componentDidMount
            //second child componentDidMount
    //parent componentDidMount

    return(
      <div>
      <h1>About Us Page!..</h1>
      <p>This is finding path page</p>
      <Outlet/>
      {/* passing props to class based components */}
      <ProfileClass name={"First Child"} roll={"19"} />
      {/* <ProfileClass name={"DeeapkClassnew"} roll={"20"} /> */}
    </div>
    )
  }
}


export default About;
