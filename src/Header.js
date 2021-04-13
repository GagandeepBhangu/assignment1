import React, { Component } from "react";

class Header extends Component
{
    render()
    {
    return(
        <header>
            <div class="pos-f-t">
                 <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h4 class="text-white">SCP</h4>
                        <span class="text-muted">Secure, Contain and Protect</span>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                             </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">GitHub Repository for this app</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-danger">
                    <a class="navbar-brand" href="#">
                        <img src="images/scplogo.png" width="30" height="30" alt=""/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
            <div className="container-fluid bg-dark text-white">
                <div className="row">
                    <h1 className="text-White text-center">SCP Foundation</h1>
                </div>
            </div>
        </header>
        
        );
    }
}



export default Header;