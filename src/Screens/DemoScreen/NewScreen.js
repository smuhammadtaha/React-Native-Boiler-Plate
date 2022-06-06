import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {TouchableOpacity} from 'react-native';
import PageContainer from '../../Components/Layout/PageContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeUserDataFromAsyncStorage} from '../../Store/Reducers/AuthReducer';
import { UserData, userInfoDataFromAsyncStorage } from '../../Store/Reducers/NewReducer';
import {useDispatch, useSelector} from 'react-redux';
import { getRequest } from '../../App/fetch';
import { YahooData } from '../../Store/Reducers/YahooReducer';

const NewScreen = props => {
  const dispatch = useDispatch();
  const reducerData = useSelector(state => state);
//   console.log('Yahoo Data',reducerData.yahoo.yahooData.finance.result[0].quotes)
  
  useEffect(() => {
    dispatch(YahooData())
  }, [])
  return (
    <PageContainer> 
      <Text style={{fontSize:23,color:'#000',backgroundColor:'#eee',paddingBottom:10,fontWeight:'bold'}}>Trending Tickers</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#eee'}}>
      <Text style={{color:'#697077',}}>Symbol </Text>
      <Text style={{color:'#697077',}}>Last Price </Text>
      <Text style={{color:'#697077',}}>Change </Text>
      <Text style={{color:'#697077',}}>% Change</Text>
      </View>
      {reducerData.yahoo.yahooData.finance.result[0].quotes.map((obj,index)=>{
          return(
              <>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#eee'}}>
              <Text style={{color:'#2174FF',fontSize:19,fontWeight:'bold'}}>{obj.symbol} </Text>
              <Text style={{color:'#697077',fontSize:15,fontWeight:'bold'}}>{obj.regularMarketPrice} </Text>
              <Text style={{color:'green',fontSize:15,fontWeight:'bold'}}>{obj.regularMarketChange}</Text>
              <Text style={{color:'green',fontSize:15,fontWeight:'bold'}}>{`${obj.regularMarketChangePercent}%`}</Text>
              </View>
              </>
          )
      })}
      
      
      {/* {reducerData?.new?.userData.map((obj,index)=>{
        return(
          <>
          <Text style={{fontSize:16,color:'#000'}}>{obj.name}</Text>
          </>
        );
      })} */}

    </PageContainer>
  );
};

export default NewScreen;
