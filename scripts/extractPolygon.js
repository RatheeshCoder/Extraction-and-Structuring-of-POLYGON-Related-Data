const fs = require('fs');


const rawData = fs.readFileSync('data/ethereum.json'); 
const data = JSON.parse(rawData);

const polygonData = {
    official_links: {
        website: "https://polygon.technology/",
        whitepaper: "https://polygon.technology/whitepaper/",
        documentation: "https://docs.polygon.technology/",
        forum: "https://forum.polygon.technology/",
        github: "https://github.com/maticnetwork"
    },
    social_platforms: data.social_platforms,
    data_aggregator: data.data_aggregator.filter(entry => entry.url.includes("polygon")),
    explorers: data.explorers.filter(entry => entry.url.includes("polygon")),
    bridges: data.bridges.filter(entry => entry.url.includes("polygon")),
    bounty: data.bounty,
    grants: data.grants,
    faucets: data.faucets,
    rpcs: data.rpcs,
    wallets: data.wallets,
    oracles: data.oracles.filter(entry => entry.url.includes("polygon")),
};

const polygonJson = JSON.stringify(polygonData, null, 2);
fs.writeFileSync('data/polygon.json', polygonJson); 

console.log('URLs and details for POLYGON have been extracted and saved to polygon.json.');
