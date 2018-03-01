import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Homepage from './Views/Homepage.js';
import WhatIsTriageGrading from './Views/WhatIsTriageGrading.js';
import Credits from './Views/Credits.js';

const Navigation = StackNavigator({
    Homepage: {screen: Homepage},
    WhatIsTriageGrading: {screen: WhatIsTriageGrading},
    Credits: {screen: Credits},
})

export default Navigation;