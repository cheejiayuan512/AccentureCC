import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  Avatar,
  Card,
  Colors,
  IconButton,
  Surface,
  Text,
} from 'react-native-paper';
import {juiceURI, styles} from '../../components/CardLayer';
import DropDownPanel from '../../components/DropDownPanel';

const HorizontalLine = () => {
  return (
    <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 20,
      }}
    />
  );
};

function CarbonFootprintCard({uri, title}) {
  return (
    <Card style={{borderRadius: 10, margin: 5}}>
      <ImageBackground
        style={{width: 100, height: 100}}
        imageStyle={{borderRadius: 10}}
        source={{
          uri: uri,
        }}>
        <Text style={{color: 'white', margin: 5}}>{title}</Text>
      </ImageBackground>
    </Card>
  );
}

export function CCProductScreen({navigation}) {
  const [isScrollable, setScroll] = useState(true);
  return (
    <View style={styles.container}>
      <IconButton
        style={{position: 'absolute', top: 5, left: 5, zIndex: 1000}}
        icon="chevron-left"
        color={Colors.grey500}
        size={25}
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <ScrollView
        contentContainerStyle={
          isScrollable ? styles.noscrollableproduct : styles.scrollableproduct
        }>
        <Image
          source={{uri: juiceURI}}
          style={{height: '30%', resizeMode: 'contain'}}
        />
        <Surface style={{paddingTop: 5, elevation: 4, height: '100%'}}>
          <View style={{margin: '10%', width: '80%'}}>
            <Text>GreenLeaf Organic Pineapple Juice</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: 5,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}>
                Offer
              </Text>
              <Text
                style={{fontWeight: 'bold', width: '15%', textAlign: 'center'}}>
                $7.20
              </Text>
              <Text style={{color: 'grey', width: '15%', textAlign: 'center'}}>
                $9.00
              </Text>
              <Text style={{color: 'grey', width: '55%', textAlign: 'right'}}>
                355ml
              </Text>
            </View>
            <Text style={{marginTop: '5%'}}>This purchase will earn you</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar.Icon
                style={{backgroundColor: 'white', marginLeft: -5}}
                icon="cash-multiple"
                size={40}
              />
              <Text style={{fontWeight: 'bold'}}>0.5 Carbon Credits</Text>
            </View>
            <HorizontalLine />
            <View style={{marginVertical: '5%'}}>
              <Text style={{marginBottom: '5%'}}>
                Fresh Pressed ® juice from 2 to 3 organic pineapples in every
                bottle!
              </Text>
              <Text>{'\u2022'} 100% Pure Pineapple Juice</Text>
              <Text>{'\u2022'} Not from Concentrate</Text>
              <Text>
                {'\u2022'} Pasteurized juice pressed from fresh pineapples
              </Text>
            </View>
          </View>
          <Card style={{margin: '4%', width: '92%', marginTop: '-10%'}}>
            <Card.Title
              title={'Recommended'}
              subtitle={`${'\u2022'}Pick the bottles that expire in 3 weeks and save 20%`}
            />
          </Card>
          <Card style={{margin: '4%', width: '92%', marginTop: '-2%'}}>
            <Card.Title title={'Carbon Footprint'} />
            <ScrollView horizontal={true}>
              <CarbonFootprintCard
                title="LAND USE"
                uri={
                  'https://thumbs.dreamstime.com/b/wood-processing-tool-instrument-lumberjack-saw-hammer-axe-concept-flat-vector-illustration-design-device-lay-timber-177370030.jpg'
                }
              />
              <CarbonFootprintCard
                title="LAND USE"
                uri={
                  'https://thumbs.dreamstime.com/b/wood-processing-tool-instrument-lumberjack-saw-hammer-axe-concept-flat-vector-illustration-design-device-lay-timber-177370030.jpg'
                }
              />
              <CarbonFootprintCard
                title="PROCESSING"
                uri={
                  'https://static.vecteezy.com/system/resources/thumbnails/000/349/079/small/Factory0027.jpg'
                }
              />
              <CarbonFootprintCard
                title="TRANSPORT"
                uri={
                  'https://www.ptc.gov.sg/images/default-source/default-album/webbanner-fa.jpg?sfvrsn=19cfdc76_0'
                }
              />
              <CarbonFootprintCard
                title="TRANSPORT"
                uri={
                  'https://www.ptc.gov.sg/images/default-source/default-album/webbanner-fa.jpg?sfvrsn=19cfdc76_0'
                }
              />
            </ScrollView>
            <View style={{width: '90%', margin: '5%'}}>
              <HorizontalLine />
              <Text>Greenhouse gas emissions per kg of food</Text>
              <Text style={{color: 'grey'}}>
                Greenleaf Organic Pineapple Juice
              </Text>
              <Text style={{fontWeight: 'bold'}}>$6.60</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'grey'}}>INSERT CHART HERE</Text>
                <Text style={{color: 'grey'}}>2.5</Text>
              </View>
              <Text style={{color: 'grey'}}>Del Monte Pineapple Juice</Text>
              <Text style={{fontWeight: 'bold'}}>$6.00</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'grey'}}>INSERT CHART HERE</Text>
                <Text style={{color: 'grey'}}>3.5</Text>
              </View>
            </View>
          </Card>
          <DropDownPanel title={'Product Recycling'} setScroll={setScroll} />
        </Surface>
      </ScrollView>
    </View>
  );
}
export default CCProductScreen;
