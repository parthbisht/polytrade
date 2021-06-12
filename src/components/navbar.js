import React from 'react'
import { Navbar, NavbarBrand } from "shards-react";


export default function navbar() {
    return (
        <div>
              <Navbar type="dark" theme="dark" expand="md">
             <NavbarBrand >Dashboard</NavbarBrand>
             </Navbar>
        </div>
    )
}
