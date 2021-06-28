const SHA256 = require('crypto-js/sha256');
const {APP_SECRET} = 'foo123#123bar'; //might consider hiding in another file and including that file in gitignore if had plans to distribute

const hash = (string) => {
    return SHA256(`${APP_SECRET}${string}${APP_SECRET}`).toString();
}

module.exports = {hash};