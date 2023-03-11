const path = require('path')

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/agdb.js')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bunde.js'
    },
    mode: 'production'
}