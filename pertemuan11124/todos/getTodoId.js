const { getById, todoQuestion } = require('./todoes')

const todoId = async () => {
    const id = await todoQuestion("Masukan Id todo :")

    getById(id);
}

todoId();