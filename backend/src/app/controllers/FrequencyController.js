const User = require('../../models/User');
const Task = require('../../models/Task');
const authMiddleware = require('../middlewares/auth');

module.exports = {
  async add(req, res){ 
    const {user_id} = req.headers;
    /*const user = await User.findById(user_id);
    
    if(!user){
        return res.status(400).json({ error: "Usuario não existe"});
    } */
    const oldTask = await Task.findById(req.params.id);
    const levelPosition = req.body.levelPosition;
    
    if(!oldTask){
      return res.status(404).send({erro: 'Task not found!'});
    }
    
    let {levels, toleranceDefault} = oldTask;
    

    if(!levels[levelPosition].locked){
      for(let i = levelPosition; i >= 0; i--){
        if(levels[i].frequency <= 0){
          levels[i].frequency = 0;
        }
        levels[i].frequency++;
        levels[i].locked = true;
      }

      // add "stop to fall()" function by click
    }else {
      console.log("     ***** locked!");
      return res.status(423).send({erro: 'locked'});
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {$set: {
        'levels': levels,
        'toleranceNow': toleranceDefault
      }}, 
      {new: true},
      () =>{}
    );

    return res.json(task);
  }
};