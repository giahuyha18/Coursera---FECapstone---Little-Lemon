import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(){
    return (
    <nav className = "nav">
        <Link to = "/" className = "site-title">
            <img src = {require('./Logo.png')} alt = "HomeLogo"/>
        </Link>
        <ul>
            <CustomLink to = "">Home</CustomLink>
            <CustomLink to = "/reservetable">Reserve Table</CustomLink>
            <CustomLink to = "/underConstruction">Menu</CustomLink>
            <CustomLink to = "/onlineorder">Online Order</CustomLink>
        </ul>
    </nav>)
}

function CustomLink({ to, children, ...props}){
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to= {to} {...props}>
                {children}
            </Link>
        </li>
    )
}