import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../utils/colors';
import {Avatar} from 'react-native-elements';

const PlaceHolder = () => {
  return (
    <Avatar
      size="small"
      squared
      source={null}
      renderPlaceholderContent={
        <FontAwesomeIcon icon={faUser} size={18} color="white" />
      }
      overlayContainerStyle={{
        backgroundColor: Colors.primary,
        borderRadius: 10,
      }}
      titleStyle={{color: 'white'}}
    />
  )
};

export default PlaceHolder
