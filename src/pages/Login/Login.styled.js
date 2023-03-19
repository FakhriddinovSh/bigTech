import styled from 'styled-components';
import MailIcon from '../../assets/images/icons/loginMail.svg';
import PasswordIcon from '../../assets/images/icons/loginPassword.svg';

export const LoginWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding-top: 80px;
	background-color: #000;
`;

export const LoginTitle = styled.h2`
	text-align: center;
	color: #fff;
`;

export const LoginInnerWrapper = styled.div`
	width: 454px;
	margin: 0 auto;
	margin-top: 70px;
	padding-top: 35px;
	padding-right: 50px;
	padding-left: 50px;
	padding-bottom: 76px;
	text-align: center;
	background-color: #fff;
	border-radius: 35px;
`;

export const LoginSubTitle = styled.h3`
	font-weight: 600;
	font-size: 32px;
	line-height: 48px;
	color: #000000;
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const LoginFormWrapper = styled.div`
	position: relative;
`;

export const LoginInput = styled.input`
	width: 100%;
	padding: 17px 12px;
	padding-left: 50px;
	margin-bottom: ${(props) => (props.emailInput ? '16px' : '')};
	font-weight: 300;
	font-size: 14px;
	line-height: 21px;
	color: #000000;
	background: #f7f7f7;
	border: 1px solid #000000;
	border-radius: 7px;
`;
export const LoginLabel = styled.label`
	font-size: 15px;
	line-height: 22px;
	color: #000000;
`;

export const LoginButton = styled.button`
	margin-top: 27px;
	padding: 16px 0;
	color: #fff;
	background: #000000;
	border-radius: 7px;
`;

export const EmailSpan = styled.span`
	position: absolute;
	top: 45px;
	left: 20px;
	width: 20px;
	height: 20px;
	background-image: url(${MailIcon});
	background-repeat: no-repeat;
`;

export const PasswordSpan = styled.span`
	position: absolute;
	top: 43px;
	left: 20px;
	width: 20px;
	height: 20px;
	background-image: url(${PasswordIcon});
	background-repeat: no-repeat;
`;
