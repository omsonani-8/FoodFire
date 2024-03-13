import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Head";
import {Outlet,RouterProvider, Routes} from "react-router-dom"
import { Route } from "react-router-dom";
import About from "./Navigator/About";
import { Contact } from "./Navigator/Contact";
import Footer from "./components/Footer";
import Menu  from "./components/Menu";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
                */
const App = () => {


  return (
    <div>
      <div>
      {/* <Header/> */}
      {/* <Outlet/> */}
      {/* <Footer/>  */}

      </div>
      < Routes>
      <Route path="/" element={<Header/>}> 
      <Route index element={<Body/>}></Route>
      <Route path="/about"   element={<About/>}></Route>
      <Route  path="/body"  element={<Body/>}  ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/res/:resId" element={<Menu/>}></Route>
       </Route>
    
      </Routes>
      
    </div>
  );
};



export default App;
