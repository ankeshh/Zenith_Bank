import React from 'react';
import './App.css';
import Register from './components/Forms/Register';
import Signin from './components/Forms/Signin';
import Home from './components/Home/Home'
import LaunchPage from './components/LaunchPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import Cards from './components/Home/Services/Cards';
import AddCard from './components/Home/Services/Cards/AddCard';
import Transaction from './components/Home/Services/Transaction/Transaction';
import TransactionHistory from './components/Home/Services/Transaction/TransactionHistory';
import OurLocation from './components/Home/Services/Location/OurLocation';
import OTP from './components/OTP';
import ThirdFactorRegistration  from './components/thirdFactor/ThirdFactorRegistration';
import ThirdFactorSignin  from './components/thirdFactor/ThirdFactorSignin';
import Accounts from './components/Home/Services/Accounts/Accounts';
import AddAccount from './components/Home/Services/Accounts/AddAccount';
import Beneficiary from './components/Home/Services/Beneficiary/Beneficiary';
import Billing from './components/Home/Services/Billing/Billing';
import Message from './components/Home/Services/Message/Message';
import Settings from './components/Home/Settings';
import EditDetails from './components/Home/Settings/EditDetails';
import ChangePassword  from './components/Home/Settings/ChangePassword';
import HomeNavBar from './components/Home/modules/NavBar/HomeNavBar';
import HomeFooter from './components/Home/modules/Footer/HomeFooter';


class App extends React.Component{
  constructor(){
    super();
    this.state = window.JSON.parse(sessionStorage.getItem('state')) ||{
      isSignedin: false,
      user:{
        id: "",
        name: "",
        username: "",
        email: "",
        dob: "",
        phno: "",
        aadhar: "",
        account_no: ""
      }
    };
  }

  loadUser = (data) => {
    
    this.setState({
      isSignedin: true,
      user:{
        id: data.id,
        name: data.name,
        email: data.email,
        username: data.username,
        dob: data.dob,
        phno: data.phno,
        aadhar: data.aadhar,
        account_no: data.acc_no
      }
    }, ()=>{
      window.sessionStorage.setItem('state', JSON.stringify(this.state));
    } );
    
  }
  
  render(){
    return(
          <>
            {
              this.state.isSignedin ?
              <>
                <HomeNavBar/>
                <Switch>
                  <Route path="/home" exact><Home  user={this.state.user}/></Route>
                  <Route path="/transaction" exact><Transaction user={this.state.user}/></Route>
                  <Route path="/account" exact><Accounts user={this.state.user}/></Route>
                  <Route path="/account/new"><AddAccount user={this.state.user}/></Route>
                  <Route path="/card/new"><AddCard user={this.state.user}/></Route>
                  <Route path="/beneficiary" exact><Beneficiary user={this.state.user}/></Route>
                  <Route path='/card' exact><Cards user={this.state.user}/></Route>
                  <Route path='/user/statement' exact><TransactionHistory user={this.state.user}/></Route>
                  <Route path='/billing' exact><Billing user={this.state.user}/></Route>
                  <Route path='/message' exact><Message user={this.state.user}/></Route>
                  <Route path='/thirdFactorRegistration' exact><ThirdFactorRegistration user={this.state.user} /></Route>
                  <Route path='/thirdFactorSignin' exact><ThirdFactorSignin user={this.state.user} /></Route>
                  <Route path='/OTP' exact><OTP user={this.state.user} /></Route>
                  <Route path='/location' exact><OurLocation/></Route>
                  <Route path='/settings' exact> <Settings user={this.state.user}/></Route>
                  <Route path='/settings/editDetails' exact> <EditDetails user={this.state.user}/></Route>
                  <Route path='/settings/changePassword' exact> <ChangePassword user={this.state.user}/></Route>
                </Switch>
                <HomeFooter/>
              </>
              :
                <Switch>
                  <Route path="/" exact><LaunchPage/></Route>
                  <Route path="/signin" exact><Signin loadUsers={this.loadUser}/></Route>
                  <Route path="/register" exact><Register loadUser={this.loadUser} /></Route>
                  <Route path="*" exact>
                    <Redirect to="/" />
                  </Route>
                </Switch>
            }  
          </> 
    );
  }
}

export default App;

