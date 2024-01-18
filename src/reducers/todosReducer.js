export const todosReducer = (todos, action) => {
    switch (action.type) {
        case 'Add':
            return [
                ...todos,
                {
                    id: Date.now(),
                    taskName: action.taskName,
                    completed: false,
                    direction: 'left'
                }
            ]
        case 'change':
            return todos.map((todo) => {
                if (action.id === todo.id) {
                    return {
                        ...todo,
                        completed: action.completed,
                    }
                }
                else {
                    return todo;
                }
            })
        case 'delete':
            return todos.filter(todo => action.id !== todo.id);
        case 'DirectToRigth':
            return todos.map((todo) => {
                if (todo.completed && action.direction === 'left') {
                    return {
                        ...todo,
                        direction: "right",
                    }
                }
                else {
                    return todo;
                }
            })
        case 'DirectToLeft':
            return todos.map((todo) => {
                if (!todo.completed && action.direction === 'right') {
                    return {
                        ...todo,
                        direction: 'left',
                    }
                }
                else {
                    return todo;
                }
            })
        default:
            throw new Error('invalid action ' + action.type);
    }
}
