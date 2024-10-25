import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { fetchFarmers } from '../services/farmerService';

export default function HomeScreen({ navigation }) {
  // const fetchedFarmers = [{"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-11T07:34:29.760917+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "", "emailAddress": "", "farmerEducation": "Primary", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Single", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "Sam ", "fullname": "Sam  Ovonjo", "gender": 2, "householdSize": 8, "hubId": "87c1f34a-b611-4737-a807-3ed03acdc832", "hubName": "Trader A", "id": "0c403c10-87a3-11ef-be31-63e2f358302d", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Ovonjo", "levelOfEducation": 2, "maritalStatus": 1, "nationalIdNumber": "", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "", "plots": [], "primaryTelephone": "", "refugeeCountryOfOrigin": "", "subCounty": "", "village": "", "yearOfBirth": "1997"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-05T09:49:58.195126+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "", "emailAddress": "", "farmerEducation": "Primary", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Married", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "Oselo Peter Muhammad ", "fullname": "Oselo Peter Muhammad  Peter Muhammad ", "gender": 2, "householdSize": 15, "hubId": "b46143b1-b04e-4fae-8466-e3826c3f6ab0", "hubName": null, "id": "f841f170-82fe-11ef-b121-13418c2982ae", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Peter Muhammad ", "levelOfEducation": 2, "maritalStatus": 2, "nationalIdNumber": "", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "", "plots": [], "primaryTelephone": "", "refugeeCountryOfOrigin": "", "subCounty": "", "village": "", "yearOfBirth": "1960"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T12:25:23.247777+00:00", "dateOfContract": "2024-10-02", "dateOfRegistration": "2024-10-02", "dateUpdated": null, "disability": null, "district": "Mitooma ", "emailAddress": "", "farmerEducation": "Diploma", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Married", "farmerNextOfKinType": "", "farmerOwnsTelephone": "Yes", "firstname": "Namara ", "fullname": "Namara  Milton ", "gender": 2, "householdSize": 5, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": null, "id": "5b7d0600-80b9-11ef-8767-b1f5f9bfbc5c", "isDeleted": false, "isFarmerTelephone": 1, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Milton ", "levelOfEducation": 6, "maritalStatus": 2, "nationalIdNumber": "", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "Kitwe", "plots": [[Object]], "primaryTelephone": "0782316539", "refugeeCountryOfOrigin": "", "subCounty": "Rurehe ", "village": "kitwe", "yearOfBirth": "1952"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T08:34:32.87756+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": 10, "district": "", "emailAddress": "", "farmerEducation": "Primary", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "Yes", "farmerIsRefugee": "No", "farmerMaritalStatus": "Married", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "Mugume", "fullname": "Mugume Rodgers ", "gender": 2, "householdSize": 1, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": "Group A", "id": "68915ec0-8093-11ef-92a4-4136450c08e7", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Rodgers ", "levelOfEducation": 2, "maritalStatus": 2, "nationalIdNumber": "", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "", "plots": [[Object], [Object]], "primaryTelephone": "", "refugeeCountryOfOrigin": "", "subCounty": "", "village": "", "yearOfBirth": "1990"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T08:19:10.673624+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "", "emailAddress": "", "farmerEducation": "Vocational", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Single", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "Amanya ", "fullname": "Amanya  Cryton ", "gender": 2, "householdSize": 4, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": "Group A", "id": "663434e0-8093-11ef-a51e-e7719f024371", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Cryton ", "levelOfEducation": 5, "maritalStatus": 1, "nationalIdNumber": "CM971061033W0K ", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "", "plots": [[Object]], "primaryTelephone": "0704228501", "refugeeCountryOfOrigin": "", "subCounty": "", "village": "", "yearOfBirth": "28"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T08:14:48.069312+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "", "emailAddress": "", "farmerEducation": "Degree", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Married", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "Arinaitwe ", "fullname": "Arinaitwe  Ignatius ", "gender": 2, "householdSize": 6, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": null, "id": "c2bdaba0-8094-11ef-9258-7d8d130654c0", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Ignatius ", "levelOfEducation": 7, "maritalStatus": 2, "nationalIdNumber": "CM87106100PRHH", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "", "plots": [[Object]], "primaryTelephone": "0784836641", "refugeeCountryOfOrigin": "", "subCounty": "", "village": "", "yearOfBirth": "40"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T08:13:56.815136+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "", "emailAddress": "", "farmerEducation": "Primary", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Single", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "shabe", "fullname": "shabe rex", "gender": 2, "householdSize": 5, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": "Group A", "id": "7ed18470-8094-11ef-87c6-43aa933f054b", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "rex", "levelOfEducation": 2, "maritalStatus": 1, "nationalIdNumber": "", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "", "plots": [], "primaryTelephone": "", "refugeeCountryOfOrigin": "", "subCounty": "", "village": "", "yearOfBirth": "1990"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "rcs183b", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T08:13:29.645369+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "Mitooma", "emailAddress": "", "farmerEducation": "Degree", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Married", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "James ", "fullname": "James  Muhangi", "gender": 2, "householdSize": 5, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": "Group A", "id": "47ab2100-8093-11ef-8e77-d16fa33288c2", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Muhangi", "levelOfEducation": 7, "maritalStatus": 2, "nationalIdNumber": "hshsjsnskdkdn", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "Rurehe South", "plots": [[Object]], "primaryTelephone": "0775561802", "refugeeCountryOfOrigin": "", "subCounty": "Rurehe ", "village": "Rwanyabuzaana", "yearOfBirth": "1989"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T08:13:27.689054+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "mitooma ", "emailAddress": "", "farmerEducation": "Diploma", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Single", "farmerNextOfKinType": "", "farmerOwnsTelephone": "Yes", "firstname": "Vincent", "fullname": "Vincent Tumusiime ", "gender": 2, "householdSize": 7, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": "Group A", "id": "2d707850-8096-11ef-aae6-f1cb8dff9020", "isDeleted": false, "isFarmerTelephone": 1, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Tumusiime ", "levelOfEducation": 6, "maritalStatus": 1, "nationalIdNumber": "", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "Rurehe south ", "plots": [[Object]], "primaryTelephone": "0765702099", "refugeeCountryOfOrigin": "", "subCounty": "Rurehe ", "village": "Nyaruhita ", "yearOfBirth": "1999"}, {"agreeToTerms": 1, "alternateContactPersonName": "", "alternateContactPersonRelationToFarmer": "", "bankAccountName": "", "bankAccountNumber": "", "bankName": "", "code": "", "complianceThisYear": 0, "createdBy": null, "crops": [], "dateCreated": "2024-10-02T08:13:27.689049+00:00", "dateOfContract": "", "dateOfRegistration": "", "dateUpdated": null, "disability": null, "district": "", "emailAddress": "", "farmerEducation": "Diploma", "farmerGender": "Male", "farmerInitials": "", "farmerIsDisabled": "No", "farmerIsRefugee": "No", "farmerMaritalStatus": "Single", "farmerNextOfKinType": "", "farmerOwnsTelephone": "", "firstname": "Vincent ", "fullname": "Vincent  Tumusiime ", "gender": 2, "householdSize": 7, "hubId": "3bdb0900-36a3-4589-a607-a684f7bf8c54", "hubName": "Group A", "id": "4bdb3620-8093-11ef-aae6-f1cb8dff9020", "isDeleted": false, "isFarmerTelephone": null, "isRefugee": 2, "lastModifiedBy": null, "lastname": "Tumusiime ", "levelOfEducation": 6, "maritalStatus": 1, "nationalIdNumber": "", "nextOfKin": null, "nextOfKinName": "", "nextOfKinTelephone": "", "parish": "", "plots": [[Object]], "primaryTelephone": "0765702099", "refugeeCountryOfOrigin": "", "subCounty": "", "village": "", "yearOfBirth": "1999"}]


  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const loadFarmers = async () => {
      try {
        const farmerList = await fetchFarmers();
        console.log('farmerList', farmerList.data);
        setFarmers(farmerList.data);
      } catch (error) {
        // setFarmers(fetchFarmers);
        console.error(error);
      }
    };

    loadFarmers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Farmers</Text>
      <FlatList
        data={farmers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.farmerItem}
            onPress={() => navigation.navigate('FarmerDetails', { farmer: item })}
          >
            <Avatar
              size="medium"
              rounded
              title={item.firstname[0] + item.lastname[0]}
              overlayContainerStyle={{ backgroundColor: '#2E7D32' }}
              titleStyle={{ color: 'white' }}
            />
            <Text style={styles.farmerName}>{item.firstname} {item.lastname}</Text>
            <Text style={styles.chevron}> > </Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button to Add Farmer */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('ProfileFarmer')}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  cardContainer: {
    // flex: 1,
    backgroundColor: '#228B22',
    padding: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    // marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  farmerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  farmerName: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
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
    backgroundColor: '#2E7D32', // Green background for FAB
    width: 60, // Make the width and height the same
    height: 60, // Equal height for circular shape
    borderRadius: 30, // Half of the width/height to ensure a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow for FAB
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
  card: {
    height: 100,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    backgroundColor: '#FFC300',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    marginLeft: 5,
  },

});

