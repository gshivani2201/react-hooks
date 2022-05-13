import React from 'react'
import CompF from './CompF'
import {useContext} from 'react'
import { UserContext, ChannelContext } from '../App.js'

function CompE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default CompE