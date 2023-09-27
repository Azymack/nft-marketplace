import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { FocusedStatusBar, NFTCard } from '../../components';
import { globalStyles } from '../../styles';
import { Colors } from '../../enums';
import { NFTData } from '../../data';
import { style } from './style';

function Home() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <FocusedStatusBar background={Colors.PRIMARY} />
      <View style={globalStyles.flex}>
        <View style={style.content}>
          <FlatList 
            data={NFTData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <NFTCard data={item} />}
            ListHeaderComponent={() => <Text>NFTs Header</Text>}
          />
        </View>
        <View style={style.backgroundBlock}>
          <View style={style.upperBox}></View>
          <View style={style.lowerBox}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;
