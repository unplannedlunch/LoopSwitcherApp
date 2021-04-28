import Svg, { Rect } from 'react-native-svg';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default () => (
	<View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
		<Svg viewBox="0 0 100 40" width="40" height="40">
			<Rect width={100} height={10} rx={5} stroke={Colors.darker} fill={Colors.darker} />
			<Rect y="30" width={100} height={10} rx={5} stroke={Colors.darker} fill={Colors.darker} />
		</Svg>
	</View>
);
