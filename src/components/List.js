import { ReactComponent as DeleteIcon } from "../assets/svg/Delete.svg"

const ListComponent = ({ list, handleClick }) => {
  const handleDelete = (id) => {
    handleClick(id)
  }

  return (
    <div className="mt-5">
      <p className="my-2 underline decoration-4 decoration-violet-500">Lists of Items</p>
      <ul className="divide-y divide-y-gray-200 ">
        {list.map((item) => (
          <li id={item.id} key={item.id} className="py-4 flex justify-between">
            <p className="text-sm font-medium">{item.task}</p>
            <button
              className="shadow ring-2 ring-violet-300 mx-2 rounded"
              onClick={() => handleDelete(item.id)}
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListComponent
