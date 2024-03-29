const validUrl = require('valid-url');

const isValidUrl = (url) => Boolean(validUrl.isWebUri)

const validateURL = (url) => {
    return isValidUrl(url)
}




export {validateURL}