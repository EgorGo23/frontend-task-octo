import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Block from './Block';

const StaticContainer = styled.section`
    font-family: ${(props) =>
        (props.theme.fonts)
        || 'sans-serif'
    };
    padding: 0 61px 0 60px;
    color: ${props => props.theme.colors.black};
`;

const mapStateToProps = state => {
    const props = {
        dataFetch: state.dataFetch,
    }
    return props;
};

const actionCreators = {

}

const Static = ({dataFetch}) => {
    const [staticBlocksData, setStaticBlocksData] = useState([]);

    useEffect(() => {
        if (dataFetch.data) {
            setStaticBlocksData(dataFetch.data.static_blocks)
        }
    }, [dataFetch.data]);
    
    return (
        staticBlocksData.length !== 0 
        && (
            <>
                <StaticContainer style={{marginTop: '40px'}}>
                    <Block 
                        data={staticBlocksData[0]}
                        isGallery={true}
                        isDescription={false}
                        highlightedContentWords={['SWOT', 'VIP']}
                        sizes={{blockSizes: {width: '100%', height: '562px', display: 'flex', flexFlow: 'column'}}}
                    /> 
                </StaticContainer>

                <StaticContainer style={{position: 'relative', marginTop: '35px'}}>
                    <Block 
                        data={staticBlocksData[1]}
                        isDescription={true}
                        isGallery={false}
                        highlightedContentWords={[]}
                        sizes={{blockSizes: {width: '1015px', height: '621px', display: 'flex', flexFlow: 'column'}}}
                    /> 
                </StaticContainer>

                <StaticContainer style={{marginTop: '43px'}}>
                    <Block 
                        data={staticBlocksData[2]}
                        isDescription={false}
                        isGallery={false}
                        highlightedContentWords={[]}
                        sizes={{blockSizes: {width: '992px', height: '902px', display: 'flex', flexFlow: 'column'}}}
                    /> 
                </StaticContainer>
            </>
        )
    )
}

export default connect(mapStateToProps, actionCreators)(Static);