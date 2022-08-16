import React from "react";
import {Outlet, Link} from "react-router-dom";
import AppNav from "./app-nav";
import MainLayoutFooter from "../shared/component/footer/main-layout-footer";

class AppLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"main-container"}>
                <AppNav/>
                <div className="main-container-body container-fluid px-0">
                    <Outlet/>

                    <MainLayoutFooter></MainLayoutFooter>
                </div>
            </div>
        );
    }
}

export default AppLayout;
