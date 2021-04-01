
import React from 'react';
import {connect} from "react-redux";
import {getUserData} from '../../store/selectors'




const ScreenWelcome = (props) => {
    const {userData} = props;
    const mocName = `Антон Сергеевич`
    return (
        <React.Fragment>
            <div className="welcome">
                <h1 className="welcome__user">Добрый день, {userData.name}!</h1>
                <h3>Вас приветствует Ваш персональный электронный секретарь</h3>
                <p className="welcome__description">Электронный секретарь может расписывать массовые документы,<br></br> однотипные документы, документы которые приходят периодами по ключевым словам в документе и кратком содержании. Электронный секретарь, опираясь на ваше правило, создает подрезолюцию, указывает примечание к резолюции, ставит срок в рабочих днях исполнителю и создает отдельное поручение.</p>
                <p>Выберите действие в меню.</p>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    userData: getUserData(state)
  });

  export {ScreenWelcome};
  export default connect(mapStateToProps, null)(ScreenWelcome);