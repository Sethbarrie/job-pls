const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
    posting_id: {
        type: String,
        required: true
    },
    posting_url: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: Number
    },
    company: {
        type: String  
    },
    salary: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    source: {
        type: String
    },
    type: {
        type: String
    },
    created_at: {
        type: String
    },
    public: {
        type: Boolean,
        required: true
    },
    notes: {
        type: String
    },
    misc: {
        type: String
    },
    company_logo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Posting = mongoose.model('posting', PostingSchema);