export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <span>{title}</span>
            </label>
            <button className="btn btn-danger"
                onClick={() => deleteTodo(id)}
            >Delete</button>
        </li >
    )
}