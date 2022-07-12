import React from "react";
import {Carousel} from "react-bootstrap";


class BannerCenterTitleSubtext extends React.Component {
    items = [];

    constructor(params) {
        super(params);

        this.items = this.props.items || [];
    }

    renderItem(item, key){
        return(
            <Carousel.Item key={`banner-title-subtext-${key}`}>
                <img
                    className="d-block w-100"
                    src={item?.src}
                    alt={item?.alt}
                />
                <Carousel.Caption>
                    <h3>{item?.title}</h3>
                    <p>{item?.content}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

    renderItems(items) {
        return items.map((x, i) => this.renderItem(x, i));
    }

    render() {
        return (
            <Carousel>
                {this.renderItems(this.items)}
            </Carousel>
        );
    }
}

export default BannerCenterTitleSubtext;
