/* eslint-disable */

import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Img from 'react-image-holder';

export function ImageDeck () {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        var realImage = (
        <Img src="http://animalia-life.com/data_images/cat/cat5.jpg"
             width="802"
             height="450"
             className="cat-photo"
             usePlaceholder={true}
        />
        );
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    horizontal: true,
    decelerationRate: 'fast',
    nestedScrollEnabled: false,
  },
  text: {
    fontSize: 42,
  },
});





// import React, { useRef } from 'react'
// import { useSprings, animated } from '@react-spring/native'
// import useMeasure from 'react-use-measure'
// import { useDrag } from 'react-use-gesture'
// import { ResizeObserver } from '@juggle/resize-observer'
// import clamp from 'lodash.clamp'
//
// const pages = [
//   'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// ]
//
//  export function ImageDeck () {
//    const observer = ResizeObserver
//    const page = {
//      position: 'absolute',
//      width: '100%',
//      height: '100%',
//      willChange: 'transform',
//    }
//    const container = {
//      display: 'flex',
//      alignItems: 'center',
//      height: '100%',
//      justifyContent: 'center',
//    }
//    const wrapper = {
//      width: '100%',
//      height: '100%',
//    }
//   const index = useRef(0)
//   const [ref, { width } ] = useMeasure({polyfill:observer})
//   const [props, api] = useSprings(
//     pages.length,
//     i => ({
//       x: i * width,
//       scale: width === 0 ? 0 : 1,
//       display: 'block',
//     }),
//     [width]
//   )
//   const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
//     if (active && distance > width / 2) {
//       index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
//       cancel()
//     }
//     api.start(i => {
//       if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
//       const x = (i - index.current) * width + (active ? mx : 0)
//       const scale = active ? 1 - distance / width / 2 : 1
//       return { x, scale, display: 'block' }
//     })
//   })
//   return (
//       <div ref={ref} className={wrapper}>
//         {props.map(({ x, display, scale }, i) => (
//           <animated.div className={page} {...bind()} key={i} style={{ display, x }}>
//             <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }} />
//           </animated.div>
//         ))}
//       </div>
//   )
// }

