import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../../Validator/validator';
import { Input } from '../../FormsControls/FormControls';
import {connect} from 'react-redux';
import {login} from '../../../Redux/reducers/authReducer';
import {Redirect} from 'react-router-dom';
import "../../../Components/FormsControls/FormControls.scss";


const LoginForm = (props) => {
    return (
        <form class="form-login" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name="email" component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" type="password" component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox"/> remember me
            </div>
            {props.error && <div className="form-error">
                {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect  to={'/Profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)