import './Auth.scss';
import i18n from './Auth.i18n.js';

import React, { Component } from 'react';
import b_ from 'b_';

import AuthorizationForm from 'components/AuthorizationForm/AuthorizationForm';

const b = b_.with('auth-controller');
const __ = i18n.ru;


export default class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
        	isRegistration: false,
		};

        this._changeForm = this._changeForm.bind(this);
    }

    render() {
    	const {
    		isRegistration,
		} = this.state;

        return (
            <div className={b()}>
				<div className={b('logo')} />
				<div className={b('title')}>{__.Welcome}</div>
				<div className={b('panel')}>
					<div className={b('button', {active: !isRegistration})} onClick={() => this._changeForm(false)}>{__.Logging}</div>
					<div className={b('button', {active: isRegistration})}  onClick={() => this._changeForm(true)}>{__.Registration}</div>
				</div>
				<AuthorizationForm isRegistration={isRegistration}/>
            </div>
        );
    }

    _changeForm(state) {
    	this.setState({
    		isRegistration: state,
		});
	}
}