import {Avatar, Card, Paragraph, Text, Title} from 'react-native-paper';
import React from 'react';
import {
    Dimensions, Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';
const juiceURI = 'https://secure.ap-tescoassets.com/assets/MY/511/8888002188511/ShotType1_540x540.jpg'
const milkURI ='https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/12468436_LXL1.jpg'
const tomatoURI = 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/12228635_XL1.jpg'
const detergentURI ='https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13146962_XL1_20210121.jpg?w=1200&q=70'
const chickenURI='https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13097675_XL1.jpg'
const LeftContent = props => (
  <Avatar.Icon
    {...props}
    style={{backgroundColor: 'white', marginLeft: -5}}
    icon="cash-multiple"
  />
);
const RightContent = props => (
  <TouchableOpacity
    onPress={() => console.log('Pressed')}
    style={styles.whiteButton}>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
      }}>
      View Projects
    </Text>
  </TouchableOpacity>
);
const IndivCard = ({title, expiry,imageURI,newprice,oldprice}) => (
  <View style={styles.cardcontainer}>
    <Card style={{width: '100%', height: '100%'}}>
      <Image
        style={{
          width: '100%',
          height: '60%',
          resizeMode: 'stretch',
        }}
        source={{
          uri: imageURI,
        }}
      />

      {/** top -left */}
      <View style={{position: 'absolute', top: 0, left: 0}}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            backgroundColor: 'red',
            borderRadius: 2,
            padding: 4,
          }}>
          Offer
        </Text>
      </View>
      <Card.Title
          style={{margin:'-5%'}}
        title={title}
        subtitle={`Expires in ${expiry} days`}
        titleStyle={{marginBottom:'-5%', fontSize: 14, width:'90%'}}
      /><View style={{flexDirection:'row',}}>
        <Text style={{marginLeft:'5%',color:'blue', fontWeight:'bold', fontSize:14}}>{newprice}</Text>
        <Text style={{marginLeft:'3%', fontSize:12, alignSelf:'center'}}>{oldprice}</Text></View>
    </Card>
  </View>
);
export const ProductCard = () => (
  <Card>
    <Card.Title
      title={'Products On Discount'}
      subtitle={
        'Help reduce food wastage and save! Products close to their sell-by dates are perfectly safe for consumption, but are available for a lower price.'
      }
      subtitleNumberOfLines={6}
    />
    <Card.Content>
      <ScrollView horizontal={true}>
        <IndivCard title={'Greenleaf Organic Pineapple Juice'} expiry={2} imageURI={juiceURI} newprice={'$7.20'} oldprice={'$9.00'} />
        <IndivCard title={'Bluetree Organic Milk'} expiry={3} imageURI={milkURI} newprice={'$3.10'} oldprice={'$4.00'}/>
        <IndivCard title={'Redplant Organic Tomatoes'} expiry={1} imageURI={tomatoURI} newprice={'0.50'} oldprice={'$2.00'}/>
        <IndivCard title={'Orangebranch Organic Detergent'} expiry={4} imageURI={detergentURI} newprice={'$9.10'} oldprice={'$14.00'}/>
        <IndivCard title={'Blackflower Organic Chicken Breast'} expiry={5} imageURI={chickenURI} newprice={'$1.10'} oldprice={'$4.00'}/>
      </ScrollView>
    </Card.Content>
  </Card>
);
export const CardLayer = () => (
  <Card style={{marginBottom: '5%'}}>
    <Card.Title
      subtitle="Carbon Credits Saved"
      left={LeftContent}
      right={RightContent}
    />
    <Card.Content style={{marginTop: -25}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Title>57</Title>
          <Paragraph>Total</Paragraph>
        </View>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Title>50</Title>
          <Paragraph>Donated</Paragraph>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Title>7</Title>
          <Paragraph>Balance</Paragraph>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Paragraph>Carbon Dioxide Saved</Paragraph>
        <Paragraph>57 Metric Tons</Paragraph>
      </View>
    </Card.Content>
  </Card>
);
export const styles = {
  container: {
    flex: 1,
  },
  cardcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    width: 165,
    height: 225,
    margin: 10,
  },
  nav: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    width: '90%',
    margin: '5%',
    justifyContent: 'space-between',
  },
  gallery: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    position: 'absolute',
    top: 160,
    width: '90%',
    marginLeft: '5%',
    justifyContent: 'center',
  },
  IOMOBtext: {
    flex: 1,
    color: '#FFF',
    textAlign: 'left',
    marginTop: '23%',
    marginLeft: '8%',
    fontWeight: '100',
    fontSize: 32,
  },
  welcometext: {
    color: '#00FFA7',
  },
  flavourText: {
    color: '#F0EFE7',
  },
  whiteButton: {
    backgroundColor: '#004dff',
    width: 100,
    height: 40,
    borderRadius: 20,
    borderColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
    marginRight: 25,
  },
  noscrollable: {
    flexGrow: 1,
    height: Dimensions.get('window').height +50,
  },
  scrollable: {
    flexGrow: 1,
    height: 1200,
  },
};
