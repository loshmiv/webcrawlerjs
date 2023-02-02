const { JSDOM } = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a') // array of 'a' tags
    for (const linkElement of linkElements) {
        if (linkElement.href.slice(0, 1) === '/') {
            //relative
            try {
                const urlObj = new URL(`${baseURL}${linkElement.href}`);
                urls.push(urlObj.href);
            } catch (err) {
                console.log(`error with relative url: ${err.message}`);
            }
        } else {
            // absolute
            try {
                const urlObj = new URL(linkElement.href);
                urls.push(urlObj.href);
            } catch (err) {
                console.log(`error with absolute url: ${err.message}`);
            }
        }
    }
    return urls;
}


function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1); // trim the last slash in url
    }
    return hostPath;
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}
