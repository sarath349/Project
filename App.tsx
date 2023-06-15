import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const TestApp = () => {
  const [director, setDirector] = useState(null);
  const [mName, setMName] = useState(null);
  const [data, setData] = useState([]);

  const handleButton = () => {
    if (director?.length && mName?.length) {
      const obj = {
        director: director,
        movie: mName,
      };
      data.push(obj);
      setData(data);
      setDirector(null);
      setMName(null);
    }
  };
  const handleRemove = index => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dmContainer}>
        <View style={styles.insideContainer}>
          <TextInput
            placeholder="Director Name"
            value={director}
            onChangeText={txt => setDirector(txt)}
          />
        </View>
        <View style={styles.insideContainer}>
          <TextInput
            placeholder="Movie Name"
            value={mName}
            onChangeText={txt => setMName(txt)}
          />
        </View>

        <TouchableOpacity
          style={styles.insideContainer}
          onPress={() => handleButton()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        extraData={data}
        ListHeaderComponent={() => {
          return (
            <View style={[styles.dmContainer, {backgroundColor: '#EFF094'}]}>
              <View style={styles.insideContainer}>
                <Text>Director</Text>
              </View>
              <View style={styles.insideContainer}>
                <Text>Movie</Text>
              </View>
              <View style={styles.insideContainer}></View>
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <View style={styles.dmContainer}>
              <View style={styles.insideContainer}>
                <Text>{item.director}</Text>
              </View>
              <View style={styles.insideContainer}>
                <Text>{item.movie}</Text>
              </View>
              <TouchableOpacity
                style={styles.insideContainer}
                onPress={() => handleRemove(index)}>
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};
export default TestApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  textinputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  insideContainer: {
    borderRightWidth: 1,
    width: '33%',
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: 'right',
  },
});
