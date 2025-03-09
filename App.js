const { useState } = React;

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    function addTask() {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return React.createElement("div", { className: "container" }, 
        React.createElement("h2", null, "To-Do List"),
        React.createElement("input", {
            type: "text",
            placeholder: "Enter task...",
            value: input,
            onChange: (e) => setInput(e.target.value)
        }),
        React.createElement("button", { onClick: addTask }, "Add"),
        React.createElement("ul", null, 
            tasks.map((task, index) =>
                React.createElement("li", { key: index }, 
                    task, 
                    React.createElement("button", { 
                        className: "remove", 
                        onClick: () => removeTask(index) 
                    }, "X")
                )
            )
        )
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(TodoApp));
