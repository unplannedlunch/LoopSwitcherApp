import Svg, { G, Path, Rect } from 'react-native-svg';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../styles';

export default () => (
	<View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
		<Svg viewBox="0 0 297 297" width="20" height="20">
			<G>
				<Path
					d="M148.5,81.888c-36.73,0-66.612,29.882-66.612,66.612s29.882,66.612,66.612,66.612s66.612-29.882,66.612-66.612
	                    S185.23,81.888,148.5,81.888z M148.5,194.927c-25.599,0-46.427-20.827-46.427-46.427s20.827-46.427,46.427-46.427
	                    s46.427,20.827,46.427,46.427S174.099,194.927,148.5,194.927z"
					stroke={Colors.darker}
					fill={Colors.darker}
				/>
				<Path
					d="M288.789,182.326l-18.21-10.514c1.454-7.658,2.188-15.469,2.188-23.313s-0.734-15.655-2.188-23.313l18.21-10.514
                        c2.318-1.338,4.009-3.542,4.702-6.129c0.693-2.585,0.33-5.34-1.008-7.658l-30.757-53.273c-2.787-4.826-8.955-6.48-13.787-3.694
                        l-18.234,10.526c-11.872-10.249-25.607-18.192-40.355-23.332V10.093C189.35,4.519,184.831,0,179.257,0h-61.514
                        c-5.574,0-10.093,4.519-10.093,10.093v21.022c-14.748,5.14-28.483,13.082-40.355,23.332L49.061,43.92
                        c-4.829-2.788-11.001-1.133-13.787,3.694L4.517,100.887c-1.338,2.318-1.701,5.073-1.008,7.658c0.693,2.586,2.384,4.79,4.702,6.129
                        l18.21,10.514c-1.454,7.658-2.188,15.469-2.188,23.313s0.734,15.655,2.188,23.313l-18.21,10.514
                        c-2.318,1.338-4.009,3.542-4.702,6.129c-0.693,2.585-0.33,5.34,1.008,7.658l30.757,53.273c2.787,4.827,8.957,6.482,13.787,3.694
                        l18.234-10.526c11.872,10.249,25.607,18.192,40.355,23.332v21.022c0,5.574,4.519,10.093,10.093,10.093h61.514
                        c5.574,0,10.093-4.519,10.093-10.093v-21.022c14.748-5.14,28.483-13.082,40.355-23.332l18.234,10.526
                        c4.83,2.787,11.001,1.132,13.787-3.694l30.757-53.273c1.338-2.318,1.701-5.073,1.008-7.658
                        C292.798,185.869,291.107,183.665,288.789,182.326z M249.345,122.645c2.147,8.404,3.236,17.103,3.236,25.855
                        s-1.089,17.45-3.236,25.855c-1.121,4.384,0.814,8.977,4.732,11.239l15.878,9.167l-20.664,35.792l-15.908-9.184
                        c-3.921-2.262-8.87-1.64-12.104,1.526c-12.514,12.244-27.984,21.187-44.735,25.863c-4.362,1.217-7.379,5.192-7.379,9.721v18.336
                        h-41.329v-18.336c0-4.529-3.017-8.504-7.379-9.721c-16.752-4.676-32.221-13.618-44.735-25.863
                        c-3.237-3.166-8.186-3.788-12.104-1.526l-15.908,9.184l-20.664-35.792l15.878-9.167c3.918-2.262,5.853-6.855,4.732-11.239
                        c-2.147-8.404-3.236-17.103-3.236-25.855s1.089-17.45,3.236-25.855c1.121-4.384-0.814-8.977-4.732-11.239l-15.878-9.167
                        l20.664-35.792l15.908,9.184c3.922,2.263,8.87,1.64,12.104-1.526c12.514-12.244,27.984-21.187,44.735-25.863
                        c4.362-1.217,7.379-5.192,7.379-9.721V20.185h41.329v18.336c0,4.529,3.017,8.504,7.379,9.721
                        c16.752,4.676,32.221,13.618,44.735,25.863c3.238,3.167,8.186,3.789,12.104,1.526l15.908-9.184l20.664,35.792l-15.878,9.167
                        C250.16,113.668,248.225,118.261,249.345,122.645z"
					stroke={Colors.darker}
					fill={Colors.darker}
				/>
			</G>
		</Svg>
	</View>
);
