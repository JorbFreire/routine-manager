const User = require('../models/User');
const Task = require('../models/Task');
module.exports = {
    async add(req, res){ 
        const {user_id} = req.headers;
        /*const user = await User.findById(user_id);
        
        if(!user){
            return res.status(400).json({ error: "Usuario não existe"});
        } */
        const taski = await Task.findById(req.params.id);
        console.log(taski);
        const task = await Task.findByIdAndUpdate(
            req.params.id, req.body, {new: true}
        );

        return res.json(task);
    }
};