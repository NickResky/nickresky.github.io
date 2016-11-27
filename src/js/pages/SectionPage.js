import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchList } from "./../actions/listActions";
import { Link } from "react-router";



@connect((store) => {
  return {
    info: store.list.info,
    elements: store.list.elements,
    sections: store.list.sections,
    fetching: store.list.fetching
  };
})
export default class SectionPage extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
        listId: props.params.listId,
        sectionId: props.params.sectionId,
        entryId: props.params.entryId,
        section: undefined,
        entry: undefined,
    }
  }
  componentWillMount() {
      this.props.dispatch(fetchList());
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    //TodoStore.removeListener("change", this.getTodos);
  }

  setSection() {
    this.state.section = _.find(this.props.sections, (s) => s.section.shortId === this.state.sectionId);
  }

  setEntry() {
    if (!this.state.entryId && this.state.section.entries.length > 0) {
        this.state.entry = this.state.section.entries[0];
    }
    else {
        this.state.entry =  _.find(this.state.section.entries, (e) => e.shortId === this.state.entryId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state.sectionId !== newProps.params.sectionId) {
        this.props.dispatch(fetchList());
        this.state.sectionId = newProps.sectionId;
        this.state.entryId = newProps.entryId;
    }
    else if (this.state.entryId !== newProps.params.entryId) {
        this.state.entryId = newProps.params.entryId;
    }
  }

  render() {
    let EntryList = undefined;
    if (this.props.sections.length > 0) {
        this.setSection();
        this.setEntry();
        EntryList = this.state.section.entries.map((entry) => {
            return (
                <li key={entry.uuid} class="zenkit-section-page-entries-list-entry">
                    <Link to={`lists/${this.state.listId}/sections/${this.state.sectionId}/entries/${entry.shortId}`}>
                        {entry.Title}
                    </Link>
                </li>
            );
        });
    }

    return (
        <div>
            {this.state.section &&
            <div class="zenkit-section-page-container">
                <div class="zenkit-section-page-navigation">
                    <div class="zenkit-section-page-navigation-header">
                        <h3>{this.state.section.section.name}</h3>
                    </div>
                    <ul class="zenkit-section-page-entries-list">
                        {EntryList}
                    </ul>
                </div>
                {this.state.entry &&
                <div class="zenkit-section-page-entry-container">
                    <div class="zenkit-section-page-entry-header">
                        <h3>{this.state.entry.Title}</h3>
                        <div class={"zenkit-section-page-entry-content"}>
                            <div dangerouslySetInnerHTML={{__html: this.state.entry.Description}}>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
            }
        </div>
    );
  }
}
