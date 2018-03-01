import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Hyperlink from 'react-native-hyperlink';

export default class Credits extends React.Component {
      static navigationOptions = {
		title: "Credits",
		header: null,
      };
      
      constructor() {
            super();
      }

      handleHomePress = () => {
            var {navigate} = this.props.navigation;
            navigate("Homepage", this.props);
      }

      render() {
            return (
                  <View>
                        <View style={styles.backgroundView}>
                              <Text style={styles.header}>Credits</Text>
                              <Text style={styles.text}>This grading system is based on the grading philosophy of William Rapaport. </Text>
                              <Hyperlink linkDefault={ true }> 
                                    <Text style={styles.hyperlink}> https://www.cse.buffalo.edu/ </Text> 
                              </Hyperlink>
                        </View>
                        <Button
                              title="Home"
                              onPress={this.handleHomePress}
                              color='#000051'
                        />
                  </View>
            );
      }
}

const styles = StyleSheet.create({
	backgroundView: {
		width: '100%',
		height: '100%',
		backgroundColor: '#534bae',
	},
	header: {
		textAlign: 'center',
		paddingTop: 20,
		fontSize: 48,
		backgroundColor: '#000051',
		color: 'white',
      },	
      text: {
		height: 120,
		fontSize: 28,
            color: 'white',
            textAlign: 'center',
      },
      hyperlink: {
            height: 120,
		fontSize: 28,
		marginBottom: 0,
		marginLeft: 10,
            color: 'white',
            textAlign: 'center',
            textDecorationLine: 'underline',
      }
});

