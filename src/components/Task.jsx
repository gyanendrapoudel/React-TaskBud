const Task = ({id, name}) => {
  return (
    <div className="d-flex gap-5 align-items-center justify-content-center rounded-5 p-1 bg-light w-75 task m-auto my-1 ">
      <span className="text-capitalize">{name}</span>
      <div >
        <button className="btn btn-danger me-2">
          <i className="bi bi-trash3 "></i>
        </button>
        <button className="btn btn-success">
          <i className="bi bi-pencil"></i>
        </button>
      </div>
    </div>
  )
}
export default Task