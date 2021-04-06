import Link from 'next/link';

const Navbar=({currentUser})=>{
  const links=[
      !currentUser && {label:"SignIn",href:"/auth/signin"},
      !currentUser && {label:"SignUp",href:"/auth/signup"},
      currentUser && {label:"signout",href:"/auth/signout"}
  ]
  .filter(linkConfig=>linkConfig)
  .map(({label,href})=>{
      return (
          <li key={href} className="nav-items">
              <Link>
              <a href={href} className="nav-links">
              {label}
              </a>
              </Link>
          </li>
      )
  });


  return (
      <nav className="nav navbar-light bg-light">
          <Link>
          <a href="/">Home</a>
          </Link>

          <div className="d-flex justify-content-end">
              <ul className=" nav d-flex align-items-center">
                     {links}
              </ul>
          </div>
      </nav>
  )
}


export default Navbar;