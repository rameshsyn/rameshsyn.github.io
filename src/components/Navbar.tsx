import * as React from "react";
import Nav from "./Nav";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

const menus: Array<String> = ["Home", "Blog"];

interface NavbarProps {
  menuItems: [];
}

export default class Navbar extends React.Component<NavbarProps, object> {
  render() {
    const { menuItems = menus } = this.props;
    return (
      <nav>
        <Nav>
          {menuItems.map((m, i) => (
            <NavItem key={i}>
              <NavLink href="/">{m}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </nav>
    );
  }
}
