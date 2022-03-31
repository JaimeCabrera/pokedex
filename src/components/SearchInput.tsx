import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
          <Icon name="search-outline" color={'grey'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#f3f3f3',
    borderRadius: 32,
    height: 40,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
