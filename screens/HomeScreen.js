import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCalendarAlt, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {Avatar} from 'react-native-elements'
import {fetchFarmers} from '../services/farmerService'

export default function HomeScreen({navigation}) {
  const [farmers, setFarmers] = useState([])

  useEffect(() => {
    const loadFarmers = async () => {
      try {
        const farmerList = await fetchFarmers()
        setFarmers(farmerList.data)
      } catch (error) {
        console.error(error)
      }
    }

    loadFarmers()
  }, [])
  const date = new Date().toLocaleDateString('en-GB')
  return (
    <View style={styles.container}>
      <View style={styles.statsCard}>
        <View>
          <Text style={styles.title}>No of Farmers profiled</Text>
          <Text style={styles.number}>{farmers.length}</Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              alignSelf: 'flex-end',
              marginVertical: 5,
            }}>
            Last Profiled on:
          </Text>
          <View style={styles.date}>
            <FontAwesomeIcon icon={faCalendarAlt} size={15} color="#fff" />
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: '#fff',
                marginLeft: 5,
              }}>
              {date}
            </Text>
          </View>
        </View>
      </View>

      {/*TODO: Add search bar*/}
      {/*<View style={styles.searchBar}>*/}
      {/*  <Text>Search Farmer</Text> */}
      {/*</View>*/}

      <Text style={styles.title}>All Farmers</Text>
      <FlatList
        data={farmers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.farmerItem}
            onPress={() =>
              navigation.navigate('FarmerDetails', {farmer: item})
            }>
            <Avatar
              size="medium"
              squared
              title={item.firstname[0] + item.lastname[0]}
              overlayContainerStyle={{
                backgroundColor: '#164c33',
                borderRadius: 10,
              }}
              titleStyle={{color: 'white'}}
            />
            <View style={styles.farmerDetails}>
              <Text style={styles.farmerName}>
                {item.firstname} {item.lastname}
              </Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('ProfileFarmer')}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    marginBottom: 20,
  },
  date: {
    backgroundColor: '#ffa600',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
  number: {
    color: '#000000B8',
    fontSize: 40,
    fontWeight: '700',
  },
  searchBar: {
    marginVertical: 10,
  },
  farmersList: {
    marginTop: 20,
  },
  farmerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    margin: 5,
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: '#ffffff',
    // borderRadius: 10,
    // padding: 10,
    // marginVertical: 5,
    // overflow: 'hidden',
    // borderColor: '#000',
    // borderWidth:0.5,
    // elevation: 2,
  },
  farmerName: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  farmerDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevron: {
    marginLeft: 'auto',
    fontSize: 18,
    color: 'black',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2E7D32',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
})
