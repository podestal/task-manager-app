import Todo from "./Todo"

const Todos = (props) => {

    return (
        <div>
            {props.todos.map(todo => 
                <Todo 
                    key={todo.id}
                    todo={todo}
                    handleCompleted={props.handleCompleted}
                    handleDelete = {props.handleDelete}
                />
            )}
        </div>
    )
}

export default Todos