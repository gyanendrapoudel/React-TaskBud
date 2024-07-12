const Task = ({id, name, handleDelete, handleEdit}) => {

  return (
    <div className="d-flex gap-5 align-items-center justify-content-center rounded-2 p-1 bg-light w-50 task m-auto my-1 ">
      <span className="text-capitalize">{name}</span>
      <div>
        <button className="btn btn-danger me-2" onClick={()=>handleDelete(id)}>
          <i className="bi bi-trash3 "></i>
        </button>
        <button className="btn btn-success" onClick={()=>handleEdit(id)}>
          <i className="bi bi-pencil"></i>
        </button>
      </div>
    </div>
  )
}
export default Task