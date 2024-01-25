import React from "react"

import Header from "./Header"
import ContestPreview from "./ContestPreview"

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: []
    }
    componentDidMount() {
        // timers, listeners, ajax requests
    }
    componentWillUnmount() {
        // clean timers liste
    }
    render() {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
};

export default App