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
import Journaldesigner from './Journaldesigner';
import Journalbrowser from './Journalbrowser';
import Indesign from './Indesign';
import Madetoprint from './Madetoprint';
import Claro from './Claro';
import Imageworkflow from './Imageworkflow';
import Sternwaldcockpit from './Sternwaldcockpit';

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
            }else if (content === 'journaldesigner'){
                return <Journaldesigner isFrench={this.state.isFrench} />
            }else if (content === 'journalbrowser'){
                return <Journalbrowser isFrench={this.state.isFrench} />
            }else if (content === 'indesign'){
                return <Indesign isFrench={this.state.isFrench} />
            }else if (content === 'madetoprint'){
                return <Madetoprint isFrench={this.state.isFrench} />
            }else if (content === 'claro'){
                return <Claro isFrench={this.state.isFrench} />
            }else if (content === 'imageworkflow'){
                return <Imageworkflow isFrench={this.state.isFrench} />
            }else if (content === 'sternwaldcockpit'){
                return <Sternwaldcockpit isFrench={this.state.isFrench} />
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
                        <NavDropdown.Item onClick={() => this.setContent('journaldesigner')}>Journal Designer</NavDropdown.Item>  
                        <NavDropdown.Item onClick={() => this.setContent('journalbrowser')}>Journal Browser</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.setContent('indesign')}>inDesign</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.setContent('madetoprint')}>MadeToPrint</NavDropdown.Item>
                    </NavDropdown>                

                    <NavDropdown title="Image Workflow" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.setContent('claro')}>Claro</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.setContent('imageworkflow')}>ImageWorkflow</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Epaper" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.setContent('sternwaldcockpit')}>Sternwald Cockpit</NavDropdown.Item>
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

export default Navigation;


