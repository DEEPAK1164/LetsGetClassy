// class based component is normal javascript class
// we can't create class based component
// without render merthod which returns some jsx
//extends keyword is used because our class component is
//inheriting some properties from React.Componenet

// How to create a state inside functional components
//HW why do we do super props
// constructor(props){
//     super(props);
//this.state={
//   count:0,
//}
// }
// constructor is a place that is used for initialization
// whenever the class is envoked whenever this constructor is render

import { useState } from "react";

import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
   super(props);
this.state={
  userInfo:{
  name:"Dummy name",
  location:"Dummy location",
  avatar_url:"Dummy avatar",
  },
  //dummys are the initial values which i am giving even i can keep it empty
}


    //Every class have a life cycle so when we go in life cycle
    //1st constructor is called then component renders
    console.log(" Child-Constructor");
  }

async componentDidMount(){
//This is the best place to make an API call
this.timer=setInterval(()=>{
  console.log("Namaste React!")
},1000);


const data=await fetch("https://api.github.com/users/DEEPAK1164");
const json=await data.json();
console.log(json);
this.setState({
  userInfo:json,
})


  console.log("Child-componentDidMount");
  //constructor,render,componentDidMount these are called life cycle methods
  //
}

componentDidUpdate(){
  console.log("componentDidUpdate");
}
componentWillUnmount(){
clearInterval(this.timer);
  console.log("componentWillUnmount it will called after changing page!");
}


  render() {
console.log("Child-Render");
    // we destructure it and it can be used like this as well
    //const{count}=this.state;
    // <h4>Count is:{count}</h4>//put it in line no 41
    return (
      <div>
        {/* <h1>ProfileClass Component</h1>
        <h3>name:{this.props.name}</h3>
        <h3>rollNo:{this.props.roll}</h3> */}

        {/* How to use count state */}

        <h1>Git HUB INFO From API..</h1>
        <h4>Name:{this.state.userInfo.name}</h4>
        <h4>Location:{this.state.userInfo.location}</h4>
       <img src={this.state.userInfo.avatar_url}/>


        {/* <button
          onClick={() => {
            //wedo not mutate state directly
            //never do this.state=something
            this.setState({
              //modified state
              count1: 1,
              count2:1
            });
          }}
        >
          SetCount1
        </button> */}


      </div>
    );
  }
}
/*
NOTE: react finishes render cycle first then it goes to commit cycle
1.Parent Constructor
2.parent render
3.child constructor
4.child render

DOM is updated..
json is logged in console API data
child componentDidMount called but it will wait to fetch data from APP
5.parent component didMount
6.first child componentDidMount
last is because of setState again re renders and this re render cycle is known as updating
7.render first child







*/

export default ProfileClass;
//NOTE: never ever compare react lifecycle methods to functional components
//because it is not sure that useEffect is equivalent to it.
//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/