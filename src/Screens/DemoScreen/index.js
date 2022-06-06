import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {TouchableOpacity} from 'react-native';
import PageContainer from '../../Components/Layout/PageContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeUserDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import { UserData, userInfoDataFromAsyncStorage } from '../../Store/Reducers/NewReducer';
import {useDispatch, useSelector} from 'react-redux';
import { getRequest } from '../../App/fetch';

const DemoScreen = props => {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);
  
  // const {auth} = reducerData;
  // const [userData, setUserData] = React.useState({});
  // console.log('userdata reducer Data',reducerData?.new?.userData)

  useEffect(() => {
    // console.log('New api data get');
    dispatch(UserData())
  }, [])
  

  const removeToken = async value => {
    try {
      await AsyncStorage.removeItem('token').then(() => {
        // console.log(`User Data ${reducerData}`);
        dispatch(removeUserDataFromAsyncStorage());
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <PageContainer>
      <Text>Screen1</Text>
      {[1, 2, 3, 4, 5, 6].map((obj, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              padding: 30,
              backgroundColor: 'black',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              removeToken();
            }}>
            <Text style={{color: 'white'}}>Logout</Text>
          </TouchableOpacity>
        );
      })}
    </PageContainer>
  );
};

export default DemoScreen;
