const mongoose = require('mongoose');

if(process.env.MONGODB_URI){

mongoose.connect(process.env.MONGODB_URI);

}else{
	mongoose.connect('mongodb://localhost', {
				    useNewUrlParser: true,
				    useUnifiedTopology: true });

}

module.exports = mongoose.connection;
