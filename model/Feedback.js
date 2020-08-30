const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
	
	name: {
			type: String,
		},
	subject: {
			type : String
		},
	email: {
			type : String,
		},
	message: {
			type : String
	},
	isResolved: {
        type: Boolean,
        default : true
	},
	date: {
        type: Date,
        default: Date.now
    }
	});

    module.exports  = mongoose.model('feedbacks', feedbackSchema);
