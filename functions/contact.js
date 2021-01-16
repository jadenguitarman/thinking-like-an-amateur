const nodemailer = require('nodemailer');
// import fauna

exports.handler = async (event, context, callback) => {
	let transporter = nodemailer.createTransport({
		/* connect to smtp host */
	});

	transporter.sendMail({
		/* email info */
	}, (error, info) => {
		if (error) callback(error);
		else {
			/*
				push this data to fauna so we have a record of it
			*/




			// now return the 200 status code to the client
			callback(null, {
				statusCode: 200,
				body: "Ok"
			});
		}
	});
};
