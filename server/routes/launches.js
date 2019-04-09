const API_ENDPOINT = "https://launchlibrary.net/1.4/launch";
const fetch = require("node-fetch");

module.exports = async (req, res) => {
    // Get a list of launches from external API
    let fetchLaunches = await fetch(API_ENDPOINT);
    let { launches } = await fetchLaunches.json();

    // Filter out unused fields before sending to a client
    let filteredLaunches = launches.map(launch => {
        return {
            id: launch.id,
            name: launch.name,
            net: launch.net
        }
    });

    res.send(filteredLaunches);
};