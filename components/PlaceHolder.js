import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Colors} from '../utils/colors'
import {Avatar} from 'react-native-elements'

const PlaceHolder = (icon = 18, avatarSize = 'small') => {
  return (
    <Avatar
      size={icon.avatarSize}
      squared
      source={null}
      renderPlaceholderContent={
        <FontAwesomeIcon icon={faUser} size={icon.iconSize} color={Colors.white} />
      }
      overlayContainerStyle={{
        backgroundColor: Colors.primary,
        borderRadius: 10,
      }}
      titleStyle={{color: 'white'}}
    />
  )
}

export default PlaceHolder
