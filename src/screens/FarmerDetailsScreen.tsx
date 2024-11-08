import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import PlaceHolder from '../components/PlaceHolder'
import {faPen, faPhone, faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {Colors} from '../utils/colors'
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {FarmerFormData} from '../utils/types.ts';


interface FarmerDetailsScreenProps {
  route: RouteProp<{ params: { farmer: FarmerFormData } }, 'params'>;
  navigation: NavigationProp<any>;
}

const FarmerDetailsScreen: React.FC<FarmerDetailsScreenProps> = ({route, navigation} )=> {
  const deleteFarmer = async (id: number) => {
    try {
      const response = await fetch('http://10.0.2.2:3001/api/farmer/' + id, {
        method: 'DELETE',
      })
      if (response.ok) {
        navigation.goBack()
      } else {
        console.error(
          'Failed to delete farmer. Server responded with status:',
          response.status,
        )
      }
    } catch (error) {
      console.error('Error deleting farmer...', error)
    }
  }

  const {farmer} = route.params

  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <PlaceHolder avatarSize={60} iconSize={40} />
          <View style={{marginHorizontal: 30}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18, color: Colors.black}}>
              {farmer.firstName} {farmer.lastName}
            </Text>
            <Text>Farmer Code: {farmer.farmerCode || 'N/A'}</Text>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faPhone} size={14} color={Colors.grey} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('Edit Farmer Details', {farmer})
            }>
            <FontAwesomeIcon icon={faPen} color="white" size={16} />
          </TouchableOpacity>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>Gender:</Text>
            <Text style={styles.detailValue}>{farmer.gender}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>Age:</Text>
            <Text style={styles.detailValue}>{farmer.dateOfBirth || 'N/A'}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>District:</Text>
            <Text style={styles.detailValue}>{farmer.district || 'N/A'}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailLabel}>Gender:</Text>
            <Text style={styles.detailValue}>{farmer.nin || 'N/A'}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteFarmer(farmer.id)}>
        <FontAwesomeIcon icon={faTrash} color="white" size={16} />
        <Text style={styles.deleteButtonText}>Delete Farmer Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FarmerDetailsScreen

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
    marginVertical: 30,
  },
  editButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: Colors.primary,
    padding: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
})
