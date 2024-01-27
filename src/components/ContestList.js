import React from 'react'
import PropsType from 'prop-types'

import ContestPreview from './ContestPreview'

const ContestList = ({ contests }) => {
    return (
        <div className='ContestList'>
            {contests.map(contest =>
                <ContestPreview key={contest.id} {...contest} />
            )}
        </div>
    )
}
ContestList.prototype = {
    contests: PropsType.array
}
export default ContestList
