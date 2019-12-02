import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class Content extends React.Component{
    
    
      render() {
        const isFrench = this.state.isFrench;
        let button;
    
        if (isFrench) {
          button = <FrenchButton onClick={this.handleFrToDe} />;
        } else {
          button = <GermanButton onClick={this.handleDeToFr} />;
        }
    
        return (
          <div>
            <Greeting isFrench={isFrench} />
            {button}
          </div>
        );
      }
    }
    
    function GermanGreeting(props) {
      return <h3>Language: German</h3>;
    }
    
    function FrenchGreeting(props) {
      return <h3>Language: French</h3>;
    }
    
    function Greeting(props) {
      const isFrench = props.isFrench;
      if (isFrench) {
        return <GermanGreeting />;
      }
      return <FrenchGreeting />;
    }
    
    function GermanButton(props) {
      return (
        <button onClick={props.onClick}>
          German
        </button>
      );
    }
    
    function FrenchButton(props) {
      return (
        <button onClick={props.onClick}>
          French
        </button>
      );
    }

export default Content;