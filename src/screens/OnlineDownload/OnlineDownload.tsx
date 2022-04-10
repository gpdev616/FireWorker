import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';

export const OnlineDownload: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const directoryPath = Platform.select({
    ios: RNFS.TemporaryDirectoryPath,
    android: RNFS.DownloadDirectoryPath,
  });
  const filePath = `${directoryPath}/pms461.pdf`;

  useEffect(() => {
    RNFS.exists(filePath).then(exist => {
      if (exist) {
        setDownloaded(true);
      } else {
        downloadFile();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadFile = () => {
    const operation = RNFS.downloadFile({
      fromUrl:
        'https://www.nwcg.gov/sites/default/files/publications/pms461.pdf',
      toFile: filePath,
    });
    operation.promise.then(result => {
      if (result.statusCode === 200) {
        setDownloaded(true);
      }
    });
  };

  return (
    <View style={styles.container}>
      {downloaded ? (
        <Pdf
          source={{
            uri: filePath,
          }}
          style={styles.pdf}
        />
      ) : null}
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
