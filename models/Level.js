const { Shema, model } = requre ('mongoose');

const levelSchema = new Schema ({
    userId: {
        type: String,
        required: true,
    },
    guildId: {
        type: String,
        required: true
    },
    xp: {
        type: Number,
        defualt: 0,
    },
    level: {
        type: Number,
        defualt: 0,
    }
});

module.exports = model('level', levelSchema);