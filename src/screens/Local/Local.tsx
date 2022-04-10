import React from 'react';
import { StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';

export const Local: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pdf
        source={{
          uri: 'bundle-assets://pms461.pdf',
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
