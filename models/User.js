const {Schema, Types, model} = require('mongoose')

const schema = new Schema({
    profile: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        status: {type: String, default: null },
        birthDay: {type: String, required: true},
        contacts: {
            vk: {type: String, default: null},
            website: {type: String, default: null},
            telegram: {type: String, default: null},
        }
    }, 
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: 'Link'}],
    todos: {type: Types.ObjectId, ref: 'Todo'},
    maxOrder: {type: Number, default: 0, required: true}
})

module.exports = model('User', schema)