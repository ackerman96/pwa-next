const defaults ={
    URL: 'https://fe-technical-test.herokuapp.com/api',
    ENV: 'development'
}

module.exports = {
    get ENV(){
        return defaults.ENV
    },
    URL: defaults.URL
}