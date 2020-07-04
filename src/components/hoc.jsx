import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const withDataFetching = (Wrapped) => (link) => {
    const WithDataFetchingComponent = () => {
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);

        useEffect(() => {
            const fetchData = async () => {
                setIsError(false);
                setIsLoading(true);

                try {
                    const response = await fetch(link);
                    const body = await response.json();
                    
                    setData(body);
                } catch (error) {
                    setIsError(true);
                }

                setIsLoading(false);
            }

            fetchData();
        }, []);
        
        return (
            <Wrapped dataFromApi={{data, isLoading, isError}} />
        )
    }
    
    return WithDataFetchingComponent;
}



export const withResizeWindow = (Wrapped) => () => {
    const mapStateToProps = state => {
        const props = {
            windowSize: state.windowSize,
        }
        return props;
    };
    
    const actionCreators = {
        setWindowSize: actions.setWindowSize,
    }
    
    const WithResizeWindowComponent = (props) => {
        const handleWindowResize = () => (props.setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        }));

        useEffect(() => {
            window.addEventListener('resize', handleWindowResize);

            return () => window.removeEventListener("resize", handleWindowResize);
        }, [])

        return (
            <Wrapped />
        )
    }

    return connect(mapStateToProps, actionCreators)(WithResizeWindowComponent);
}