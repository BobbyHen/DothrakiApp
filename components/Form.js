import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getTranslator}>
                <input type="text" name="english" placeholder="English"/>
                <button>Translate</button>
            </form>
        );
    }
};

export default Form;