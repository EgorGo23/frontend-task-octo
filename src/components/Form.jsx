import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: spase-between;
    height: 549px;
    width: 1086px;
    margin-left: 380px;
    position: relative;
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.normal};
    color: ${props => props.theme.colors.gray};
    line-height: 160%;
`;

const LeftCol = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 538px;

    & > input, textarea, label {
        width: 538px;
        margin-bottom: 30px;
        height: 50px;
    }

    textarea {
        height: 130px;
    }

    label {
        color: ${props => props.theme.colors.black};
        margin-bottom: 20px;
        height: 58px;
        display: flex;

        & > input {
            margin: 2px 13px 0 0;
            width: 25px;
            height: 25px;
        }
    }


    button {
        width: 306px;
        height: 60px;
    }
`;

const RightCol = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 517px;
    position: relative;

    & > span {
        position: absolute;
        width: 517px;
        
        left: 0;

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


const Form = () => {
    return (
        <FormContainer method="POST">
            <LeftCol>
                <input type="text" name="name" />
                <input type="tel" name="tel" />
                <input type="email" name="email" />
                <textarea name="mes"></textarea>
                <label htmlFor="checkbox-id">
                    <input id="checkbox-id" type="checkbox" name="checkbox" />
                    <div>Согласен с правилами обработки моих персональных данных</div>
                </label>
                <button type="submit">Отправить сообщение</button>
            </LeftCol>
            <RightCol>
                <span>Имя нас не сильно волнует и это поле необязательное</span>
                <span>Для телефона нужна маска для ввода</span>
                <span>Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес</span>
                <span>Без сообщения форму отправлять бессмысленно</span>
                <span>Форма отправляется только, если отметка с согласием стоит</span>
                <span>У кнопки несколько состояний. Яркой и синей она становится когда все нормально и форму можно отправлять.</span>
            </RightCol>
        </FormContainer>
    )
}

export default Form;