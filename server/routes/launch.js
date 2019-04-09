const API_ENDPOINT = "https://launchlibrary.net/1.4/launch";
const fetch = require("node-fetch");

module.exports = async (req, res) => {
    let launchId = req.params.id;
    // Get the launch from external API
    let fetchLaunches = await fetch(`${API_ENDPOINT}/${launchId}`);
    let { launches } = await fetchLaunches.json();
    let launch = launches[0];

    //TODO: filter out unused launch fields

    res.send(launch);
};