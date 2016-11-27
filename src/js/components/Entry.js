import React from "react";
import $ from "jquery"

export default class Entry extends React.Component {
  constructor(props) {
    super();
    this.props = props
    this.title = props.Title
    this.description = props.Description
    this.state = {
      collapsed: true
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const collapsedClass = this.state.collapsed ? "collapse" : "";
    const iconClass = !this.state.collapsed ? "icon-open" : "";

    return(
      <div class="zenkit-section-entry-container">
        <div class="zenkit-section-entry-header">
          <span class={"fa fa-chevron-right zenkit-toggle-icon " + iconClass} onClick={this.toggleCollapse.bind(this)}></span>
          <span>{this.title}</span>
        </div>
        <div class={"zenkit-section-entry-content " + collapsedClass}>
          <div dangerouslySetInnerHTML={{__html: this.description}}></div>
        </div>
      </div>
    );
  }
}
