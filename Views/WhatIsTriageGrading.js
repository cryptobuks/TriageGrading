import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

export default class WhatIsTriageGrading extends React.Component {
      static navigationOptions = {
		title: "WhatIsTriageGrading",
		header: null,
      };

      constructor(props) {
            super(props);
      }
      
      handleHomePress = () => {
            var {navigate} = this.props.navigation;
            navigate("Homepage", this.props);
      }

      render() {
            const letterGradeTableHeaders = ['Points', 'Letter Grade'];
            const letterGradeTableData = [
                  ['3', '2', '1', '0'],
                  ['A', 'C', 'D', 'F'],
            ];
            const letterGadeTableWidthArr = [120, 120];
            const gradingTableHeaders = ['Grade', 'Range', 'Width', 'T=100%'];
            const gradingTableData = [
                  ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'], //Grade
                  ['(17T/18, T]', '(8T/9, 17T/18]', '(5T/6, 8T/9]', '(7T/9, 5T/6]', '(13T/18, 7T/9]', '(2T/3, 13T/18]', '(3T/5, 2T/3]', '	(8T/15, 3T/5]', '(7T/15, 8T/15]', '(2T/5, 7T/15]', '(T/3, 2T/5]', '[0, T/3]'], //Range
                  ['T/18', 'T/18', 'T/18', 'T/18', 'T/18', 'T/18', 'T/15', 'T/15', 'T/15', 'T/15', 'T/15', 'T/3'], //Width
                  ['94% – 100%', '89% – 93%', '83% – 88%', '78% – 82%', '72% – 77%', '67% – 71%', '60% – 66%', '53% – 59%', '47% – 52%', '40% – 46%', '33% – 39%', '0% – 32%'] //T=100%
            ];
            const gradingTableWidthArr = [65, 120, 65, 115];
            return (
                  <View style={styles.backgroundView}>
                        <Text style={styles.header}> What Is Triage Grading? </Text>
                        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                              <Text style={styles.text}>The table below provides the mapping to letter grades. Although there is no integer mapping for B grades, they emerge as the average of perfect scores (A) and average scores  (C).</Text>
                              <Table style={styles.table} borderStyle={{borderColor: 'white'}} >
                                    <Row data={letterGradeTableHeaders} textStyle={styles.tableHeaders} widthArr={letterGadeTableWidthArr}></Row>
                                    <Cols data={letterGradeTableData} textStyle={styles.rowText} widthArr={letterGadeTableWidthArr}></Cols>
                              </Table>
                              <Text style={styles.text}>Final letter grades are assigned by interpolating points according to the table below, where T is the total number of points possible.</Text>
                              <Table style={styles.table} borderStyle={{borderColor: 'white'}}>
                                    <Row data={gradingTableHeaders} textStyle={styles.tableHeaders} widthArr={gradingTableWidthArr}></Row>
                                    <Cols data={gradingTableData} textStyle={styles.rowText} widthArr={gradingTableWidthArr}></Cols>
                              </Table>
                        </ScrollView>
                        <Button 
                              title='Home' 
                              onPress={this.handleHomePress} 
                              color='#000051'
                        />
                  </View>
            );
      };
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
            fontSize: 38,
		backgroundColor: '#000051',
		color: 'white',
	},
	text: {
            fontSize: 18,
            textAlign: 'center',
		color: 'white'
      },
      table: {
            margin: 8,
      },
      tableHeaders: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
      },
      rowText: {
            color: 'white',
            fontSize: 16,
      }
});