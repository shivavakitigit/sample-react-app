import React from "react";
import { Link } from "react-router-dom";

export default function DefaultPage() {
  return (
    <div>
      DefaultPage
      <nav>
        <ul>
          <li>
            <Link to="/manatee">Manatee</Link>
          </li>
          <li>
            <Link to="/narwhal">Narwhal</Link>
          </li>
          <li>
            <Link to="/whale">Whale</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
