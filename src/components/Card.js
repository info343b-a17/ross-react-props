import React from "react";

export default class Card extends React.Component {
    render() {
        let styles = {
            width: this.props.width
        };
        return (

            //div.card>img.card-img-top+div.card-body
            <div style={styles} className="card">
                <img src={this.props.imgsrc} alt={this.props.imgalt} className="card-img-top"/>
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <div className="card-text">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}