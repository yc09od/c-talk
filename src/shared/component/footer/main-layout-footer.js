import React from "react";

class MainLayoutFooter extends React.Component {
    render() {
        return (
            <div className={"main-layout-footer"}>
                <p className={"p-3 m-0 text-center"}>© {this.props?.companyName || "default company name"}, {new Date().getFullYear()}. All rights reserved</p>
            </div>
            );
    }
}

export default MainLayoutFooter;
