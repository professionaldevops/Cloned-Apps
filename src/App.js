import React from 'react';
import Header from './Header.js';
import './App.css';
import SideBar from './SideBar.js';


class App extends React.Component{
   
    render(){
        return(
            <div className='slack_body'>
               <Header/>
               <div className="app_body">
               <SideBar/>
               </div>
                 {/*React-Router*/}
            </div>
        )
    }
}

export default App;
