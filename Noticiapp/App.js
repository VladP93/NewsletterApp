import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { map } from 'lodash';
import { getNewsApi } from './src/api/news';
import New from './src/components/New';

export default function App() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNewsApi().then((response) => {
      console.log(response);
      setNews(response);
    });
  }, []);

  if (!news) return null;

  return (
    <SafeAreaView>
      <Text style={styles.title}>Últimas noticias</Text>
      <ScrollView style={styles.scrollView}>
        {map(news, (newData, index) => (
          <New key={index} newData={newData} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10,
  },
  scrollView: {
    height: '100%',
  },
});
