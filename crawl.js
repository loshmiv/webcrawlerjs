function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1); // trim the last slash in url
    }
    return hostPath;
}

module.exports = {
    normalizeURL
}
