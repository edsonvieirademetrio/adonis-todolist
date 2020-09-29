'use strict'

class TaskController {

    index({view}){
        const tasks = [
            {title: 'My task one', body: 'Content my task'},
            {title: 'My task two', body: 'Content my task two'}
        ]

        return view.render('task', {
            title: 'Your Tasks',
            tasks: tasks
        })
    }
}

module.exports = TaskController
