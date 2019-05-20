import React from 'react';

export default class contactMap extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.loc);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.loc !== nextProps.loc;
    }

    render() {
        return (
            <div className="form-map">
                <iframe 
                    title="map"
                    width="100%"
                    height="100%" 
                    src={this.props.loc}
                    frameBorder="0" 
                    scrolling="no">
                </iframe>
        </div>
        );
    }
}