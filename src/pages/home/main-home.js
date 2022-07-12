import {Component} from "react";
import BannerCenterTitleSubtext
    from "../../shared/component/banner/banner-center-title-subtext/banner-center-title-subtext";
import InformationBlockTitleParagraph
    from "../../shared/component/information-block/information-block-title-paragraph/information-block-title-paragraph";
import InformationBlockCardsImgOnTopTitleContent
    from "../../shared/component/information-block/information-block-cards-img-on-top-title-content/information-block-cards-img-on-top-title-content";

import img from '../../img/banner.png';

class MainHome extends Component {
    items = [{
        src: img,
        alt: "test",
        title: "Title",
        content: "test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 "
    }, {
        src: img,
        alt: "test",
        title: "Title2",
        content: "test2"
    }, {
        src: img,
        alt: "test",
        title: "Title2",
        content: "test2"
    }];

    cardData = [
        {
            imgUrl : "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.jpg",
            title : "test1",
            content: "test1 ",
            buttonContent: "Learn More"
        },
        {
            imgUrl : "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.jpg",
            title : "test1",
            content: "test1",
            buttonContent: "Learn More"
        },
        {
            imgUrl : "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.jpg",
            title : "test1",
            content: "test1"
        },{
            imgUrl : "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.jpg",
            title : "test1",
            content: "test1"
        },
    ];

    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div>
                <BannerCenterTitleSubtext items={this.items}/>
                <InformationBlockTitleParagraph title={"This is a test"} content={"This is a testttttttttttttttttt"}></InformationBlockTitleParagraph>
                <div className={"container"}>

                    <InformationBlockCardsImgOnTopTitleContent data={this.cardData}/>
                </div>

                <InformationBlockTitleParagraph title={"This is a test"} content={"This is a testttttttttttttttttt"} backgroundColor={"bg-secondary"} fontColor={"text-light"}></InformationBlockTitleParagraph>
            </div>
        );

    }
}

export default MainHome;
