import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {TouchableOpacity} from 'react-native';
import PageContainer from '../../Components/Layout/PageContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeUserDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import { UserData, userInfoDataFromAsyncStorage } from '../../Store/Reducers/NewReducer';
import {useDispatch, useSelector} from 'react-redux';
import { getRequest } from '../../App/fetch';

const dataScreen = props => {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);
  
  useEffect(() => {
    console.log('userdata reducer Data22233',reducerData)
    dispatch(UserData())
  }, [])
  return (
    <PageContainer> 
      <Text style={{fontSize:19,color:'#000'}}>Users</Text>
      {reducerData?.new?.userData.map((obj,index)=>{
        return(
          <>
          <Text style={{fontSize:16,color:'#000'}}>{obj.name}</Text>
          </>
        );
      })}
    </PageContainer>
  );
};

export default dataScreen;
