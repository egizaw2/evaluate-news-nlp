let json = {
	title: "test json response",
	message: "this is a message",
	time: "now",
};

module.exports = json;
// set aylien API credentias
var textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});
