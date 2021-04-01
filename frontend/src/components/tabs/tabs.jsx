import React from "react";

const Tabs = (props) => {
  const { classes, renderChildrenWithTabsApiAsProps, renderActiveTabContent } = props;
  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {renderChildrenWithTabsApiAsProps()}
        </ul>
      </nav>
      <aside className={classes.formContainer}>
        {/* <label className="user-form__label" for="userFormTitle">Электронный секретарь</label> */}
        <div className={classes.formItem} id="userFormTitle">
          {renderActiveTabContent()}
        </div>
      </aside>
    </React.Fragment>
  );
};


export default Tabs;