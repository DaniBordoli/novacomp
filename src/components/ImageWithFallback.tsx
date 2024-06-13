import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageProps,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';

interface ImageWithFallbackProps extends ImageProps {
  uri: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  uri,
  style,
  ...props
}) => {
  const [imageUri, setImageUri] = useState<string>(uri);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(uri);
        if (response.status === 200) {
          setImageUri(uri);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    checkImage();
  }, [uri]);

  if (loading) {
    return (
      <View style={[styles.loader, style]}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <Image
      source={error ? require('../../assets/default.png') : {uri: imageUri}}
      style={style}
      onError={() => setError(true)}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default ImageWithFallback;
