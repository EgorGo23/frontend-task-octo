const highlightWords = (content, arrayWords) => {
    if (!content) {
        return '';
    }

    let newContent = content;

    arrayWords.map((word) => {
        newContent = newContent.replace(new RegExp(word, 'g'), `<strong>${word}</strong>`);
    })

    return newContent;
}

export default highlightWords;