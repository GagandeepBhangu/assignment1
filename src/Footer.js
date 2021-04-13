import React, { Component } from "react";
class Footer extends Component
{
    render()
    {
        return(
            <footer className="bg-danger text-white">
            <div className="text-center p-3">
                <p className="mb-1 py-3">
                    <a href="#" className="link-light">Return to the top</a>
                </p>
                <p className="mb-0 text-white">Made by Gagandeep Bhangu</p>

            </div>

            </footer>
        );
    }
}
export default Footer;