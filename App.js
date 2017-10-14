import React, { Component } from 'react';
import { AppRegistry, ASyncStorage, Button, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', level:1, exp: 0, tasks:[]};
  }

  checkLevelRequirements() {
    const { name, exp, level } = this.state;

    if (level === 1) {
      if (exp > 5) {
        this.gainLevel();
      }
    }
    else if (level === 2) {
      if (exp > 25) {
        this.gainLevel();
      }
    }
    else if (level === 3) {
      if (exp > 75) {
        this.gainLevel();
      }
    }
    else if (level === 4) {
      if (exp > 175) {
        this.gainLevel();
      }
    }
    else if (level === 5) {
      if (exp > 300) {
        this.gainLevel();
      }
    }
  }

  gainLevel() {
    this.state.level++;
  }

  gainExp(expGain) {
    this.state.exp = this.state.exp + expGain;
    this.checkLevelRequirements();
  }

  initiateCreature(creatureName) {
    this.state.name = creatureName;
  };

  addTask(taskToAdd, daysSelected, timeSelected, weekLength) {
    let { tasks } = this.state;

    tasks.push({
      'name':taskToAdd,
      'days':daysSelected,
      'time':timeSelected,
      'weekDuration':weekLength
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
      </View>
  )}
  }

class HomeScreen extends Component {
  render() {
    return <Button title={'press for tasks screen'} onPress={console.log(3)} />
  }
}

class TasksScreen extends Component {
  render() {
    return <Text style={styles.textColor}>of Habits</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Tasks: { screen: TasksScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'black',
    fontSize: 10,
  }
})