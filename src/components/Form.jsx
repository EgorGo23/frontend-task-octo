import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import check from '../public/check.svg';

const FormContainer = styled.form`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    display: flex;
    flex-flow: column;
    height: 572px;
    width: 1086px;
    margin-left: 283px;
    position: relative;
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.normal};
    color: ${props => props.theme.colors.gray};
    line-height: 160%;
    z-index: 10;
    background: ${props => props.theme.colors.light_gray};

    & > input {
        padding: 13px 14px 12px 16px;
        width: 538px;
        margin-bottom: 30px;
        height: 50px;
        background: ${props => props.theme.colors.white};
        outline: none;
        border: 1px solid #ADADAD;
        border-radius: 5px;

        &:placeholder {
            font-size: ${(props) => props.theme.fontSizes.sm};
            font-weight: ${props => props.theme.fontWeights.bold};
            line-height: 160%;
            color: ${props => props.theme.colors.gray};
        }

        &:focus {
            border: 2px solid ${props => props.theme.colors.blue};
        }
    }

    & > textarea {
        width: 538px;
        margin-bottom: 30px;
        height: 130px;
        padding: 13px 12px 13px 13px;
        resize: none;
        background: ${props => props.theme.colors.white};
        border: 1px solid #ADADAD;
        border-radius: 5px;

        &:placeholder {
            font-size: ${(props) => props.theme.fontSizes.sm};
            font-weight: ${props => props.theme.fontWeights.bold};
            line-height: 160%;
            color: ${props => props.theme.colors.gray};
        }

        &:focus {
            border: 2px solid ${props => props.theme.colors.blue};
        }

    }

    & > label {
        margin-bottom: 30px;
        color: ${props => props.theme.colors.black};
        margin-bottom: 20px;
        height: 58px;
        width: 526px;
        background: ${props => props.theme.colors.light_gray};

        & > input {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }

        & > span {
            display: inline-flex;
            align-items: center;
            user-select: none;
        }

        & > span::before {
            content: '';
            display: inline-block;
            width: 25px;
            height: 25px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid ${props => props.theme.colors.gray};
            border-radius: 5px;
            margin-right: 13px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
            position: relative;
            top: -12px;
        }

        & > input:checked+span::before {
            border-radius: 5px;
            border-color: ${props => props.theme.colors.blue};
            background-color: ${props => props.theme.colors.blue};
            background-image: url('../../check.svg');
        }
    }

    & > button {
        width: 306px;
        height: 60px;
        background: ${props => props.theme.colors.blue};
        font-size: ${(props) => props.theme.fontSizes.sm};
        font-weight: ${props => props.theme.fontWeights.bold};
        color: ${props => props.theme.colors.white};
        line-height: 160%;
        text-align: center;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        outline: none;

        &:hover {
            &:disabled {
                background: ${props => props.theme.colors.blue};
            }

            background: ${props => props.theme.colors.hoverBlue};
        }

        &:disabled {
            opacity: 0.25;
        }
    }

    & > span[type='description'] {
        position: absolute;
        width: 517px;
        right: 0;

        &:nth-of-type(1) {
            top: 11px;
        }

        &:nth-of-type(2) {
            top: 86px;
        }
        
        &:nth-of-type(3) {
            top: 166px;
        }

        &:nth-of-type(4) {
            top: 241px;
        }

        &:nth-of-type(5) {
            top: 394px;
        }

        &:nth-of-type(6) {
            top: 482px;
        }
    }

    
`;

const SuccessMessage = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
`;

const ErrorMes = styled.div`
    opacity: ${props => props.isError ? 1 : 0};
    position: absolute;
    color: ${props => props.theme.colors.error_color};
    top: 207px;
