import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NavLink,Link, useHistory } from "react-router-dom";
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import APIService from "./api";

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [token, setToken, removeToken] = useCookies(['token'])
  const [data, SetData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    APIService.CurrentUser(token['token'])
    .then(resp => resp.json())
    .then(dat => {
      SetData(dat);
    })
    .catch(error => console.log(error))
  
  }, [token['token']])

 
  const logout = () => {
    removeToken(['token']);
    setModal(false);
    history.push('/');
  }

  const showModal = () =>{
    setModal(true);
  }
  const closeModal = () =>{
    setModal(false);
  }

  return (
    <div>

      <Navbar color="#F0F0FF" className="bg-nvbar-cls" light expand="md">
        <NavbarToggler color="primary" style={{ marginBottom: '1rem' }} onClick={toggle} />
        <Collapse color="" className="menus" isOpen={isOpen} navbar>
          <Nav center className="mr-auto ml-auto" navbar>
            <NavItem>
              <NavLink activeClassName="nav_link_color_y" replace={true} className="nav-link" to="/">
                <img className="logoc" height="23px" width="23px" src="/instrumentm.svg" alt="logo" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink replace={true} className="nav-link" activeClassName="nav_link_color_y" to="/framework">framework</NavLink>
            </NavItem>
            <NavItem>
              <NavLink replace={true} activeClassName="nav_link_color_y" className="nav-link" to="/support">support</NavLink>
            </NavItem>
            <NavItem>
              <NavLink replace={true} activeClassName="nav_link_color_y" className="nav-link" to="/about">about</NavLink>
            </NavItem>

            <NavItem>
              <NavLink replace={true} activeClassName="nav_link_color_y" className="nav-link" to="/blog">blog</NavLink>
            </NavItem>
          </Nav>

          { token['token'] ? 
          <Link replace={true} onClick={showModal} >
          <Modal isOpen={modal} onClick={closeModal} >
        <ModalHeader onClick={closeModal} className="modal_header">Logout</ModalHeader>
        <ModalBody>
        Are you sure you want to logout ?
        </ModalBody>
        <ModalFooter>
          <Button className="stylebuttloginps_header_page_cls btn btn-outline-secondary" style={{backgroundColor:"rgba(99, 99, 128, 0.1)"}} onClick={
            logout
          }>Logout</Button>{' '}
          <Button style={{backgroundColor:"rgba(99, 99, 128, 0.1)"}}  className="stylebuttloginps_header_page_cls btn btn-outline-secondary" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
            <NavbarText className="hideMed" style={{ color: 'white' }}>
            {data.firstname && <span style={{color:'white'}}>{data.firstname}</span>}
          </NavbarText>
            <NavbarText>
              <img className="iconacco" height="24px" width="50px" src="/user.svg" alt="logo" />
            <span style={{color:"#E4DC00 "}}>Logout</span>
            </NavbarText>
          </Link>
          :
          <NavLink replace={true} to="/login" activeClassName="nav_link_color_y" >
            <NavbarText>
              <img className="iconacco" height="24px" width="50px" src="/user.svg" alt="logo" />
            </NavbarText>
          </NavLink>
          }
        </Collapse>
      </Navbar>
      {/* <Content/> */}
    </div>
  );
}

export default Header;