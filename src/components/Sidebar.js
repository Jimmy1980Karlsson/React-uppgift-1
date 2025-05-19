import React from "react";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#task2">Uppgift 2</a></li>
        <li><a href="#task3">Uppgift 3</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
