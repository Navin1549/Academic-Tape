import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Base =({title="Welcome to our project",children})=>{
    return (
        <div className="container-fluid p-0 m-0 ">
            <Header />
            {children}
            <Footer/>
        </div>

    );
};

export default Base;