import React from "react"

import Header from "./Header"

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests"
    }
    componentDidMount(){
        // timers, listeners, ajax requests
    }
    componentWillUnmount(){
        // clean timers liste
    }
    render() {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader} />
                <div className="content">
                    ...
                </div>
            </div>
        );
    }
};

export default App