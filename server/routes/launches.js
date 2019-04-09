"use strict";

const { API_ENDPOINT } = require("../config");
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
            time: launch.net
        }
    });

    res.send(filteredLaunches);
};