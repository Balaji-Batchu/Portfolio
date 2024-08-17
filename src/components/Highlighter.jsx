const Highlighter = ({heading, designation, text}) => {
  return (    
    <div className="mb-8 hover:cursor-default group relative">
        <h1 className="font-bold">
        <p className='height_adjust gradient text-3xl md:text-4xl lg:text-6xl group-hover:gradient-reverse'>
            {heading}
        </p>
        <p className='text-xl md:text-2xl lg:text-5xl text-[#86daa3] group-hover: decoration-amber-100'>
            {designation}
        </p>
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-md mx-auto text-yellow-50 mt-4 relative">
            <span className="relative inline-block">
                <span>{text}</span>
                <span className="block absolute left-0 bottom-0 w-full h-0.5 bg-[#86daa3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
        </p>
    </div>
  )}
  
export default Highlighter;