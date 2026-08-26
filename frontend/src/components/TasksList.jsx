function TasksList({tasks}) {

    return (
        <>
            <div className="d-flex flex-column p-2">
                {tasks.map((task, i) => (
                    <div
                        key={i}
                        className={`${task.isDone === true ? "finished_tasks" : "unfinished_tasks"} tasks_list_div`}
                    >
                        {task.task}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TasksList;