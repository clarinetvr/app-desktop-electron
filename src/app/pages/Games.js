import React from 'react'

import '../assets/scss/custom.scss' //bootstrap

class Games extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.props = {
    //         logo: null,
    //     }
    // }

    render() {
        return(
            <div className="crn-right-col">
                <button type="button" class="btn btn-warning">Call C++</button>
            </div>
        );
    }
}

export default Games