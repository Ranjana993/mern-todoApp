// import todo from "../modal/Todo.js"
import todo from "../modal/Todo.js"


export const addTodo = async (req, res) => {
    try {
        const newTodo = await todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })
        await newTodo.save()
        res.status(200).json(newTodo)
    } catch (error) {
        res.status(500).json(error)
    }
}


export const getAllTodos = async (req, res) => {
    try {
        const todos = await todo.find({}).sort({ 'createdAt': -1 })
        res.status(200).json(todos)
    }
    catch (error) {
        res.status(500).json(error)
    }
}
export const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await todo.findById(req.params.id)
        const todos = await todo.findOneAndUpdate({ _id: req.params.id }, { done: !todoRef.done })
        await todos.save()
        res.status(200).json(todos)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const updateTodo = async (request, response) => {
    try {
        await todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const todos = await todo.findById(request.params.id);

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const deleteTodo = async (request, response) => {
    try {
        const todos = await todo.findByIdAndDelete(request.params.id)
        return response.status(200).json(todos);
    }
    catch (error) {
        return response.status(500).json(error.message);
    }
}