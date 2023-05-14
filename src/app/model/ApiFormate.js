import { Schema, model, models } from 'mongoose';

const APISchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Studio: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const ApiModel = models['AnimeSchedule'] || model('AnimeSchedule', APISchema);
// const ApiModel = models.ApiModel || model('AnimeSchedule', APISchema);
export default ApiModel;