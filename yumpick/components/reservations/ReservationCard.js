import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Typography } from "../styles/typography";
import { Colors } from "../styles/colors"; 

const ReservationCard = ({ restaurantName, dateTime, guestNumber, request, daysLeft, image }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Flexbox for layout */}
      <View style={styles.cardContent}>
        {/* First Grid: Image and Title */}
        <View style={styles.imageTitleContainer}>
          <Image source={image} style={styles.image} />
          <Text style={Typography.h3}>{restaurantName}</Text>
        </View>

        {/* Second Grid: Date, Time, Guests, Request */}
        <View style={styles.detailsContainer}>
        <Text style={[Typography.p, styles.reservationText]}>Date/Time: {dateTime}</Text>
        <Text style={[Typography.p, styles.reservationText]}>Guests: {guestNumber}</Text>
        <Text style={[Typography.p, styles.reservationText]}>Request: {request || 'N/A'}</Text>
        <Text style={[Typography.p, styles.reservationText]}>D-{daysLeft}</Text>
          {/* Invite Button */}
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteButtonText}>Invite</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Styles for the ReservationCard component
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',  // Flex layout to arrange image/title and details side by side
  },
  imageTitleContainer: {
    flex: 0.8,  // Take up 1/2 of the space
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 5,
    marginBottom: 10,
  },
  detailsContainer: {
    flex: 1,  // Take up 1/2 of the space
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  reservationText: {
    marginBottom: 8, 
  },
  detailsText: {
    marginBottom: 5,
  },
  daysText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginTop: 10,
  },
  inviteButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  inviteButtonText: {
    color: Colors.background,
    fontWeight: 'bold',
  },
});

export default ReservationCard;
