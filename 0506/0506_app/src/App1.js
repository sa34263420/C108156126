import React from 'react';
export default function Greeting(props) {
 const isLoggedIn = props.isLoggedIn;
 if (isLoggedIn) {
   return <UserGreeting />;
 } else {
   return <GuestGreeting />;
 }
}
const UserGreeting =() =>(
<h1>Welcome back!</h1>
)

const GuestGreeting =() =>(
 <h1>Please sign up.</h1>
)
