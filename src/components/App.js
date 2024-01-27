import React from 'react'

import Header from './Header'
import ContestList from './ContestList';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url)


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
    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        )
    }
    render() {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader} />
                <ContestList
                    contests={this.state.contests}
                    onContestClick={this.fetchContest}
                />
            </div>
        );
    }
};

export default App