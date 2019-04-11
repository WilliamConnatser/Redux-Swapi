import React from "react";
import {connect} from "react-redux";

import {CharacterList} from "../components";
import {fetchData} from "../actions/index";

class CharacterListView extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)
    }

    componentDidMount() {
        this
            .props
            .fetchData();
    }

    render() {
        if (this.props.fetching) {
            return <h2>Loading...</h2>
        }
        return (
            <div className="CharactersList_wrapper">
                <CharacterList characters={this.props.characters}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {fetching: state.charsReducer.fetching, error: state.charsReducer.error, characters: state.charsReducer.characters}
}

export default connect(mapStateToProps, {fetchData})(CharacterListView);
