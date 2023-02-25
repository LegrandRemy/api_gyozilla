const generateRandomNumber = () => {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}

module.exports = {generateRandomNumber}
