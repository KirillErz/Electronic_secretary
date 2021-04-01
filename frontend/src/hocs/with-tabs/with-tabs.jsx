import React, {PureComponent} from "react";

const withTabs = (Component) => {
  class withTabs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTabIndex: 0
      };
      this.handleTabClick = this.handleTabClick.bind(this);
      this.renderChildrenWithTabsApiAsProps = this.renderChildrenWithTabsApiAsProps.bind(this);
      this.renderActiveTabContent = this.renderActiveTabContent.bind(this);
    }

    handleTabClick(tabIndex) {
      this.setState({
        activeTabIndex: tabIndex
      });
    }

    renderChildrenWithTabsApiAsProps() {
      return React.Children.map(this.props.children, (child, index) => {
        return React.cloneElement(child, {
          classes:this.props.classes,
          onClick: this.handleTabClick,
          tabIndex: index,
          isActive: index === this.state.activeTabIndex
        });
      });
    }

    renderActiveTabContent() {
      const {children} = this.props;
      const {activeTabIndex} = this.state;
      if (!children[activeTabIndex]) {
        return null;
      }
      return children[activeTabIndex].props.children;
    }

    render() {
      return (
        <Component
          classes={this.props.classes}
          renderChildrenWithTabsApiAsProps={this.renderChildrenWithTabsApiAsProps}
          renderActiveTabContent={this.renderActiveTabContent}
        />
      );
    }
  }
  return withTabs;
};

export default withTabs;