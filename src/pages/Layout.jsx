import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    
    return(
        <div>
            <div className="header-bar">
                <div className="home">
                <Link style={{color: "black"}}to="/">
                    <h1>Creatorverse</h1>
                </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;