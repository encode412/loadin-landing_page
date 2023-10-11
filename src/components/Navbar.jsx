
const Navbar = () => {
  return (
    <div className="navbar bg-base-100" data-theme="dark">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='#features'>Features</a></li>
        <li>
          <a>Company</a>
          <ul className="p-2">
            <li><a href='#learn'>About us</a></li>
            <li><a href='#learn'>How Loadin works</a></li>
            <li><a href='#learn'>Our Offerings</a></li>
          </ul>
        </li>
        <li><a href='#questions'>FAQ's</a></li>
      </ul>
    </div>
    <a className="normal-case text-2xl font-semibold text-white mr-12 px-2">Loadin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-base">
      <li><a href='#features'>Features</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Company</summary>
          <ul className="p-2 max-w-full z-10 text-[#333] bg-[#eee]">
            <li><a href='#features'>About us</a></li>
            <li><a href='#learn'>How Loadin works</a></li>
            <li><a href='#learn'>Our Offerings</a></li>
          </ul>
        </details>
      </li>
      <li><a href='#questions'>FAQ's</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mx-4 text-white">Sign up</a>
    <a className="btn mr-5">Log in</a>
  </div>
</div>
  )
}

export default Navbar