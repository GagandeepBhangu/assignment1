import React, { Component } from "react";
import SCP from "./data.json";


const scp = SCP.map(

    (SCP) => {
        return(
        <div className="p-5" key={SCP.Item}>
            <div className="card border-dark text-light bg-danger mb-3">
            <h1 class="card-header">{SCP.Item}</h1>
                    <div className="card-body">
                    <img className="shadow-lg mx-auto w-100 p-1" src={SCP.Image}></img>
                    <br></br>
                    <br></br>
                    <br></br>
                        <h3 className="card-title text-center"><strong>{SCP.Object}</strong></h3>
                        <p className="card-text">{SCP.Procedures}</p>
                        <br></br>
                        <h3 className="card-title text-center"><strong>Description</strong></h3>
                        <p className="card-text">{SCP.Description}</p>
                        <br></br>
                        <h3 className="card-title text-center"><strong>Reference</strong></h3>
                        <p className="card-text">{SCP.Reference}</p>
                    </div>
                </div>
        </div>
        );
    }
);
class Content extends Component
{
    render()
    {
        return(
            <div>
                {scp}
            </div>
        );
    }
}


export default Content;