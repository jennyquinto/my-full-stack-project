import React from "react"

import Header from "./Header"
import ContestPreview from "./ContestPreview"

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: this.props.initialContests
    }
    componentDidMount() {

    }
    componentWillUnmount() {
        // clean timers liste
    }
    render() {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader} />
            </div>
        );
    }
};

export default App