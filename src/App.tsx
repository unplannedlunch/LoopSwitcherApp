import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme } from 'react-native';

import { Colors, Typography } from './styles';
import Editor from './components/Editor';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
		...styles.container,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Text style={[styles.header]}>Loop Editor: Chain 1</Text>
			<Editor style={styles.editor} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		elevation: 5,
		flex: 1,
		width: '100%',
		color: Colors.lighter,
		backgroundColor: Colors.dark,
		textAlign: 'center',
		textAlignVertical: 'center',
		...Typography.header,
	},
	editor: {
		flex: 11,
		width: '100%',
	},
});

export default App;
