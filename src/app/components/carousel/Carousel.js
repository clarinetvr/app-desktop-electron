import React from 'react'
import 'jquery/dist/jquery.slim.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/js/dist/carousel'

import './Carousel.css'

export default class Carousel extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.props = {

    //     }
    // }

    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={this.props.CarouselImg1} className="d-block w-100" alt="Carousel 1" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5></h5>
                            <p></p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={this.props.CarouselImg2} className="d-block w-100" alt="Carousel 2" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5></h5>
                            <p></p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={this.props.CarouselImg3} className="d-block w-100" alt="Carousel 3" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5></h5>
                            <p></p> */}
                        </div>
                    </div>
                </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
            </div>
        )
    }
}