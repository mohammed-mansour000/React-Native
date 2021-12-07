import { StyleSheet } from 'react-native';

export const GLOBAL_STYLES = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        padding: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        color: '#111'
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    }
  });

  export const images = {
      ratings: {
          '1': require('../assets/rating-1.png'),
          '2': require('../assets/rating-2.png'),
          '3': require('../assets/rating-3.png'),
          '4': require('../assets/rating-4.png'),
          '5': require('../assets/rating-5.png'),
      }
  }