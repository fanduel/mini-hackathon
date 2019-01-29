import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const playerDataUrl = "https://gist.github.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Welcome to the Hackathon</Text>
        <Text style={styles.subHeader} >PlayerData url:</Text>
        <Text style={styles.content} >{playerDataUrl}</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 40,
    fontSize: 24,
    color: '#404040',
  },
  subHeader: {
    marginBottom: 10,
    fontSize: 20,
    color: '#404040',
  },
  content: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16,
    color: '#404040',
  }
});
