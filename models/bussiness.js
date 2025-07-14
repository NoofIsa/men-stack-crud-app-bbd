const mongoose= require('mongoose');
const businessSchema = new mongoose.Schema
(
    {
        name: String,
		category: String,
		description: String,
		location: String,
		phoneNumber: String,
		website: String,
		isVerified: {
			type: Boolean,
			default: false,
		}
        // OPTIONAL
    }, {timestamps: true }
);
// after create a schema turn it to model and aexport it
const Business = mongoose.model("Business", businessSchema); // create model
module.exports=Business;

