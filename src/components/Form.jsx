import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

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

    & > input, textarea, label {
        width: 538px;
        margin-bottom: 30px;
        height: 50px;
        background: ${props => props.theme.colors.white};
        outline: none;

        &:placeholder {
            font-size: ${(props) => props.theme.fontSizes.sm};
            font-weight: ${props => props.theme.fontWeights.bold};
            line-height: 160%;
            color: ${props => props.theme.colors.gray};
        }
    }

    & > input {
        border: ${props => props.valid === 'invalid' ? {border: `2px solid ${props => props.theme.colors.error_color}`}
        : {border: `1px solid ${props => props.theme.colors.gray}`}};
        border-radius: 5px;
        padding: 13px 14px 12px 16px;

        &:focus {
            border: 2px solid ${props => props.theme.colors.blue};
            border-radius: 5px;
        }
    }

    & > textarea {
        height: 130px;
        border: 1px solid ${props => props.theme.colors.gray};
        border-radius: 5px;
        padding: 13px 12px 13px 13px;
        resize: none;
    }

    & > label {
        color: ${props => props.theme.colors.black};
        margin-bottom: 20px;
        height: 58px;
        display: flex;
        background: ${props => props.theme.colors.light_gray};

        & > input {
            margin: 2px 13px 0 0;
            width: 25px;
            height: 25px;

            
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


const ErrorMes = styled.div`
    opacity: ${props => props.type === 'invalid' ? '1' : '0'};
    position: absolute;
    color: ${props => props.theme.colors.error_color};

    top: 204px;
`;


const Form = () => {
    const [formFields, setFormFields] = useState({
        name: '',
        tel: '',
        email: '',
        message: '',
        isChecked: false,
        formErrors: {email: 'Некорректный email'},
        emailValid: 'invalid',
        
    });

    
  
    useEffect(() => {
        if (!!formFields.tel && !!formFields.email && !!formFields.message && !!formFields.isChecked) {
            setFormFields({
                ...formFields,
                formValid: true,
            })
        }
        
    }, [formFields.tel, formFields.email, formFields.message, formFields.isChecked])
    
    const handleSubmit = () => {
        event.preventDefault();
        
        if (!formFields.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setFormFields({
                ...formFields,
                emailValid: 'invalid',
                formValid: false,
            })
        } else {
            setFormFields({
                name: '',
                tel: '',
                email: '',
                message: '',
                isChecked: false,
                formErrors: {email: 'Некорректный email'},
                telValid: null,
                emailValid: null,
                mesValid: null,
                checkValid: null,
                formValid: null,
                sent: false,
            })
        }

        
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
                placeholder="Телефон" 
                maskChar="_" 
                value={formFields.tel} 
                onChange={(e) => handleChange(e)} 
                required
            />
            <span type='description'>Для телефона нужна маска для ввода</span>

            <input 
                type="email" 
                name="email" 
                placeholder={"Электронная почта"} 
                onChange={(e) => handleChange(e)}
                value={formFields.email}
                required
                valid={formFields.emailValid}
            />
            <ErrorMes type={formFields.emailValid}>{formFields.formErrors.email}</ErrorMes>
            <span type='description'>Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес</span>
            
            <textarea 
                name="mes" 
                placeholder="Сообщение" 
                onChange={(e) => handleChange(e)}
                value={formFields.message}
                required
            />
            <span type='description'>Без сообщения форму отправлять бессмысленно</span>
            
            <label htmlFor="checkbox-id" >
                <input 
                    id="checkbox-id" 
                    type="checkbox" 
                    name="checkbox" 
                    checked={formFields.isChecked}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <div>Согласен с правилами обработки моих персональных данных</div>
            </label>
            <span type='description'>Форма отправляется только, если отметка с согласием стоит</span>
            
            <button 
                type="submit"
                disabled={!formFields.formValid}
            >
                Отправить сообщение
            </button>

            <span type='description'>У кнопки несколько состояний. Яркой и синей она становится когда все нормально и форму можно отправлять.</span>
        </FormContainer>
    )
}

export default Form;
