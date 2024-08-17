const Button = ({name, sty}) => {
  return (
    <div className="hidden md:flex">
        <a className={`${sty} py-2 px-4 rounded transition-colors duration-300 hover:cursor-pointer`}>
        {name}
        </a>
    </div>
  )
}
export default Button