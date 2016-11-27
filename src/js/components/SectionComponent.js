import React from "react";
import { Link } from "react-router";

import Entry from "./Entry"

export default class SectionComponent extends React.Component {
  constructor(props) {
    super();
    this.props = props
    this.name = props.section.name
    this.entries = props.entries
    this.state = {
      collapsed: true
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const entryList = this.entries.map((entry) => {
      return (
        <li key={entry.uuid}>
          <Link to={`lists/${this.props.section.shortId}/sections/${this.props.section.shortId}/entries/${entry.shortId}`}>{entry.Title}</Link>
        </li>
      );
    });
    const collapsedClass = this.state.collapsed ? "collapse" : "";
    const iconClass = !this.state.collapsed ? "icon-open" : "";

    return(
      <div class="zenkit-section-component">
        <div class="zenkit-section-component-header">
          <Link to={`lists/${this.props.section.shortId}/sections/${this.props.section.shortId}`}>{this.name}</Link>
        </div>
        <ul>{entryList}</ul>
      </div>
    );
  }
}
