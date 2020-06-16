import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import variables from '../variables';


const Title = ({text, tag, style}) => {
    const headingStyles = variables.heading_styles;
    const titleStyles = Object.assign(headingStyles.common_properties, headingStyles[`${tag}`], style);

    const TitleContainer = styled(
        ({component, children, ...props}) => React.createElement(component, props, children)
    )`
        ${titleStyles}    
    `;
    
    return (
        <TitleContainer component={tag}>
            {text}
        </TitleContainer>
    )
}

export default Title;