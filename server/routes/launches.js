const API_ENDPOINT = "https://launchlibrary.net/1.4/launch";
const fetch = require("node-fetch");

module.exports = async (req, res) => {
    let fetchLaunches = await fetch(API_ENDPOINT);
    let launches = await fetchLaunches.json();
    res.send(launches);
};