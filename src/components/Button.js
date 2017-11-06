import React from "react";

export default class Button extends React.Component {
    render() {
        let styleClasses = ["btn"];
        if (this.props.type) {
            styleClasses.push("btn-" + this.props.type);
        }
        if (this.props.size) {
            styleClasses.push("btn-" + this.props.size);
        }
        return (
            <button className={styleClasses.join(" ")}>
                {this.props.caption}
            </button>
        );
    }
}