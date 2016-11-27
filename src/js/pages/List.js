import React from "react";
import { connect } from "react-redux";
import { fetchList } from "./../actions/listActions";


import SectionComponent from "../components/SectionComponent";

@connect((store) => {
  return {
    listInfo: store.list.info,
    elements: store.list.elements,
    sections: store.list.sections,
    fetching: store.list.fetching
  };
})
export default class List extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      listId: props.params.listId,
    }
  }
 componentWillMount() {
    this.props.dispatch(fetchList(this.props));
  }

  componentWillUnmount() {
    //TodoStore.removeListener("change", this.getTodos);
  }

  componentWillReceiveProps(newProps) {
    this.state.listId = newProps.params.listId
  }



  render() {
    const SectionComponents = this.props.sections.map((currentSection) => {
      return <SectionComponent key={currentSection.section.id} {...currentSection} {...this.props} />
    });

    return (
        <div>
            {this.props.listInfo &&
                <div>
                    <div class="list-page-header">
                        <h1>{this.props.listInfo.name}</h1>
                    </div>
                    <div class="list-page-content">
                        {SectionComponents}
                    </div>
                </div>
            }
        </div>
    );
  }
}
