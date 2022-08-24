const moment = require("moment");

const middlewareFunction = (req, res, next) => {
	const today = moment().format("DD MMMM YYYY, h:mm:ss a");
	const ipAdress = req.socket.localAddress;
	const urlPath = req.url;
	console.log(
		`User accessed the site at ${today} from ip address ${ipAdress} from url ${urlPath}`
	);
	next();
};
module.exports = { middlewareFunction };
