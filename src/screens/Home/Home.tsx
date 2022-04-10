import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '@navigation/routes';

export const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RouteParams, 'HOME'>>();

  const navigateToLocal = () => {
    navigation.navigate('LOCAL');
  };

  const navigateToOnline = () => {
    navigation.navigate('ONLINE');
  };

  const navigateToDownloadToSave = () => {
    navigation.navigate('ONLINE_DOWNLOAD');
  };

  return (
    <View style={styles.container}>
      <Button title="Local PDF" onPress={navigateToLocal} />
      <Button title="Online PDF" onPress={navigateToOnline} />
      <Button title="Download to Local" onPress={navigateToDownloadToSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  pdf: {
    flex: 1,
  },
});
