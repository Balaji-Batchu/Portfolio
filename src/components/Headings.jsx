const Headings = ({name}) => {
  return (
    <div className="relative flex items-center justify-center mb-4">
        <div className="absolute inset-0 flex items-center">
        <hr className="w-full border-t-2 border-yellow-200" />
        </div>
        <h2 className="text-4xl md:text-5xl bg-[#03120ff2] font-bold px-2 pb-4 relative z-10">
        {name}
        </h2>
    </div>
  )
}
export default Headings