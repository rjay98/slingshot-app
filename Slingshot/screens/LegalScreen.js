import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

export default class LegalScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Legal Policy</Text>
        </View>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <Text style={styles.textParagraph}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel facilisis volutpat. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Senectus et netus et malesuada fames. Non tellus orci ac auctor augue mauris augue neque gravida. Quisque non tellus orci ac. Id aliquet risus feugiat in ante metus dictum at. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Cras sed felis eget velit aliquet sagittis id consectetur. Sit amet luctus venenatis lectus magna fringilla. Et odio pellentesque diam volutpat commodo sed egestas. Praesent elementum facilisis leo vel. Sed id semper risus in hendrerit.
          </Text>
          <Text style={styles.textParagraph}>
            Sollicitudin aliquam ultrices sagittis orci a. Eget sit amet tellus cras adipiscing. Consequat id porta nibh venenatis cras sed felis eget. Mauris ultrices eros in cursus. Consequat interdum varius sit amet mattis vulputate enim. Vitae tempus quam pellentesque nec. Quisque non tellus orci ac auctor augue mauris augue. Faucibus purus in massa tempor nec. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Leo vel fringilla est ullamcorper eget. Egestas sed sed risus pretium quam vulputate dignissim. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Arcu non sodales neque sodales ut etiam sit. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dui ut ornare lectus sit amet est placerat in egestas. Ut placerat orci nulla pellentesque dignissim enim sit amet. Neque egestas congue quisque egestas diam in arcu. Sit amet massa vitae tortor condimentum lacinia.
          </Text>
          <Text style={styles.textParagraph}>
            A condimentum vitae sapien pellentesque habitant. Habitasse platea dictumst quisque sagittis purus sit amet. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Cras semper auctor neque vitae tempus quam pellentesque. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Enim nec dui nunc mattis. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Arcu odio ut sem nulla pharetra diam. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Aliquam nulla facilisi cras fermentum odio. Integer quis auctor elit sed vulputate mi sit amet mauris.
          </Text>
          <Text style={styles.textParagraph}>
            Morbi leo urna molestie at. Erat pellentesque adipiscing commodo elit. Ultricies mi quis hendrerit dolor magna eget est. Cras pulvinar mattis nunc sed blandit. Et netus et malesuada fames ac. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Curabitur vitae nunc sed velit dignissim. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Urna porttitor rhoncus dolor purus non enim praesent elementum.
          </Text>
          <Text style={styles.textParagraph}>
            Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Faucibus purus in massa tempor nec feugiat nisl pretium. Malesuada fames ac turpis egestas maecenas pharetra convallis. Et molestie ac feugiat sed. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nisl condimentum id venenatis a condimentum vitae sapien. Aliquam faucibus purus in massa tempor nec. Rhoncus est pellentesque elit ullamcorper dignissim cras. Cras semper auctor neque vitae tempus quam pellentesque. Magna sit amet purus gravida. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Nulla aliquet enim tortor at auctor. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus.
          </Text>
          <Text style={{marginBottom: 200}}> </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: 100,
    backgroundColor: '#1976d2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { height: 2 }
  },
  contentContainer: {
    height: '100%',
  },
  title: {
    color: '#fff',
    marginTop: 30,
    fontSize: 25,
  },
  textParagraph: {
    marginTop: 20
  }
});