`;


const Form = () => {
    const [formFields, setFormFields] = useState({
        name: '',
        tel: '',
        email: '',
        message: '',
        isChecked: false,
        emailValid: false,
        formValid: false,   
        formSubmitted: false,
    });
    
    useState(() => {
        if (formFields.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setFormFields({
                ...formFields,
                emailValid: true,
                formValid: true,
            })
        } else {
            setFormFields({
                ...formFields,
                emailValid: false,
                formValid: false,
            })
        }
    })


    const handleSubmit = () => {
        event.preventDefault();
        
        setFormFields({
            name: '',
            tel: '',
            email: '',
            message: '',
            isChecked: false,
            emailValid: false,
            formValid: false,   
            formSubmitted: true,
        })
    }

    const handleChange = ({target}) => {
        switch(target.name) {
            case 'name': {
                setFormFields({
                    ...formFields,
                    name: target.value,
                });
                break;
            }
            case 'tel': {
                setFormFields({
                    ...formFields,
                    tel: target.value,
                });
                
                break;
            }
            case 'email': {
                setFormFields({
                    ...formFields,
                    email: target.value,
                });
                break;
            }
            case 'mes': {
                setFormFields({
                    ...formFields,
                    message: target.value,
                });
                break;
            }
            case 'checkbox': {
                setFormFields({
                    ...formFields,
                    isChecked: !formFields.isChecked,
                });
                break;
            }
            default: 
                break;
        }

        
    }   
    
    return (
        <FormContainer method="POST" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Ваше имя" 
                value={formFields.name} 
                onChange={(e) => handleChange(e)} 
            />
            <span type='description'>Имя нас не сильно волнует и это поле необязательное</span>

            <InputMask
                mask="+7(999)999-99-99" 
                type="tel" 
                name="tel" 
                className='mask'
                placeholder="Телефон" 
                maskChar="_" 
                value={formFields.tel} 
                onChange={(e) => handleChange(e)} 
            />
            <span type='description'>Для телефона нужна маска для ввода</span>

            <input 
                type="email" 
                name="email" 
                placeholder="Электронная почта" 
                onChange={(e) => handleChange(e)}
                value={formFields.email}
                valid={String(formFields.emailValid)}
            />
            <ErrorMes isError={formFields.emailValid}>Некорректный email</ErrorMes>
            <span type='description'>Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес</span>
            
            <textarea 
                name="mes" 
                placeholder="Сообщение" 
                onChange={(e) => handleChange(e)}
                value={formFields.message}
            />
            <span type='description'>Без сообщения форму отправлять бессмысленно</span>
            
            <label htmlFor="checkbox-id" className='custom-checkbox'>
                <input 
                    id="checkbox-id" 
                    type="checkbox" 
                    name="checkbox" 
                    checked={formFields.isChecked}
                    onChange={(e) => handleChange(e)}
                />
                <span>Согласен с правилами обработки моих персональных данных</span>
            </label>
            <span type='description'>Форма отправляется только, если отметка с согласием стоит</span>

            {
                formFields.formSubmitted ? (
                    <SuccessMessage>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9999 0C9.85028 0 0 9.84987 0 21.9999C0 34.15 9.85028 43.9999 21.9999 43.9999C34.151 43.9999 43.9999 34.15 43.9999 21.9999C43.9999 9.84987 34.1505 0 21.9999 0ZM17.9643 33.3009L8.27722 23.6143L11.506 20.3855L17.9643 26.8434L32.4939 12.3133L35.7227 15.5421L17.9643 33.3009Z" fill="#00A4F7"/>
                        </svg>
                        <p>
                            Письмо для активации аккаунта успешно отправлено на адрес электронной почты, который вы указали при регистрации.
                        </p>
                    </SuccessMessage>
                ) : (
                    <button 
                        type="submit"
                        disabled={
                            !emailValid && formFields.message.length === 0 && !formFields.isChecked
                        }
                    >
                        Отправить сообщение
                    </button>
                )
            }

            <span type='description'>У кнопки несколько состояний. Яркой и синей она становится когда все нормально и форму можно отправлять.</span>
        </FormContainer>
    )
}

export default Form;
