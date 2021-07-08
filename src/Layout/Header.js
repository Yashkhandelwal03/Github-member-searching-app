import React,{ useState,useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

import {Link} from 'react-router-dom';
import UserContext from '../Context/UserContext';


const Header = () => {
    const context = useContext(UserContext);
    const [isToggle,setIsToggle] = useState(false);

    const toggle = () => setIsToggle(!isToggle);

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand ><Link to='/' className='text-white'>Gitapp with Firebase</Link></NavbarBrand>
            <NavbarText className='text-white'>
            {context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isToggle} navbar>
                <Nav className='ml-auto' navbar>
                    {
                        context.user ? ( 
                        <NavItem >
                            <NavLink onClick={ e => context.setUser(null)} className='text-white'>
                                Logout
                            </NavLink>
                        </NavItem>
                        ):(
                     <>
                    <NavItem>
                        <NavLink tag={Link} to='/signup' className='text-white'>
                            Signup
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink tag={Link} to='/signin' className='text-white'>
                            Signin
                        </NavLink>
                    </NavItem>
                    </>
                    )
                    }
                    
                   
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;
