import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={localStyles.activityContainer}>
      <ActivityIndicator size={60} color="grey" />
      <Text style={{marginTop: 5, fontSize: 20}}>Loading....</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
