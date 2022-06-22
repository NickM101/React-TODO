const HeaderComponent = () => {
  return (
    <>
      <p className="font-sans text-2xl font-bold">React To-Do List</p>
      <p className="font-sans text-base font-light">
        Using redux create,read,update and delete items using the provided url
      </p>
      <div className="bg-gray-100 my-5 rounded-lg">
        <p className="font-sans text-base font-semibold p-3 text-rose-700">
          https://crudcrud.com/api/027f560eaa9c45f8a39d375f167f242a/todo
        </p>
      </div>
    </>
  )
}

export default HeaderComponent
