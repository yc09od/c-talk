import React from "react";
import ClassNameUtility from "../../../utility/class-name-utility";
import {IsNoneOrEmpty} from "../../../utility/string-utility";


class InformationBlockTitleParagraph extends React.Component {

    title = "";
    content = "";

    constructor(props) {
        super(props);

        this.title = this.props.title;
        this.content = this.props.content;
        this.centerTitle = this.props.centerTitle === undefined ? true : this.props.centerTitle;
        this.centerContent = this.props.centerContent === undefined ? true : this.props.centerContent;
    }

    render() {
        let backgroundColor = IsNoneOrEmpty(this.props.backgroundColor) ? "" : this.props.backgroundColor;
        let fontColor = IsNoneOrEmpty(this.props.fontColor) ? "text-dark" : this.props.fontColor;

        return (
            <div className={`information-block-title-paragraph  p-5 ${backgroundColor} ${fontColor}`}>
                <h1 className={ClassNameUtility.ExtendClass(this.centerTitle ? "text-center" : "", `mb-3`)}>
                    <strong>{this.title}</strong></h1>
                <p className={this.centerContent ? "text-center" : ""}>{this.content}</p>
            </div>
        );
    }
}

export default InformationBlockTitleParagraph;
