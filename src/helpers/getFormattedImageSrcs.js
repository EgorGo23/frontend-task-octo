const getFormattedImageSrcs = (template, imgUrl, sizes, paramsArray) => {
    if (paramsArray.length === 0) {
        return template;
    }
    
    const imgName = imgUrl.match(/\d.*/)[0];
    const formatSize = `${parseInt(sizes.width, 10)}x${parseInt(sizes.height, 10)}`;
    const params = paramsArray.map((param) => param + '=');

    return template + `${imgName}` + `?${params.map((param) => param)}` 
}

export default getFormattedImageSrcs;