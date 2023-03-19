import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	EmailSpan,
	LoginButton,
	LoginForm,
	LoginFormWrapper,
	LoginInnerWrapper,
	LoginInput,
	LoginLabel,
	LoginSpan,
	LoginSubTitle,
	LoginTitle,
	LoginWrapper,
	PasswordSpan,
} from './Login.styled';

export const Login = () => {
	const number = useRef();
	const password = useRef();

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		axios
			.post('http://178.128.116.142:1777/api/auth/v1/login', {
				password: password.current.value,
				phoneNumber: number.current.value,
			})
			.then((res) => {
				window.localStorage.setItem(
					'user_token',
					res.data.objectKoinot.accessToken,
				);
				if (res.status === 202) {
					alert('Welcome');
					window.location.reload();
				} else {
					alert('Something went wrong');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<LoginWrapper>
			<LoginTitle>BigTech.uz</LoginTitle>
			<LoginInnerWrapper>
				<LoginSubTitle>Tizimga kirish</LoginSubTitle>

				<LoginForm onSubmit={handleFormSubmit}>
					<LoginFormWrapper>
						<LoginLabel htmlFor="tel">Raqam:</LoginLabel>
						<EmailSpan></EmailSpan>
						<LoginInput
							type="tel"
							id="tel"
							ref={number}
							placeholder="Sizning telefon raqamingiz"
							emailInput
						/>
					</LoginFormWrapper>
					<LoginFormWrapper>
						<LoginLabel htmlFor="password">Parol:</LoginLabel>
						<PasswordSpan></PasswordSpan>
						<LoginInput
							type="password"
							id="password"
							ref={password}
							placeholder="Sizning e-mailingiz"
						/>
					</LoginFormWrapper>
					<LoginButton type="submit">Kirish</LoginButton>
				</LoginForm>
			</LoginInnerWrapper>
		</LoginWrapper>
	);
};
