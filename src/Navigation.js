import React, { Component } from 'react';
import { isFlowBaseAnnotation } from '@babel/types';
//import MenuList from '@material-ui/core/MenuList';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl} from 'react-bootstrap';
import Content from './Content';

var language;

class Navigation extends React.Component{
    render() {
        return(
            <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                <NavDropdown title="Editorial" id="basic-nav-dropdown">
                    <NavDropdown.Item id="elvis">Elvis</NavDropdown.Item>
                    <NavDropdown.Item id="contentstation">Content Station</NavDropdown.Item>
                    <NavDropdown.Item id="brixwire">BrixWire</NavDropdown.Item>
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

                <Menu />

                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                
            </Navbar.Collapse>
            </Navbar>
            
            <Manual />
            
            </div>
        )
    }
}


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



class Manual extends React.Component{

    render(){
        let manual;
    
        if (language == 1) {
            //manual = <ElvisManualFr />
            return(
                <p>IFrame Elvis Manual DE</p>
                )
          } else {
            //manual = <ElvisManualDe />
            return(
                <p>IFrame Elvis Manual FR</p>
            )
          }

       
        return(
        <div>{manual} {language}</div>
        )
    }
}



export default Navigation;