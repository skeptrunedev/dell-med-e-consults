import { Key } from "react";

export interface NavbarProps {
  active_page: string,
}

export interface NavItem {
  name: String,
  link: String,
  key: Key,
}
