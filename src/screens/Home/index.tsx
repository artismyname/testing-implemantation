import React, { useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function Home({ navigation }: any) {
  const [items] = React.useState(
    new Array(20).fill(null).map((_, idx) => idx + 1)
  );

  const onOpacityPress = (item: any) => navigation.navigate('Details', item);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>List of numbers from 1 to 20</Text>
      <FlatList
        keyExtractor={(_, idx) => `${idx}`}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onOpacityPress(item)}
            style={styles.row}
          >
            <Text>Item number {item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}