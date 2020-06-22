const getFormattedImageSrc = (imgUrl, sizes) => {
    const imgName = imgUrl.match(/\d.*/)[0];
    const template = 'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/';
    
    const imgWidthNum = parseInt(sizes.width, 10);
    const imgHeightNum = parseInt(sizes.height, 10);

    return `${template}${imgName}?geometry=${imgWidthNum}x${imgHeightNum}`;
}

export default getFormattedImageSrc;