import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Colors} from '../utils/colors'
import {View, StyleSheet} from 'react-native';

const PlaceHolder = ({iconSize, avatarSize}) => {
  return (
    <View style={[styles.avatar, { width: avatarSize, height: avatarSize }]}>
      <FontAwesomeIcon icon={faUser}  size={iconSize} color={Colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlaceHolder
