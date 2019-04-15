import React from "react";

class Dothraki extends React.Component {
    render() {
        return (
            <div>
                {this.props.text && <p>English: { this.props.text } </p> }
                {this.props.translated && <p>Dothraki: { this.props.translated } </p> }
                                  
            </div>
        );
    }
};

export default Dothraki;