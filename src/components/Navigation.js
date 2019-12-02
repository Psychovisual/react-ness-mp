import React, { Component } from 'react';
import { isFlowBaseAnnotation } from '@babel/types';
//import MenuList from '@material-ui/core/MenuList';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl} from 'react-bootstrap';
import Menu from './Menu'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFrench: false
        };
        this.handleToggleLanguage = this.handleToggleLanguage.bind(this)
      }

      // vu qu'il y a que deux langues, on a juste a toggle le state en true ou false directement
    //   le jour ou y'a plus de language il faudra faire différament, plutot un truc générique dans le state, du genre = language: 'french'
      handleToggleLanguage(){
          const { isFrench } = this.state;
          this.setState({ isFrench: !isFrench });
      }
    render() {
        // Opération ternaire
        const actualLanguage = this.state.isFrench ? 'French' : 'German';
        return (
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
                    </Nav>
                        <Menu 
                        // pass en props la value du language => c'est directement mis a jour ce qu'on passe en props vu qu'on a fait un stateless component
                        // si t'avais une class, t'aurais du faire un componentDidUpdate comme on avait parler
                        actualLanguage={actualLanguage}
                        // pass la méthode pour toggle le state présent ici
                        handleToggleLanguage={this.handleToggleLanguage}
                        />
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;


