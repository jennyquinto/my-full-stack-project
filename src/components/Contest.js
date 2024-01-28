import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contest extends Component {
    render() {
        return (
            <div className='Contest'>
                {this.props.id}
            </div>
        )
    }
}

Contest.proptypes = {
    id: PropTypes.string.isRequired
}

export default Contest
