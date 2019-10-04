import React from 'react';
import { NavigateNextIcon } from '@material-ui/icons'

import './CardCategory.css'

export default class CardCategory extends React.Component {
    render() {
        return (
            <div className="card-category">
                <div className="card-image">
                    <img src={this.props.img} alt="Card Img" />
                </div>
                <div className="card-text">
                    <h6>{this.props.text}</h6>
                </div>
                <div className="card-des">
                    <p>{this.props.des}</p>
                </div>
                <div className="card-icon">

                </div>
            </div>
        );
    }
}