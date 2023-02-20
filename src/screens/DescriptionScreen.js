import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {Back, BookmarkCopy3, Play, Star, ThreeDots} from '../assets/svg';
import {Card, Cast, MyStatusBar} from '../components';
import colors from '../config/colors';

const DescriptionScreen = ({navigation, route}) => {
  const {title, rating, poster, description, language, back} = route.params;
  const allLanguages = {
    en: 'English',
    ja: 'Japanese',
    es: 'Spanish',
    ab: 'English',
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={false}>
      <MyStatusBar color={'transparent'} barstyle={true} />

      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${poster}`}}
        style={styles.image}
      />

      <View style={styles.header}>
        <Back
          onPress={() => {
            navigation.navigate(`${back}`);
          }}
        />
        <ThreeDots />
      </View>

      <View style={styles.playContainer}>
        <Play />
        <Text style={styles.play}>Play Trailer</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.movieNameContainer}>
          <Text style={styles.movieName}>{title}</Text>
          <BookmarkCopy3 />
        </View>

        <View style={styles.ratingContainer}>
          <Star />
          <Text style={styles.rating}>{`${rating}/10 IMDb`}</Text>
        </View>

        <View style={styles.movieType}>
          <Card text={'ACTION'} varient={'Secondary'} />
          <Card text={'ADVENTURE'} varient={'Secondary'} />
          <Card text={'FANTASY'} varient={'Secondary'} />
        </View>

        <View style={styles.movieDetails}>
          <View>
            <Text style={styles.type}>Length</Text>
            <Text style={styles.detail}>2h 28min</Text>
          </View>
          <View style={styles.language}>
            <Text style={styles.type}>Language</Text>
            <Text style={styles.detail}>{allLanguages[language]}</Text>
          </View>
          <View style={styles.rating2}>
            <Text style={styles.type}>Rating</Text>
            <Text style={styles.detail}>PG-13</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>Description</Text>
          <ScrollView
            style={styles.scrollViewDescription}
            nestedScrollEnabled={true}>
            <Text style={styles.description}>{description}</Text>
          </ScrollView>
        </View>

        <View style={styles.castHeaderContainer}>
          <Text style={styles.heading}>Cast</Text>
          <Card text={'See more'} />
        </View>

        <View style={styles.castContainer}>
          <Cast
            name={'Tom Holland'}
            imageSrc={require('../assets/images/Tom.png')}
          />
          <Cast
            name={'Zendaya'}
            imageSrc={require('../assets/images/Zendaya.png')}
          />
          <Cast
            name={'Benedict Cumberbatch'}
            imageSrc={require('../assets/images/Benedict.png')}
          />
          <Cast
            name={'Jacon Batalon'}
            imageSrc={require('../assets/images/Jacon.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  castContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  castHeaderContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  description: {
    marginEnd: 24,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: colors.varientGrey,
  },
  descriptionContainer: {
    marginTop: 24,
  },
  detail: {
    fontFamily: 'Mulish-SemiBold',
    //fontWeight: '600',
    fontSize: 12,
    color: colors.black,
  },
  heading: {
    fontFamily: 'Merriweather-Black',
    //fontWeight: '900',
    fontSize: 16,
    color: colors.blueVarient,
  },
  header: {
    marginTop: StatusBar.currentHeight + 30,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 350,
  },
  innerContainer: {
    marginTop: 255 - (StatusBar.currentHeight + 155),
    padding: 24,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  language: {
    marginStart: 60,
  },
  movieDetails: {
    flexDirection: 'row',
    marginTop: 16,
  },
  movieName: {
    width: 200,
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
    fontSize: 20,
    color: colors.black,
  },
  movieNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieType: {
    flexDirection: 'row',
    marginTop: 20,
  },
  play: {
    marginTop: 4,
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
    fontSize: 12,
    color: colors.white,
  },
  playContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    marginStart: 4,
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.varientGrey,
  },
  rating2: {
    marginStart: 60,
  },
  ratingContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollViewDescription: {
    marginTop: 8,
    height: 100,
  },
  type: {
    fontFamily: 'Mulish-Regular',
    //fontWeight: '400',
    fontSize: 12,
    color: colors.varientGrey,
  },
});

export default DescriptionScreen;
