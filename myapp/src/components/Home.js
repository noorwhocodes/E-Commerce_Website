import React from 'react';
import './Signin';
import './Signup';
import './Products';
import NavigationBar from'./Navbar';
//import { Link} from 'react-router-dom';
import './homestyling.css';
import Products from './Products';



function Home (props){
    
        return (
            <>
                <NavigationBar />
                <Products />
            </>
        // <div className=''>
        //     <div className='header'>
                
        //         <div className='homelogo'>
        //             <img src='https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png' alt='logo' width='30px' height ='30px' />            
        //         </div>
        //         <div className='hometitle'>
        //         <h1>Style Lab</h1>
        //         </div>
                
        //     </div>
        //     <div className='homebody'>
        //     <Link to='/Signin'> Click to Login! </Link>
        //     </div>
        // </div>

        );
    
  }
 
export default Home;