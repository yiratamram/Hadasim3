import React from 'react';
import { MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SignIn from './SignIn';

import {
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownLink, MDBNavbarItem } from 'mdb-react-ui-kit';
import './myStyle.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignUp from './SignUp';
import Home from './Home';
import ChartsPage from './Graf'
import logo from '../Assets/logo.jpg'
import ProfilePage from './UserProfile';
import MyUsers from './MyUsers'
import LittleChartsPage from './LittleChart'
import ChartsPage1 from './Garafim'
import SignUp1 from './AddVaccination';
import Mannege from './Mennege'

export default function FullPageIntroWithFixedNavbar() {
  const dispatch = useDispatch();
  const M = useSelector((store) => { return store.Users.isMenneger });
  const U = useSelector((store) => { return store.Users.user });
  const [state, setState] = useState({ collapse: "false", isWideEnough: "false" });

  return (
    <Router>

      <header>

        <MDBNavbar color="black" dark expand="md" fixed="top" style={{ color: "black" }} >
          <MDBNavbarBrand href="/">
            <img src={logo} width={'80px'} style={{ float: 'right' }} />
          </MDBNavbarBrand>
          
          {!state.isWideEnough && <MDBNavbarToggler onClick={onClick} />}
          <MDBCollapse isOpen={state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
              </MDBNavItem>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <MDBNavbarItem class="nav-item dropdown">
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link'>
                      פרופיל
                    </MDBDropdownToggle>

                    <MDBDropdownMenu >
                      <MDBDropdownItem>
                        <a class="dropdown-item" >  <Link style={{ color: "black", fontSize: "15px" }} to="/SignIn"> התחברות</Link></a>
                      </MDBDropdownItem>

                      {(U.idUser==null )&&
                      <>
                      <MDBDropdownItem>
                      <Link style={{ color: "black", fontSize: "15px" }} to="/SignUp"> <a class="dropdown-item" >  הרשמה</a></Link>
                      </MDBDropdownItem>

                      </>
                      }
                       {(U.idUser!=null )&& <>
                      <MDBDropdownItem>
                      <Link style={{ color: "black", fontSize: "15px" }} to="/SignUp"> <a class="dropdown-item" >  עדכון</a></Link>
                      </MDBDropdownItem>
                      </>
                      }
                      {(U.idUser!=null )&&
                        <MDBDropdownItem>
                         <Link style={{ color: "black", fontSize: "15px" }} to="/ProfilePage"> <a class="dropdown-item" >   צפייה בפרופיל </a></Link>
                        </MDBDropdownItem>
                      }


                    </MDBDropdownMenu>

                  </MDBDropdown>
                </MDBNavbarItem>
              </ul>

              <MDBNavItem>
               
              <NavLink to="http://localhost:3000/" style={{ color: "white" }}>  <MDBNavbarLink>דף הבית</MDBNavbarLink></NavLink>
                
              </MDBNavItem>
              {(M == 1) &&
              <MDBNavItem>
              <NavLink to="/MyUsers" style={{ color: "white" }}>  <MDBNavbarLink>כל הלקוחות</MDBNavbarLink></NavLink>
              </MDBNavItem>
}
{(M == 1) &&
              <MDBNavItem>
                <MDBNavbarLink><NavLink to="/ChartsPage1" style={{ color: "white" }}>חיסונים</NavLink></MDBNavbarLink>
              </MDBNavItem>
}
{(M == 1) &&
              <MDBNavItem>
                <NavLink to="/ChartsPage" style={{ color: "white" }}><MDBNavbarLink>חולים פעילים</MDBNavbarLink></NavLink>
              </MDBNavItem>
}

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>

      <main>
        <MDBContainer >
          <SignIn></SignIn>
        </MDBContainer>
      </main>


      <Switch>
        <Route path='/ChartsPage' exact component={ChartsPage}></Route>
        <Route path='/ProfilePage' exact component={ProfilePage}></Route>
        <Route path='/Home' exact component={Home}></Route>
        <Route path='/MyUsers' exact component={MyUsers}></Route>
        <Route path='/ChartsPage' exact component={ChartsPage}></Route>
        <Route path='/ProfilePage' exact component={ProfilePage}></Route>
        <Route path='/ProfilePage/:id' exact component={ProfilePage}></Route>
        <Route path='/LittleChartsPage' exact component={LittleChartsPage}></Route>
        { <Route path='/ChartsPage1' exact component={ChartsPage1}></Route> }
        <Route path='/SignUp1' exact component={SignUp1}></Route>
        <Route path='/SignIn' exact component={SignIn}></Route>
        <Route path='/SignUp' exact component={SignUp}></Route>
        <Route path='/Mannege' exact component={Mannege}></Route>

      </Switch>

    </Router>
  );
}




