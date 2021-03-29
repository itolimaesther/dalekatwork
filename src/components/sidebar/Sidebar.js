import React from "react";
import CloseIcon from "@material-ui/icons/Close";

function Sidebar({mode}) {
  return (
    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <CloseIcon className="sidenav__brand-close" />
      </div>

      <div className="logo">Logo</div>

      <div className="list__wrap">
        {mode === "app" ? (
          <ul className={mode === "app" ? "appnav__list-show" : ""}>
            <li className="appnav__list-item">Entry1</li>
            <li className="appnav__list-item">Entry2</li>
            <li className="appnav__list-item">Entry3</li>
            <li className="appnav__list-item">Entry4</li>
            <li className="appnav__list-item">Entry5</li>
          </ul>
        ) : (
          <ul className="adminnav__list">
            <li className="adminnav__list-item">AdminEntry1</li>
            <li className="adminnav__list-item">AdminEntry2</li>
            <li className="adminnav__list-item">AdminEntry3</li>
            <li className="adminnav__list-item">AdminEntry4</li>
            <li className="adminnav__list-item">AdminEntry5</li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
