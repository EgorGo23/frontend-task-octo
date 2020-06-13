import React from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import Header from './Header';
import Description from './Description';

const App = () => {
    const Container = styled.div`
        width: 1440px;
        background-color: #fff;
        margin: 0 auto;
    `;

    return (
        <Theme>
            <Container>
                {/* <Header /> */}
                <Description />
            </Container>
        </Theme>
    );
};

export default App;