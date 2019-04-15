import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Dothraki from "./components/Dothraki";

const api_key = "idkRVSCACR0PBHE_dIYYUQeF";

class App extends React.Component{
  state = {
    translated: undefined,
    text: undefined,
    translation: undefined,
    error: undefined
  }

  getTranslator = async (e) => {
    e.preventDefault();
    const english = e.target.elements.english.value;
    const api_call = await fetch("https://api.funtranslations.com/translate/dothraki.json?text=dragon", {
      body: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Funtranslations-Api-Secret": api_key
      },
      method: "POST"
    })

    const data = await api_call.json();
    
    
    console.log(data);
    this.setState({
      translated: data.contents[0].translated,
      text: data.contents[1].text,
      translation: data.contents[2].translation,
      error: ""
    })
  }
  render(){
    return(
      <div>
        <Title />
        <Form getTranslator={this.getTranslator}/>
        <Dothraki 
          translated={this.state.translated}
          text={this.state.text}
          translation={this.state.translation}
          error={this.state.error}
        />

      </div>
    );
  }
};

export default App;
