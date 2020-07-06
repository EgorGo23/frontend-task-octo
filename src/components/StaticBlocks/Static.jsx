import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../../variables';
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

    @media (max-width: 400px) {
        padding: 0 20px 0 21px;
    }
`;

const mapStateToProps = state => {
    const props = {
        dataFetch: state.dataFetch,
        windowSize: state.windowSize,
    }
    return props;
};

const actionCreators = {

}

const Static = ({dataFetch, windowSize}) => {
    const breakpoint = variables.breakpoints.mobile;
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
                <StaticContainer id='static_block1' style={{marginTop: '40px'}}>
                    <Block 
                        data={staticBlocksData[0]}
                        isGallery={true}
                        isDescription={false}
                        highlightedContentWords={['SWOT', 'VIP']}
                        sizes={
                            {
                                blockSizes: {
                                    width: '100%', 
                                    height: windowSize.width > breakpoint ? '562px' : '1091px', 
                                    display: 'flex', 
                                    flexFlow: 'column'
                                }
                            }
                        }
                    /> 
                </StaticContainer>

                <StaticContainer style={{position: 'relative', marginTop: '35px'}} id='static_block2'>
                    <Block 
                        data={staticBlocksData[1]}
                        isDescription={true}
                        isGallery={false}
                        highlightedContentWords={[]}
                        sizes={
                            {
                                blockSizes: {
                                    width: windowSize.width > breakpoint ? '1015px' : '100%', 
                                    height: windowSize.width > breakpoint ? '621px' : '1548px', 
                                    display: 'flex', 
                                    flexFlow: 'column'
                                }
                            }
                        }
                    /> 
                </StaticContainer>

                <StaticContainer style={{marginTop: '43px', height: windowSize.width > breakpoint ? '902px' : '1605px'}} id='static_block3'>
                    <Block 
                        data={staticBlocksData[2]}
                        isDescription={false}
                        isGallery={false}
                        highlightedContentWords={[]}
                        sizes={
                            {
                                blockSizes: {
                                    width: windowSize.width > breakpoint ? '992px' : '100%', 
                                    height: windowSize.width > breakpoint ? '902px' : '1548px', 
                                    display: 'flex', 
                                    flexFlow: 'column'
                                }
                            }
                        }
                    /> 
                </StaticContainer>
            </>
        )
    )
}

export default connect(mapStateToProps, actionCreators)(Static);