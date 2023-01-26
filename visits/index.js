const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
	host: "redis-server", //same name as we used in docker-compose file.
});
client.set("visits", 0);

app.get("/", (req, res) => {
	process.exit(0); // forcefully crashing the server
	client.get("visits", (err, visits) => {
		res.send("Number of visits is " + visits);
		client.set("visits", parseInt(visits) + 1);
	});
});

app.listen(8081, () => {
	console.log("Listeing on port 8081");
});
