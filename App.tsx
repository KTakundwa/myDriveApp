import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  const age = 18;
  const yearsexperience = 2;
  let feedback = '';
  
  if (age >= 18) 
  /*the  condition was true*/
    if (yearsexperience >= 3)
    {
      feedback= 'you are a qualified, safe driver'

    }
    else
    {
    feedback = 'You are allowed to drive.  YAY!'
    } else
    {
      feedback= 'You are not allowed to drive yet'
    }

    //Adding a Switch Statement 
    let drivingRank = '';
    switch (yearsexperience)
     {
      case 0:
        drivingRank = 'Newbie driver';
        break;
       case 1:
        drivingRank = 'Rookie with 1 year of driving experience';
        break;
        case 2:
          drivingRank = 'Intermediate driver with 2 year of driving experience';
          break; 
          case 3:
            case 4: 
            drivingRank = 'Experienced driver';
            break; 
            default:
              drivingRank = 'Veteran driver with many years of experience'

    }


  return (
    <SafeAreaView style={styles.container}>
    <View style= {styles.content}>
    <Text  style={[styles.response, {fontSize: 48, marginBottom: 5, color: 'black', textAlign: 'center', textDecorationLine: 'underline'}]}>Drive To survive
             
             </Text>
       <Image source={{uri:"https://i1.pickpik.com/photos/212/341/296/car-girl-driving-transportation-preview.jpg"}} 
          resizeMode="contain"
          style= {styles.image}/>
            <Text  style={styles.response}>Age: {age}
             
            </Text>
            <Text  style={styles.response}>License Years {yearsexperience }
             
             </Text>

          <Text style={[styles.response, {color: 'green', fontWeight: 'bold'}] }>
      {feedback} {/*This is my message to be displayed to the user */}
      
      </Text>
      <Text style={[styles.response, {color: 'pink', fontWeight: 'bold', textAlign:'center', marginBottom:35}] }>
      {drivingRank} {/*This is the driving rank text component */}
      
      </Text>
    </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    width:'100%',
    alignItems: 'center'

  },

  response: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5

  },
  image :{
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    top: 0

  }
});
