import React from 'react';
import {Dimensions, ImageBackground, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {
  CardLayer,
  HorizontalCard,
  IndivCard,
  styles,
} from '../components/CardLayer';

export function CCDonationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        source={require('../assets/bg.jpg')}>
        <ScrollView contentContainerStyle={styles.donations}>
          <Text style={styles.IOMOBtext}>Give Back!</Text>
          <View style={styles.image}>
            <CardLayer disableRightTitle={true} />
            <Text style={styles.smallertext}>Support Local Projects!</Text>
            <ScrollView horizontal={true}>
              <IndivCard
                title={'Floating Solar Farm'}
                subtitle={'Tengah Reservoir'}
                imageURI={
                  'https://static.straitstimes.com.sg/s3fs-public/articles/2020/08/18/rk_floatingsolarphotovoltaicsystem_180820.jpg'
                }
                newprice={'10 Credits'}
                disableOffer={true}
              />
              <IndivCard
                title={'PET Recycling'}
                subtitle={'Sembawang Port'}
                imageURI={
                  'https://industryeurope.com/downloads/3976/download/alpla.jpg?cb=1035f22c7a5b542c13ed5f8bfca2847e&w=660&h='
                }
                newprice={'40 Credits'}
                disableOffer={true}
              />
              <IndivCard
                title={'OliveAnkara: Repurposing Fabric Scraps'}
                subtitle={'Tanjong Pagar'}
                imageURI={
                  'https://www.channelnewsasia.com/image/12943304/1x1/600/600/47ad96db8b569ec4d5ee82b658a749c5/LV/oliveankara-1.jpg'
                }
                newprice={'20 Credits'}
                disableOffer={true}
              />
              <IndivCard
                title={'NEWater 5.0'}
                subtitle={'Changi'}
                imageURI={
                  'https://untouristsingapore.files.wordpress.com/2013/11/ok-069.jpg?w=640'
                }
                newprice={'5 Credits'}
                disableOffer={true}
              />
            </ScrollView>
            <Text style={styles.smallertext}>Support Global Projects!</Text>
            <HorizontalCard
              title={'Utsil Naj - healthy homes for the future generation'}
              subtitle={'Ciudad de México, Mexico'}
              imageURI={
                'https://cdn.shopify.com/s/files/1/0356/1596/5319/products/UtsilNajGuatemala.jpg?v=1585649584'
              }
              newprice={'10 Credits'}
              disableOffer={true}
            />
            <HorizontalCard
              title={'Cleaner Cooking with bio-gases'}
              subtitle={'Bombay, India'}
              imageURI={
                'https://cdn.shopify.com/s/files/1/0356/1596/5319/products/Womeninherbluekitchen.jpg?v=1604588137'
              }
              newprice={'10 Credits'}
              disableOffer={true}
            />
            <HorizontalCard
              title={'Sidrap Wind Farming Project'}
              subtitle={'Serjaya, Indonesia'}
              imageURI={
                'https://www.climatelinks.org/sites/default/files/photos/Menangkap%20tenaga%20bayu%20untuk%20energi.jpg'
              }
              newprice={'10 Credits'}
              disableOffer={true}
            />
            <HorizontalCard
              title={'Buenos Aires Renewable Energy Project'}
              subtitle={'Buenos Aires, Brazil'}
              imageURI={
                'https://cdn.shopify.com/s/files/1/0356/1596/5319/products/BuenosAires-RE-project-5.jpg?v=1610457122'
              }
              newprice={'10 Credits'}
              disableOffer={true}
            />
            <HorizontalCard
              title={'Yarra Yarra Biodiversity Corridor'}
              subtitle={'Victoria, Australia'}
              imageURI={
                'https://marketplace.carbonmarketinstitute.org/wp-content/uploads/2017/05/yarra_yarra_project_splendid_fairy-wren_male_hvrem5northside_111014_3.jpg'
              }
              newprice={'10 Credits'}
              disableOffer={true}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default CCDonationScreen;
