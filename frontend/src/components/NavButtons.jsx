import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function NavButtons() {
    const navItems = [
        { name: "Notes", path: "/notes" },
        { name: "Tasks", path: "/tasks" },
        { name: "Demo", path: "/demo" },
    ];

    const location = useLocation();

    return (
        <>
            <div className="nav_desktop bg-light px-2">
                {navItems.map((item, i) => (
                    <Link 
                        className={`nav_links 
                            ${"/home" + item.path === location.pathname ? "nav_link_highlight" : ""}
                        `}
                        key={i} 
                        to={"/home/" + item.path}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <Dropdown className="nav_mobile">
                <Dropdown.Toggle>
                    Navigation
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {navItems.map((item, i) => (
                        <Dropdown.Item key={i} as={Link} to={"/home" + item.path}>
                            {item.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default NavButtons;