import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Homepage extends React.Component {
	//React doesn't currently work with Localhost
	//Your IP here
	ip = "192.168.1.5";
	static navigationOptions = {
		title: "Homepage",
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			numberOfAssignments: "",
			overallGrade: "",
			totalPoints: "",
			grade: 3,
		};
		this.componentDidMount();
	}

	readJSON(res) {
		this.setState({
			numberOfAssignments: res['numberOfAssignments'],
			overallGrade: res['overallGrade'],
			totalPoints: res['totalPoints'],
		});
	}

	componentDidMount() {
		try {
			const myRequest = new Request('http://' + this.ip + '/TriageGrading/Controllers/HomepageController.php', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-tType': 'application/json',
				},
				body: JSON.stringify ({
					'command': 'getInfo',
				})
			});
			fetch(myRequest)
				.then((response) => response.json())
					.then((res) => {
						this.readJSON(res);
					})
		}
		catch (error) {
			window.alert("There was an error trying to obtain Information");
		}
	}

	handleSubmitNewAssignmentPress = () => {
		try {
			const myRequest = new Request('http://' + this.ip + '/TriageGrading/Controllers/HomepageController.php', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-tType': 'application/json',
				},
				body: JSON.stringify ({
					'command': 'calculateGrade',
					'grade' : this.state.grade,
				})
			});
			fetch(myRequest)
				.then(() => {
					this.componentDidMount();
				});
		}
		catch (error) {
			window.alert("There was an error when trying to add new assignment");
		}
	}

	handleWhatIsTriageGradingPress = () => {
		var {navigate} = this.props.navigation;
		navigate("WhatIsTriageGrading", this.state);
	}

	handleCreditsPress = () => {
		var {navigate} = this.props.navigation;
		navigate("Credits", this.state);
	}

	render() {
		return (
			<View style={styles.backgroundView}>
				<Text style={styles.header}>Triage Grading</Text>
				<Text style={styles.textLabel}>Current Overall Grade: {this.state.overallGrade}</Text>
				<Text style={styles.textLabel}>Number Of Assignments: {this.state.numberOfAssignments}</Text>
				<Text style={styles.textLabel}>Total Points Earned: {this.state.totalPoints}</Text>
				<View style={styles.newAssignment}>
					<Text style={styles.newAssignmentLabel}>New Assignment Grade:</Text>
					<Picker
						selectedValue={this.state.grade}
						style={styles.gradePicker}
						textStyle={styles.pickerText}
						onValueChange={(itemValue, itemIndex) => this.setState({grade: itemValue})}
					>
						<Picker.Item label="3" value="3" />
						<Picker.Item label="2" value="2" />
						<Picker.Item label="1" value="1" />
						<Picker.Item label="0" value="0" />
					</Picker>
				</View>
				<Button
					title='Submit New Assignment'
					onPress={this.handleSubmitNewAssignmentPress}
					color='#000051'
				/>
				<Button 
					title='What Is Triage Grading?' 
					onPress={this.handleWhatIsTriageGradingPress}
					color='#000051'					
				/>
				<Button 
					title='Credits' 
					onPress={this.handleCreditsPress}
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
	textInput: {
		height: 60,
		fontSize: 28,
		marginTop: 0,
		marginBottom: 70,
		color: 'white',
	},
	textLabel: {
		height: 60,
		fontSize: 28,
		marginBottom: 0,
		marginLeft: 10,
		color: 'white'
	},
	newAssignment: {
		marginLeft: 10,
		flex: 1,
		flexDirection: 'row',
	},
	newAssignmentLabel: {
		flex: 1,
		height: 60,
		fontSize: 28,
		marginBottom: 0,
		color: 'white'
	},
	gradePicker: {
		flex: .25,
		color: 'white',
	},
	pickerText: {
		color: 'white',
		fontSize: 28,
	}
});

