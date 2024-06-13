import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import ImageWithFallback from '../components/ImageWithFallback';
import styles from '../styles/ListScreenStyles';

interface Element {
  id: string;
  name: string;
  avatar: string;
}

const ListScreen: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://6172cfe5110a740017222e2b.mockapi.io/elements',
        );
        const data = await response.json();
        const updatedData = data.map((item: Element) => ({
          ...item,
          avatar: item.avatar.replace(
            'https://cloudflare-ipfs.com',
            'https://ipfs.io',
          ),
        }));
        setElements(updatedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={elements}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.element}>
            <ImageWithFallback uri={item.avatar} style={styles.avatar} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
