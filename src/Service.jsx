import React from "react";
//import Card from "./Card";
import Sdata from "./Sdata";

const Service = () =>{
return (
    <>
    <div className='my-5'>
        <h1 className="text-center"><u>Our Services</u></h1>
    </div>
    <div className="col-md-30">
            <div className="col-20">
                <div className="row gy-200">
                  <Sdata />
                </div>
            </div>
        </div>
    </>
  );
};

export default Service;