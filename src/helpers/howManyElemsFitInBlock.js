const howManyElemsFitInBlock = (widthBlock=0, widthElm=0) => {
    const wB = parseInt(widthBlock, 10);
    const wE = parseInt(widthElm, 10);

    if (wB === 0 || wE === 0 || !wB) {
        return 0;
    }
    
    if (wB < wE) {
        return 0;
    } else if (wB === wE) {
        return 1;
    } else {
        return Math.floor(wB/wE); 
    }
};

export default howManyElemsFitInBlock;