import React, { useState, useEffect } from "react";


export const withDataFetching = (Wrapped) => (link) => {
    console.log(link);
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
            <Wrapped dataFetching={{data, isLoading, isError}} />
        )
    }
    
    return WithDataFetchingComponent;
}

export const withGallery = (Wrapped) => (props) => {
    const WithGallery = () => {
        return (
            <Wrapped {...props} />
        )
    }

    return WithGallery;
}

const GalleryItem = withDataFetching()()