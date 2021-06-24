import React from 'react';
import * as Auth from '../store/actions/auth';
import {connect} from 'react-redux';
class Login extends React.Component {

    render() {
        const log = () => {
            console.log("Logged to log");
            this.props.login();
        }
        return(
            <div>
                <input placeholder="UserID"/><br/>
                <input placeholder="password"/><br/>
                <button onClick={
                    log
                }>Login</button>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        auth:state.authReducer
    }
}

const mapDispatchToPropd = dispatch => {
    return {
        login:()=>{
            dispatch(Auth.login());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToPropd)(Login);