const assert = chai.assert;
// const TaskManager = require('../js/taskManager.js')
// import {TaskManager} from '../js/taskManager'
// console.log(taskManager.tasks)

const expect = chai.expect;
describe('TaskManager', () => {
    describe('#constructor',() => {
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

describe('TaskManager', () => {
    describe('.addTask',() => {
        describe('adding new task', () => {
            it('should add the new task to the tasks array', () => {
                const taskManager = new TaskManager(3);
                const task = {
                    id: taskManager.currentId,
                    name: 'HTML CSS',
                    description: 'adding html and css',
                    assignedTo: 'Deepa',
                    email: '123@gmail.com',
                    dueDate: Date.now(),
                    status: 'In Progress',
                    category: 'Study'
                  };

                  taskManager.addTask(
                    task.name,
                    task.description,
                    task.assignedTo,
                    task.email,
                    task.dueDate,
                    task.status,
                    task.category
                  );
                //   console.log(taskManager.tasks[0].task)
                //   console.log(task)
                  assert.deepStrictEqual(taskManager.tasks[0].task, task)
            })
            it('should increment the currentId', () => {
                const taskManager = new TaskManager(4);
                const task = {
                    id: taskManager.currentId,
                    name: 'HTML CSS',
                    description: 'adding html and css',
                    assignedTo: 'Deepa',
                    email: '123@gmail.com',
                    dueDate: Date.now(),
                    status: 'In Progress',
                    category: 'Study'
                  };
                  taskManager.addTask(
                    task.name,
                    task.description,
                    task.assignedTo,
                    task.email,
                    task.dueDate,
                    task.status,
                    task.category
                  );
                 
                  assert.deepStrictEqual(taskManager.currentId, 5)
            })
       })
    })
    describe('.deleteTask', () => {
        describe('when passing Id greater than the currentId', () => {
            it('should throw an error', () => {
                const taskManager = new TaskManager()
                // expect(() => taskManager.deleteTask(1)).to.throw(); 
                const input = 1;
                const expected = 'This is wrong!'
                assert.throws(() =>{
                    taskManager.deleteTask(input)
                  }, expected)
            })
            
        })
        describe('when deleting a task', () => {
            it('should delete the task', () => {
                    const taskManager = new TaskManager()
                    const task = {
                        id: taskManager.currentId,
                        name: 'HTML CSS',
                        description: 'adding html and css',
                        assignedTo: 'Deepa',
                        email: '123@gmail.com',
                        dueDate: Date.now(),
                        status: 'In Progress',
                        category: 'Study'
                      };
                      taskManager.addTask(
                        task.name,
                        task.description,
                        task.assignedTo,
                        task.email,
                        task.dueDate,
                        task.status,
                        task.category
                      );
                    
                      taskManager.deleteTask(0)
                      const actual = taskManager.tasks
                      assert.deepStrictEqual(actual, [])
                    
                })
            })
        })
        describe('.getTaskById', () => {
            describe('when passing Id greater than the currentId', () => {
                it('should throw an error', () => {
                    const taskManager = new TaskManager()
                    // expect(() => taskManager.deleteTask(1)).to.throw(); 
                    const input = 1;
                    const expected = 'This is wrong!'
                    assert.throws(() =>{
                        taskManager.getTaskById(input)
                      }, expected)
                })
                
            })
            describe('selecting a task by the Id', () => {
                it('should select the task', () => {
                        const taskManager = new TaskManager()
                        const task = {
                            id: taskManager.currentId,
                            name: 'HTML CSS',
                            description: 'adding html and css',
                            assignedTo: 'Deepa',
                            email: '123@gmail.com',
                            dueDate: Date.now(),
                            status: 'In Progress',
                            category: 'Study'
                          };
                          taskManager.addTask(
                            task.name,
                            task.description,
                            task.assignedTo,
                            task.email,
                            task.dueDate,
                            task.status,
                            task.category
                          );
                        
                          const expected = task;
                          const actual = taskManager.getTaskById(0).task
                          console.log(actual)
                          assert.deepStrictEqual(actual, expected);
                        
                    })
                })
            })
        // describe('.render', () => {
        //     describe('add a task to the To do list', () => {
        //         it('should show the task in the taskList', () => {
        //             const taskManager = new TaskManager()
        //             const task = {
        //                 id: taskManager.currentId,
        //                 name: 'HTML CSS',
        //                 description: 'adding html and css',
        //                 assignedTo: 'Deepa',
        //                 email: '123@gmail.com',
        //                 dueDate: Date.now(),
        //                 status: 'In Progress',
        //                 category: 'Study'
        //               };
        //               taskManager.addTask(
        //                 task.name,
        //                 task.description,
        //                 task.assignedTo,
        //                 task.email,
        //                 task.dueDate,
        //                 task.status,
        //                 task.category
        //               );
        //         })
        //     })
        // })
    })



