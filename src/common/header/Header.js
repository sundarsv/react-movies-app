import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalisOpen: false
        };
    }

    openModalHandler = () => {
        this.setState({modalisOpen:true});
    }

    closeModalHandler = () => {
        this.setState({modalisOpen:false});
    }

    render () {
        return (
            <div>
                <header className="app-header">
                <img src = {logo} className="app-logo" alt="logo"/>
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalisOpen} contentLabel="Login" 
                onRequestClose={this.closeModalHandler}>
                    
                </Modal>
            </div>
        )
    }
}

export default Header;