function TasksList({tasks}) {

    return (
        <>
            <div>
                {tasks.map((task, i) => (
                    <div
                        key={i}
                    >
                        {task.task}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TasksList;