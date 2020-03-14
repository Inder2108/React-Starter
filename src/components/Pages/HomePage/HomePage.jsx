import * as React from "react";
import './HomePage.scss';
import NavContainer from "components/Nav/NavContainer";

const HomePage = () => (
    <>
        <div className="app app-Container">
            <div className="app-nav">
                <NavContainer />
            </div>
            <div className="app-body container container-fluid">

            </div>
        </div>
    </>
);

export default HomePage;