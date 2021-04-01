import React from 'react';
import withTabs from "../../hocs/with-tabs/with-tabs";
import Tabs from "../tabs/tabs";
import Tab from "../tab/tab";
import FormRule from '../form-rule/form-rule';
import ScreenWelcome from '../screen-welcome/screen-welcome';
import Header from '../header/header';
import Сircles from '../../style/img/circles.png';
import HistoryApplications from '../history-applications/history-applications';
import Instruction from '../instruction/instruction';

const TabsWrapped = withTabs(Tabs);


const makeStyles = () => {
    return {
        nav: "main-nav",
        ul: "main-nav__list",
        li: "main-nav__item",
        liActive: "main-nav__item--active",
        link: "main-nav__link",
        formContainer: "main-page__content",
        formItem: "main-form__inner",
    }
};

const handleChangeMain = () => {
    document.querySelector(".main-top-line").style.setProperty('--sq-top', '226px')
  };
const handleChangeCreate = () => {
    document.querySelector(".main-top-line").style.setProperty('--sq-top', '336px')
  };
const handleChangeViev = () => {
    document.querySelector(".main-top-line").style.setProperty('--sq-top', '470px')
  };
const handleChangeInstruction = () => {
    document.querySelector(".main-top-line").style.setProperty('--sq-top', '606px')
  };

const UserPage = (props) => {
    const classes = makeStyles();
    return (
        <React.Fragment>
        <div className="main-page">
            <div className="main-line main-top-line main-botto-line">
            </div>
           <Header
            history={props.history}
           />
            <div className="main-page__wrapped">
                <TabsWrapped
                    classes={classes}
                >
                    <Tab
                        tabName={`Главная`}
                        onChange={handleChangeMain}
                    >
                        <ScreenWelcome/>
                    </Tab>
                    <Tab
                        tabName={<div>{`Создать`}<br />{`новое правило`}</div>}
                        onChange={handleChangeCreate}
                    >
                        <FormRule />
                    </Tab>
                    <Tab
                        tabName={<div>{`Просмотр`}<br />{`созданных правил`}</div>}
                        onChange={handleChangeViev}
                    >
                       <HistoryApplications/>
                    </Tab>
                    <Tab
                        tabName={`Инструкция`}
                        onChange={handleChangeInstruction}
                    >
                       <Instruction/>
                    </Tab>
                </TabsWrapped>
            </div>
        </div>
        </React.Fragment>
    )
}

export default UserPage;