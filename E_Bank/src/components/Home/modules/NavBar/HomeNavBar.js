import React from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavBtn,
    NavBtnLink
 } from './HomeNavBarElements';

class HomeNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return(
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo>Zenith Bank</NavLogo>
                        <NavBtn>
                            <NavBtnLink to="/" type='button' onClick={() => {window.sessionStorage.removeItem('state'); window.location.reload(false);}}>Sign Out</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </>
        );
    }
}

export default HomeNavBar;