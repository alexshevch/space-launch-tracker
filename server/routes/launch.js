"use strict";

const { API_ENDPOINT } = require("../config");
const fetch = require("node-fetch");

module.exports = async (req, res) => {
    let launchId = req.params.id;
    // Get the launch from external API
    let fetchLaunches = await fetch(`${API_ENDPOINT}/${launchId}`);
    let { launches } = await fetchLaunches.json();
    let launch = launches[0];

    // Filter out and restructure launch fields before sending to a client
    let filteredLaunch = {
        id: launch.id,
        name: launch.name,
        time: launch.net,
        agency: launch.rocket.agencies[0].name,
        location: launch.location.name,
        wikis: {
            location: launch.location.wikiURL,
            agency: launch.rocket.agencies[0].wikiURL,
            rocket: launch.rocket.wikiURL
        }
    }

    res.send(filteredLaunch);
};