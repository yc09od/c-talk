import React from "react";
import {Button, Card} from "react-bootstrap";
import {IsEmpty, IsNoneOrEmpty} from "../../../utility/string-utility";
import ClassNameUtility from "../../../utility/class-name-utility";

class InformationBlockCardsImgOnTopTitleContent extends React.Component {

    generateImg(params) {
        return IsNoneOrEmpty(params?.imgUrl) ? null : (
            <Card.Img variant="top" src={params.imgUrl}/>
        );
    }


    generateCol(l = 12, m = 12, sm = 12, xs = 12) {
        return `col-lg-${l} col-md-${m} col-sm-${sm} col-xs-${xs}`
    }

    generateCard(params, count, index) {
        const cardLength = count;
        const containerClasses = "pb-4";
        const textClass = IsNoneOrEmpty(params.centerStyle) ? null : params.centerStyle;

        return (
            <div key={`${index}`} className={`${this.generateCol(12 / cardLength, 12 / cardLength)} ${containerClasses}`}>
                <Card className={"h-100"}>
                    {this.generateImg(params)}
                    <Card.Body className={textClass}>
                        <Card.Title className={textClass}>{params?.title}</Card.Title>
                        <Card.Text className={textClass}>
                            {params?.content}
                        </Card.Text>
                        {!IsNoneOrEmpty(params.buttonContent) ?
                            <Button variant="outline-primary">{params.buttonContent}</Button> : null}
                    </Card.Body>
                </Card>
            </div>
        );
    }

    render() {
        const cards = this.props.data?.map((x, i) => this.generateCard(x, this.props?.data?.length || 1, i)) || "";

        return (
            <div className={ClassNameUtility.ExtendClass("cards-img-on-top-title-content", "row")}>
                {cards}
            </div>
        );
    }
}

export default InformationBlockCardsImgOnTopTitleContent;
