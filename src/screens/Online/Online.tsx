import React from 'react';
import { StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';

export const Online: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pdf
        source={{
          uri: 'https://www.nwcg.gov/sites/default/files/publications/pms461.pdf',
          cache: true,
          expiration: 24 * 3600,
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
  },
});
