import React, { useState, useEffect } from "react";
import variables from '../variables';

export const withDataFetching = (Wrapped) => () => {
    const WithDataFetchingComponent = () => {
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);

        useEffect(() => {
            const fetchData = async () => {
                setIsError(false);
                setIsLoading(true);

                try {
                    const response = await fetch(variables.link);
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
            <Wrapped dataFetching={{data, isLoading, isError}} />
        )
    }
    
    return WithDataFetchingComponent;
};




