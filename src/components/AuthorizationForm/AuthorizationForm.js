import './AuthorizationForm.scss';
import i18n from './AuthorizationForm.i18n.js';

import React, { Component } from 'react';
import b_ from 'b_';

const b = b_.with('authorization-form');
const __ = i18n.ru;

export default class AuthorizationForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		const {
			isRegistration
		} = this.props;
		const prefix = isRegistration ? 'register' : 'auth';

		const inputEmailProps = {
			placeholder: __[prefix]['EmailHolder'],
			type: 'text',
			className: b('root-input'),
		};

		const inputNameProps = {
			placeholder: __[prefix]['NameHolder'],
			type: 'text',
			className: b('root-input'),
		};

		const inputPassProps = {
			placeholder: __[prefix]['PasswordHolder'],
			type: 'password',
			className: b('root-input'),
		};

		return (
			<div className={b()}>
				{isRegistration && <div className={b('input')}><input {...inputEmailProps}/></div>}
				<div className={b('input')}><input {...inputNameProps}/></div>
				<div className={b('input')}><input {...inputPassProps}/></div>
				<div className={b('apply-form')}>
					<div className={b('button')}>{__[prefix]['Apply']}</div>
				</div>
			</div>
		)
	}
}