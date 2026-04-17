const {createTask} = require('./src/models/task.model.js')

const test = async() => {
    const task = await createTask("estudiar","estudiar para parcial de programación")
    console.log(task);
};
test();