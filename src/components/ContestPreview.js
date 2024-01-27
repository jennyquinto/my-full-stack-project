import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContestPreview extends Component {
    render() {
        return (
            <div className='ContestPreview'>
                <div className='category-name'>
                    {this.props.categoryName}
                </div>
                <div className='contest-name'>
                    {this.props.contestName}
                </div>
            </div>
        )
    }
}
ContestPreview.propTypes = {
    categoryName: PropTypes.string.isRequired,
    constestName: PropTypes.string.isRequired,
}
export default ContestPreview
