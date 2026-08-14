import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function NavButtons() {
    const navItems = [
        { name: "Notes", path: "/notes" },
        { name: "Tasks", path: "/tasks" },
        { name: "Demo", path: "/demo" },
    ];

    return (
        <>
            <div className="nav_desktop">
                {navItems.map((item, i) => (
                    <Link key={i} to={item.path}>
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
                        <Dropdown.Item key={i} href={item.path}>
                            {item.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default NavButtons;