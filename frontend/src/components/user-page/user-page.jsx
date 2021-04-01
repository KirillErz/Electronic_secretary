import React from 'react';
import Login from '../login/login'
import withTabs from "../../hocs/with-tabs/with-tabs";
import Tabs from "../tabs/tabs";
import Tab from "../tab/tab";
import Registration from '../registration/registration';
import Header from '../header/header';
import Footer from '../footer/footer';

const TabsWrapped = withTabs(Tabs);

const makeStyles = () => {
    return {
        nav: "user-nav",
        ul: "user-nav__list",
        li: "user-nav__item",
        liActive: "user-nav__item--active",
        link: "user-nav__link",
        formContainer: "user-form",
        formItem: "user-form__inner",
    }
};

const UserPage = (props) => {
    const classes = makeStyles();
    const [value, setValue] = React.useState(0);
    const handleChangeExit = () => {
        var testElements = document.getElementById('line');
        //document.getElementsByClassName('top-line')[0].style.top = "100px";
        document.querySelector(".top-line").style.setProperty('--sq-top', '367px')
        //testElements.setAttribute("top-line", "background-color: red;");
        //testElements.style.backgroundColor = 'red';
        //let computedStyle = window.getComputedStyle(testElements, '::before');

        //testElements.innerHTML = "line:before {top: 100px;}";
        //let stylesheet = testElements.sheet;
        //stylesheet.insertRule('line:before { top: 100px; }', 0);
        //console.log(testElements.style.backgroundColor);

      };
      const handleChangeRegistr = () => {
        var testElements = document.getElementById('line');
        //document.getElementsByClassName('top-line')[0].style.top = "100px";
        document.querySelector(".top-line").style.setProperty('--sq-top', '221px')
        //testElements.setAttribute("top-line", "background-color: red;");
        //testElements.style.backgroundColor = 'red';
        //let computedStyle = window.getComputedStyle(testElements, '::before');

        //testElements.innerHTML = "line:before {top: 100px;}";
        //let stylesheet = testElements.sheet;
        //stylesheet.insertRule('line:before { top: 100px; }', 0);
        //console.log(testElements.style.backgroundColor);

      };
    return (
        <div className="user-page">
            <div id="line" className="line top-line botto-line">
            </div>
            <Header
                history={props.history}
            />
            <div className="user-page__content">
                <TabsWrapped
                    classes={classes}
                >
                    <Tab
                        tabName={`Вход`}
                        onChange={handleChangeExit}
                    >
                        <Login />
                    </Tab>
                    <Tab
                        tabName={`Регистрация`}
                        onChange={handleChangeRegistr}
                    >
                        <Registration />
                    </Tab>
                </TabsWrapped>
            </div>
            <Footer/>
        </div>
    )
}

export default UserPage;