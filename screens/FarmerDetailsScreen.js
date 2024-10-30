import React from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import PlaceHolder from '../components/PlaceHolder';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Colors} from '../utils/colors';

export default function FarmerDetailsScreen({route, navigation}) {
  const {farmer} = route.params
  return (
    <View style={styles.container}>

      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <PlaceHolder avatarSize={60} iconSize={40} />
          <View style={{marginHorizontal: 30}}>
            <Text style={{fontWeight: 'bold', fontSize:18}}>
             {farmer.firstName} {farmer.lastName}
            </Text>
            <Text>Farmer Code: {farmer.code || 'N/A'}</Text>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faPhone} size={14} color={Colors.grey} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>Gender:</Text>
            <Text style={styles.detailValue}>{farmer.gender}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>Age:</Text>
            <Text style={styles.detailValue}>{farmer.age || 34}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>District:</Text>
            <Text style={styles.detailValue}>{farmer.district || 'Arua'}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>Gender:</Text>
            <Text style={styles.detailValue}>
              {farmer.nin || 'GF19754433457888'}
            </Text>
          </View>
        </View>

        <Button
          title="Edit"
          onPress={() => navigation.navigate('EditFarmer', {farmer})}
        />
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={() => {}}>
        <Text style={styles.deleteButtonText}>Delete Farmer Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  detailsContainer: {
    marginVertical: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  detailValue: {
    color: '#555',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
