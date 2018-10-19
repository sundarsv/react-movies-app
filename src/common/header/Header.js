import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookshow/BookShow';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function(props) {
    return (
        <Typography component="div" style={{padding: 0, textAlign:'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalisOpen: false,
            value:0,
            username: "",
            loginPassword: "",
            firstname: "",
            lastname: "",
            email: "",
            registerPassword: "",
            contactNo: "",
            usernameRequired: "dispNone",
            loginPasswordRequired: "dispNone",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            registerPasswordRequired: "dispNone",
            contactNoRequired: "dispNone",            
        };
    }

    openModalHandler = () => {
        this.setState({modalisOpen:true,
        value: 0,
        username: "",
        loginPassword: "",
        firstname: "",
        lastname: "",
        email: "",
        registerPassword: "",
        contactNo: "",
        usernameRequired: "dispNone",
        loginPasswordRequired: "dispNone",
        firstnameRequired: "dispNone",
        lastnameRequired: "dispNone",
        emailRequired: "dispNone",
        registerPasswordRequired: "dispNone",
        contactNoRequired: "dispNone", 
        });
    }

    closeModalHandler = () => {
        this.setState({modalisOpen:false});
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"});
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock"}) : this.setState({lastnameRequired: "dispNone"});
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock"}) : this.setState({emailRequired: "dispNone"});
        this.state.registerPassword === "" ? this.setState({ registerPasswordRequired: "dispBlock" }) : this.setState({ registerPasswordRequired: "dispNone" });
        this.state.contactNo === "" ? this.setState({ contactNoRequired: "dispBlock"}) : this.setState({contactNoRequired: "dispNone"});
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username: e.target.value});
    } 

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({loginPassword: e.target.value});
    }

    inputFirstnameChangeHandler = (e) => {
        this.setState({firstname: e.target.value});
    }

    inputLastnameChangeHandler = (e) => {
        this.setState({lastname: e.target.value});
    }

    inputEmailChangeHandler = (e) => {
        this.setState({email: e.target.value});
    }

    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({registerPassword: e.target.value});
    }

    inputContactNoChangeHandler = (e) => {
        this.setState({contactNo: e.target.value});
    }

    bookshowHandler = () => {
        ReactDOM.render(<BookShow />, document.getElementById('root'));
    }
    
    render () {
        return (
            <div>
                <header className="app-header">
                <img src = {logo} className="app-logo" alt="logo"/>
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                    {this.props.showBookShowButton === "true" ?
                    <div className="bookshow-button">
                    <Button variant="contained" color="primary" onClick={this.bookshowHandler}>Book Show</Button>
                    </div>
                    : "" } 
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalisOpen} contentLabel="Login" 
                onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs className = "tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required >
                            <InputLabel htmlFor="userName">Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required >
                            <InputLabel htmlFor="loginPassword">Password</InputLabel>
                            <Input id="loginPassword" type="password" password={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler}/>
                            <FormHelperText className={this.state.loginPasswordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                    </TabContainer>
                    }
                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}></Input>
                            <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}></Input>
                            <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                            <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required >
                            <InputLabel htmlFor="registerPassword">Password</InputLabel>
                            <Input id="registerPassword" type="password" registerPassword={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler}/>
                            <FormHelperText className={this.state.registerPasswordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl required >
                            <InputLabel htmlFor="contactNo">Contact No.</InputLabel>
                            <Input id="contactNo" type="text" contactNo={this.state.contactNo} onChange={this.inputContactNoChangeHandler}/>
                            <FormHelperText className={this.state.contactNoRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>Register</Button>
                    </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}

export default Header;