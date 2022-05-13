import React from 'react'
import {ChannelContext, UserContext} from '../App.js'

function CompF() {
  return (
    <div>
        <UserContext.Consumer>
            {user => {
                return (
                    <ChannelContext.Consumer>
                        { channel => {
                            return (
                                <div>User context value {user} & Channel context value {channel}</div>
                            )
                        }}
                    </ChannelContext.Consumer>
                    )
                }}
        </UserContext.Consumer>
    </div>
  )
}

export default CompF