const BodyComponent = ({ children }) => {
  return (
    <div className="flex bg-violet-100 h-screen">
      <div className=" flex flex-col items-center container mx-auto bg-white shadow  pt-5 pb-8 ring-1 ring-gray-900/5 my-10">
        {children}
      </div>
    </div>
  )
}

export default BodyComponent
