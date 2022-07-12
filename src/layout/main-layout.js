import React from "react";
import {Outlet, Link} from "react-router-dom";
import MainNav from "./main-nav";
import MainLayoutFooter from "../shared/component/footer/main-layout-footer";

class MainLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"main-container"}>
                <MainNav/>
                <div className="main-container-body container-fluid px-0">
                    <Outlet/>

                    <MainLayoutFooter></MainLayoutFooter>
                </div>
            </div>
        );
    }
}

export default MainLayout;
