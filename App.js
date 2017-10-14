import React, { Component } from 'react';
import { ASyncStorage, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  /**
   * This is for any functions relating to any info
   * for your pet. Naming is the only thing I can think of,
   * but there may be more.
   */
  
    /**
     * Initiates creature data (stats, starting level, etc) for a new creature
     * @param {string} name				The user-provided creature name
     * @param {string} creatureType		The creator-provided creature type chosen by user
     */
    initiateCreature(name, creatureType) {
      setLevel(name, 0);
      gainExp(name, 0);
    }
  
    /**
     * Handles leveling creatures up.
     * @param {string} name 			The user-provided creature name
     * @param {number} currentLevel 	The current level of the creature, usually provided by AsyncStorage
     */
    setLevel(name, currentLevel) {
      try{
        await AsyncStorage.setItem(name + '-current-level', currentLevel++);
      } catch (error) {
  
      }
    }

/**
 * This is for any functions relating to storing,
 * retrieving, and awarding experience.
 */
  /**
   * General handler for experience gain for completimg tasks, minigames, quests, etc
   * @param {string}	name 	The user-provided creature name
   * @param {number} 	expGain The amount of experience awarded for a specific action
   */
  gainExp(name,expGain) {
    try{
      const currentExperience = await AsyncStorage.getItem(name + '-current-experience');
      if (currentExperience) {
        await AsyncStorage.setItem(name + '-current-experience', currentLevel++);
      }
      else {
        await AsyncStorage.setItem(name + '-current-experience', 0);
      }
    } catch (error) {

    }
    checkLevelRequirements(name);
    return currentExperience;
  }

  /**
   * Checks experience to see if they're at a level-up point.
   * @param {string} name The user-provided creature name	
   */
  checkLevelRequirements(name) {
    try{
      const currentLevel = await AsyncStorage.getItem(name + '-current-level');
      const currentExperience = await AsyncStorage.getItem(name + '-current-experience');

      if (currentLevel === 1) {
        if (currentExperience > 5) {
          setLevel(name, currentLevel);
        }
      }
      else if (currentLevel === 2) {
        if (currentExperience > 25) {
          setLevel(name, currentLevel);
        }
      }
      else if (currentLevel === 3) {
        if (currentExperience > 75) {
          setLevel(name, currentLevel);
        }
      }
      else if (currentLevel === 4) {
        if (currentExperience > 175) {
          setLevel(name, currentLevel);
        }
      }
      else if (currentLevel === 5) {
        if (currentExperience > 300) {
          setLevel(name, currentLevel);
        }
      }

    } catch(error) {

    }
  }
      /**
       * This general header is a representation of your stats, your current pet's name,
       * and other things that are pertinent to the user.
       */

      renderGeneralHeader() {
        dispatch(CreatureActions.initiateCreature(Toby,Octoby)).then(() => {
        const hello = setLevel(Toby,0)});

        return (
          <Text>{ hello }</Text>
        );
      };


      render() {
        return (
          <View style={styles.container}>
            { renderGeneralHeader() }
          </View>
        );
      };
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });