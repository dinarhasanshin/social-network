const {Schema, model, Types} = require('mongoose')


const schema = new Schema({
    vk: {type: String},
    website: {type: String},
    telegram: {type: String},
    owner: {type: Types.ObjectId, ref: 'User'}
})


module.exports = model('Contact', schema)