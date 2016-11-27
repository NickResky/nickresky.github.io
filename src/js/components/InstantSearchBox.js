import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router";
import $ from "jquery"

@connect((store) => {
  return {
    info: store.list.info,
    elements: store.list.elements,
    sections: store.list.sections,
    fetching: store.list.fetching
  };
})
export default class InstantSearchBox extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
        query:          '',
        filteredData:   undefined
    }
  }
    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    doSearch(queryText) {
        if(queryText.length > 2) {
            console.log(queryText);
            var queryResult = [];
            _.forEach(this.props.sections, (section) => {
                _.forEach(section.entries, (entry) => {
                    if(entry.Title.toLowerCase().indexOf(queryText) != -1) {
                        queryResult.push(entry);
                    }
                });
            });
        }
        this.setState({
            query:queryText,
            filteredData: queryResult
        })
    }

    renderResults() {
        if (this.state.filteredData) {
            return (
                <SearchResults entries={this.state.filteredData}/>
            );
        }
    }

    render() {
        return (
            <div class="InstantSearchBox">
                <SearchBox query={this.state.query} doSearch={this.doSearch.bind(this)}/>
                {this.renderResults()}
            </div>
        )
    }
}
var SearchBox = React.createClass({
    doSearch:function(){
        var query= this.refs.searchInput.value;
        this.props.doSearch(query);
    },
    render:function(){
        return <input className="searchbar-edit" type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
    }
});

var SearchResults = React.createClass({
    render: function() {
        const EntriesList = this.props.entries.map((entry) => {
            return <li key={entry.id}>{entry.Title}</li>;
        })
        return (
            <ul>
                {EntriesList}
            </ul>
        );
    }
});
