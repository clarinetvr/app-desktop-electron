import React from 'react'
import Carousel from '../components/carousel/Carousel'
// import CardCategory from '../components/cardCategory/CardCategory'

import '../assets/css/Home.css'

import CarouselImg1 from '../assets/images/fortnite.jpg'
import CarouselImg2 from '../assets/images/fortnite.jpg'
import CarouselImg3 from '../assets/images/fortnite.jpg'
import CardImg1 from '../assets/images/overwatch-home.jpg'
import CardImg2 from '../assets/images/gta-v-home.jpg'
import CardImg3 from '../assets/images/paladins-home.jpg'
import CardCategories from '../assets/images/card-categories.png'


export default class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.props = {
    //         logo: null,
    //     }
    // }

    render() {
        return (
            <div className="crn-right-col home">
                <div className="row banner-row">
                    <div className="col-slider">
                        <Carousel CarouselImg1={CarouselImg1} CarouselImg2={CarouselImg2} CarouselImg3={CarouselImg3} />
                    </div>
                    <div className="col-categories">
                        <img src={CardCategories} className="img-fluid" alt="" />
                        {/* <CardCategory img={""} text={"Arcade"} des={"37 Games"}/>
                        <CardCategory img={""} text={"Strategy"} des={"15 Games"}/>
                        <CardCategory img={""} text={"Action"} des={"28 Games"}/>
                        <CardCategory img={""} text={"Show All"} des={"28 Games"}/> */}
                    </div>
                </div>
                <div className="row game-shortcut-row">
                    <div className="col-vr-ready">
                        <h4 className="head-text">VR Ready</h4>
                        <div id="ready-card-1">
                            <img src={CardImg1} className="img-fluid" alt="Game Card" />
                        </div>
                    </div>
                    <div className="col-vr-waiting">
                        <h4 className="head-text">Coming Soon</h4>
                        <div className="row">
                            <div id="waiting-card-1">
                                <img src={CardImg2} className="img-fluid" alt="Game Card" />
                            </div>
                            <div id="waiting-card-2">
                                <img src={CardImg3} className="img-fluid" alt="Game Card" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}