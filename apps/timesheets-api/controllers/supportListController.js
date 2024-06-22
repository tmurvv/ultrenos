const {Joblist} = require("../schemas/JoblistSchema");
const {Tasklist} = require("../schemas/TasklistSchema");

exports.getCurrentJobs = async (req, res) => {
    try {
        const currentJobs = await Joblist.find();
        res.status(200).json({
            title: 'ultrenostimesheets | Get Current Jobs',
            status: 'success',
            data: currentJobs
        });
    } catch(e) {
        res.status(500).json({
            title: 'ultrenostimesheets | Get Current Jobs',
            status: 'fail',
            error: e.message
        });
    }
 
}
exports.getTasks = async (req, res) => {
    try {
        const currentTasks = await Tasklist.find({current: true});
        res.status(200).json({
            title: 'ultrenostimesheets | Get Current Tasks',
            status: 'success',
            data: currentTasks
        });
    } catch(e) {
        console.log('from getCurrentTasks', e.message) 
        res.status(500).json({
            title: 'ultrenostimesheets | Get Current Tasks',
            status: 'fail',
            error: e.message
        });
    }
}
