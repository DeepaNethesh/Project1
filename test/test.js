const assert = chai.assert;
// const TaskManager = require('../js/taskManager.js')
// import {TaskManager} from '../js/taskManager'
// console.log(taskManager.tasks)

// const expect = chai.expect;
describe('TaskManager', () => {
    describe('#Constructor',() => {
        describe('initializing the taskManager', () => {
            it('should create an empty task array', () => {
                const taskManager = new TaskManager(1);

                assert.deepStrictEqual(taskManager.tasks, [])
            })
            it('should create a current ID', () => {
            
                const taskManager = new TaskManager(1);

                assert.deepStrictEqual(taskManager.currentId, 1)
            })
            
        })
    })
})