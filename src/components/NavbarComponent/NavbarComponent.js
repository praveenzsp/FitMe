import React from "react";
import { Navbar } from "@nextui-org/react";

function NavbarComponent() {
  return (
    <Navbar variant='floating'>
    <Navbar.Toggle showIn='xs'/>
      <Navbar.Brand>
        <h2 className="text-[30px] font-sora font-bold mx-5 lg:text-[40px]">
          <span className="text-purple-500">Fit</span>Me
        </h2>
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' enableCursorHighlight isCursorHighlightRounded>
        <Navbar.Link>
          <li className="font-sora font-semibold lg:mx-10">
            <a href="#Home">Home</a>
          </li>
        </Navbar.Link>
        <Navbar.Link>
          <li className="font-sora font-semibold lg:mx-10">
            <a href="#Trainers">Trainers</a>
          </li>
        </Navbar.Link>
        <Navbar.Link>
          <li className="font-sora font-semibold lg:mx-10">
            <a href="#Programs">Programs</a>
          </li>
        </Navbar.Link>
        <Navbar.Link>
          <li className="font-sora font-semibold lg:mx-10">
            <a href="#Testimonials">Testimonials</a>
          </li>
        </Navbar.Link>
        <Navbar.Link>
          <li className="font-sora font-semibold lg:mx-10">
            <a href="#Plans">Memberships</a>
          </li>
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Collapse>
        <Navbar.CollapseItem><a href="#Home" className="font-sora font-semibold lg:mx-10">Home</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#Trainers" className="font-sora font-semibold lg:mx-10">Trainers</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#Programs" className="font-sora font-semibold lg:mx-10">Programs</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#Testimonials" className="font-sora font-semibold lg:mx-10">Testimonials</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#Plans" className="font-sora font-semibold lg:mx-10">Memberships</a></Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
