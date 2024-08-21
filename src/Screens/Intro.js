import {
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';


const {width, height} = Dimensions.get('window');

const Intro = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 0,
      image: require('../assets/image/intorPhoto/watchs.png'),
      titel: 'time in your hand',
    },
    {
      id: 1,
      image: require('../assets/image/intorPhoto/1.png'),
      titel: 'the power of Camera ',
    },
    {
      id: 2,
      image: require('../assets/image/intorPhoto/s2.jpg'),
      titel: 'Login screen',
      toch: () => {
        navigation.navigate("login");
      },
    },
  ];;
  const scrollAnimation = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.screen}>
      <StatusBar hidden />
      <Animated.FlatList
        bounces={false}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollAnimation}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            width * (index - 0.5),
            width * index,
            width * (index + 0.5),
          ];
          return (
            <View style={styles.item}>
              <Animated.Image
                source={item.image}
                style={[
                  styles.image,
                  {
                    transform: [
                      {
                        translateX: scrollAnimation.interpolate({
                          inputRange: [
                            width * (index - 1),
                            width * index,
                            width * (index + 1),
                          ],
                          outputRange: [-width * 0.5, 0, width * 0.5],
                        }),
                      },
                    ],
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.titleContainer,
                  {
                    opacity: scrollAnimation.interpolate({
                      inputRange,
                      outputRange: [0, 1, 0],
                    }),
                    transform: [
                      {
                        translateX: scrollAnimation.interpolate({
                          inputRange: inputRange,
                          outputRange: [250, 0, -250],
                        }),
                      },
                    ],
                  },
                ]}>
                {index < 2 ? (
                  <Text style={styles.titel}>{item.titel}</Text>
                ) : (
                  <TouchableOpacity style={styles.tochText} onPress={item.toch}>
                    <Text style={styles.titel}>{item.titel}</Text>
                  </TouchableOpacity>
                )}
              </Animated.View>
              <Animated.View
                style={[StyleSheet.absoluteFillObject, styles.itemOverlay]}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  screen: {flex: 1},
  item: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    overflow: 'hidden',
  },
  overflow: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 80,
    zIndex: 1,
  },
  titel: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  tochText: {
    width: 150,
    height: 40,
    borderRadius: 13,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
