import React from "react";
import CloseIcon from "@material-ui/icons/Close";

function Sidebar({mode}) {

    let url="#";

  return (
    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <CloseIcon className="sidenav__brand-close" />
      </div>

      <div className="logo">Logo</div>

      <div className="list__wrap">
        {mode === "app" ? (
          <ul className={mode === "app" ? "appnav__list-show" : ""}>
            <li className="appnav__list-item"> <a href={url}>Entry1</a> </li>
            <li className="appnav__list-item"> <a href={url}>Entry2</a> </li>
            <li className="appnav__list-item"> <a href={url}>Entry3</a> </li>
            <li className="appnav__list-item"> <a href={url}>Entry4</a> </li>
            <li className="appnav__list-item"> <a href={url}>Entry5</a> </li>
          </ul>
        ) : (
          <ul className="adminnav__list">
            <li className="adminnav__list-item"><a href={url}>AdminEntry1</a></li>
            <li className="adminnav__list-item"><a href={url}>AdminEntry2</a></li>
            <li className="adminnav__list-item"><a href={url}>AdminEntry3</a></li>
            <li className="adminnav__list-item"><a href={url}>AdminEntry4</a></li>
            <li className="adminnav__list-item"><a href={url}>AdminEntry5</a></li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
