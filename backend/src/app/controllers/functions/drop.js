const Task = require('../../../models/Task');

async function runDrop(id){
  const task = await Task.findById(id);
  
  if(task){
    let {levels, toleranceNow} = task;
    
    if(toleranceNow == 0){
      for(let i = (levels.length-1); i >= 0 ; i--){
        if(!levels[i].locked){
          if(levels[i].frequency >= 1){
            levels[i].frequency = 0;
          }
          levels[i].frequency--;
        }
        levels[i].locked = false;
      }
    } else {
      for(let i = (levels.length-1); i >= 0 ; i--){
        levels[i].locked = false;
      }
      toleranceNow--;
    }
    
    Task.findByIdAndUpdate(
      id,
      {$set: {
        'levels': levels,
        'toleranceNow': toleranceNow
      }}, 
      {new: true},
      () =>{}
    );

    drop(id);
  } else {
    console.log("this task is dead");
  }
}
function drop(id){
  setTimeout(() => {
    runDrop(id);
  }, 20000);
};

module.exports = drop;