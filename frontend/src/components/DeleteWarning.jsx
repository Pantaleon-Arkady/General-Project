function DeleteWarning({ onDelete, deleteId, deleteName }) {



    return (
        <>
            <div>
                Delete Warning

                <div>
                    delete id: {deleteId}
                </div>
                <div>
                    deleting: {deleteName}
                </div>
            </div>
        </>
    )
}

export default DeleteWarning;