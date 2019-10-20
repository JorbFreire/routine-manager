const User = require('../models/User');
const Task = require('../models/Task');

module.exports = {
    async index(req, res){
        const {user_id} = req.headers;

        const tasks = await Task.find({user: user_id});

        return res.json(tasks);
    },
    
    async store(req, res){
        const {user_id} = req.headers;
        const {title} = req.body;
        const {levels} = req.body;

        const user = await User.findById(user_id);
        
        if(!user){
            return res.status(400).json({ error: "Usuario não existe"});
        }
        
        const task = await Task.create({
            user: user_id,
            title,
            levels
        });
        return res.json(task);
    },
    async remove(req, res){
        await Task.findByIdAndRemove(req.params.id);

        return res.send();
    }
};