import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import Logo from './logo/icon-patient-portal.png';


export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // axios.get('http://localhost:8080/patients').then(response => console.log(response.data))
  //const data = axios.get('http://199.212.37.217:8080/patients')
  //console.log(data)

  const onSubmit = () => {
    const username1 = username;
    const password1 = password;
    console.log(username1)
    console.log(password1)
  
    // const payload = {
    //     email,
    //     name,
    //     password,
    // };
    // fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    // })
    // .then(async res => { 
    //     try {
    //         const jsonRes = await res.json();
    //         if (res.status !== 200) {
    //             setIsError(true);
    //             setMessage(jsonRes.message);
    //         } else {
    //             onLoggedIn(jsonRes.token);
    //             setIsError(false);
    //             setMessage(jsonRes.message);
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     };
    // })
    // .catch(err => {
    //     console.log(err);
    // });
  };

  return (
    <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
    <Text style={styles.heading}>Provider Login</Text>
    <TextInput placeholder="Username" style={styles.input} onChangeText={setUsername} />
    <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} secureTextEntry="true" />
    <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
   logo: {
    marginTop: 60,
    paddingRight:1,
    alignItems: 'center',
    width: '67%',
    height: 250,
    marginVertical: 5,
    marginHorizontal: 60,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   heading: {
    color: '#FFA679',
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: "center",
    marginVertical: 30,
  },
   input: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    padding: 15,
    marginVertical: 10,
  },
  form: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400'
},
   button: {
    width: '100%',
    color: '#fff',

    padding: 15,
    alignItems: 'center',
    textAlign: 'center',

    backgroundColor: '#283593',
    borderRadius: 20,
     marginVertical: 40,
  },
});