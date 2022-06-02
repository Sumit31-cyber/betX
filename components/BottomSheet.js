import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useInsertionEffect,
} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 80;

type BottomSheetProps = {
  children?: React.ReactNode,
};
export type BottomSheetRefProps = {
  scrollTo: destination => void,
  isActive: () => boolean,
};

const BottomSheet = React.forwardRef(({children}, ref) => {
  const translationY = useSharedValue(0);
  const active = useSharedValue(false);
  const scrollTo = useCallback(destination => {
    'worklet';

    active.value = destination !== 0;

    translationY.value = withSpring(destination, {damping: 50});
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  });

  useImperativeHandle(ref, () => ({scrollTo, isActive}), [scrollTo, isActive]);

  const context = useSharedValue({y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translationY.value};
    })
    .onUpdate(event => {
      translationY.value = event.translationY + context.value.y;
      translationY.value = Math.max(translationY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translationY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translationY.value < SCREEN_HEIGHT / 1.5) {
        translationY.value = withSpring(MAX_TRANSLATE_Y, {damping: 50});
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translationY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [30, 25],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translationY.value}],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line}></View>
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT / 3,
    borderRadius: 25,
    alignSelf: 'center',
  },
  line: {
    width: 60,
    height: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 20,
  },
});
