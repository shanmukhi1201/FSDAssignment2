import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentbox';

  //create a component 
   const App =()=>{
     return <CommentBox/>;
   }
   ReactDOM.render(
      <App/>,
       document.getElementById('root')

   )