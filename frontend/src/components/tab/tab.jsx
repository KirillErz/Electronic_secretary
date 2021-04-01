import React, {PureComponent} from "react";

export default class Tab extends PureComponent {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.tabIndex);
    this.props.onChange();
  }

  render() {
    return (
        <li onClick={this.handleTabClick} className={`${this.props.classes.li} ${this.props.isActive ? this.props.classes.liActive : ``}`}>
            <a
                className={this.props.classes.link}>
                {this.props.tabName}
            </a>
        </li>
    );
  }
}