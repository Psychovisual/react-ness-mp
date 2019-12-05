import React, { Component } from 'react';
import { isFlowBaseAnnotation } from '@babel/types';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route
}   from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl} from 'react-bootstrap';
import Menu from './Menu'
import Elvis from './Elvis';
import Contentstation from './Contentstation';
import Brixwire from './Brixwire';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFrench: false,
            content: ''
        };
        this.handleToggleLanguage = this.handleToggleLanguage.bind(this)
      }

        setContent(newContent){
            this.setState({content: newContent })
        }

        handleToggleLanguage(){
            const { isFrench } = this.state;
            this.setState({ isFrench: !isFrench });
        }

    render() {
        
        const actualLanguage = this.state.isFrench ? 'French' : 'German';
        

        const componentToRender = () => {
            const { content } = this.state
            if (content === 'elvis'){
                return <Elvis isFrench={this.state.isFrench} />
            }else if (content === 'contentstation'){
                return <Contentstation isFrench={this.state.isFrench} />
            }else if (content === 'brixwire'){
                return <Brixwire isFrench={this.state.isFrench} />
            }else{
                return <p>HOME PAGE</p>
            }
        }

        return (
            
            <div className="App">
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">NESS-MP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <NavDropdown title="Editorial" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.setContent('elvis')}>Elvis</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.setContent('contentstation')}>Contentstation</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.setContent('brixwire')}>Brixwire</NavDropdown.Item>
                        {/* <NavDropdown.Item id="brixwire" as={NavLink} to="/brixwire">BrixWire</NavDropdown.Item> */}
                    </NavDropdown>

                    <NavDropdown title="Layout" id="basic-nav-dropdown">
                        <NavDropdown.Item id="journaldesigner">Journal Designer</NavDropdown.Item>  
                        <NavDropdown.Item id="journalbrowser">Journal Browser</NavDropdown.Item>
                        <NavDropdown.Item id="indesign">inDesign</NavDropdown.Item>
                        <NavDropdown.Item id="madetoprint">MadeToPrint</NavDropdown.Item>
                    </NavDropdown>                

                    <NavDropdown title="Image Workflow" id="basic-nav-dropdown">
                        <NavDropdown.Item id="claro">Claro</NavDropdown.Item>
                        <NavDropdown.Item id="ImageWorkflow">ImageWorkflow</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Menu actualLanguage={actualLanguage} handleToggleLanguage={this.handleToggleLanguage} />
                        
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
                </Navbar>
                {/*<Route path="/elvis" exact component={Elvis} />
                <Route path="/contentstation" exact component={Contentstation} />
                <Route path="/brixwire" exact component={Brixwire} />*/}
                <div>
                    {componentToRender()}
                </div>
            </div>
            
        )
    }
}



{/*function Elvis(){
    if (language = 1) {
        return(
            <p>IFrame Elvis Manual DE</p>
        )
        } else {
        return(
            <p>IFrame Elvis Manual FR</p>
        )
        }
}

function Contentstation(){
    if (language = 1) {
        return(
            <p>IFrame Contentstation Manual DE</p>
        )
        } else {
        return(
            <p>IFrame Contentstation Manual FR</p>
        )
        }
}

function Brixwire(){
    if(language = 1){
        return(
            <p>IFrame Brixwire Manual DE</p>
        )
    } else {
        return(
            <p>IFrame Brixwire Manual FR</p>
        )
    }
}*/}

{/*}
var language;

class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeToFr = this.handleDeToFr.bind(this);
        this.handleFrToDe = this.handleFrToDe.bind(this);
        this.state = {isFrench: false};
      }
    
      handleDeToFr() {
        this.setState({isFrench: true});
      }
    
      handleFrToDe() {
        this.setState({isFrench: false});
      }
    
      render() {
        const isFrench = this.state.isFrench;
        let button;
    
        if (isFrench) {
          button = <FrenchButton onClick={this.handleFrToDe} />;
          
          language = 1;
        } else {
          button = <GermanButton onClick={this.handleDeToFr} />;
          language = 2;
        }
    
        return (
        <div>
          <div>
            <Greeting isFrench={isFrench} />
          </div>
        <div> {button} {language} </div>
        
        </div>
        
        );
      }
    }

    function GermanGreeting(props) {
      return <p>Language: German</p>;
    }

    function FrenchGreeting(props) {
      return <p>Language: French</p>;
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

*/}

export default Navigation;


