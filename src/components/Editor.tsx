import React, { ReactNode, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

import { Colors } from '../styles';

const initialData = [
	{
		key: 'Loop01',
		order: 1,
		label: 'Loop 1',
	},
	{
		key: 'Loop02',
		order: 2,
		label: 'Loop 2',
	},
	{
		key: 'Loop03',
		order: 3,
		label: 'Loop 3',
	},
	{
		key: 'Loop04',
		order: 4,
		label: 'Loop 4',
	},
	{
		key: 'Loop05',
		order: 5,
		label: 'Loop 5',
	},
	{
		key: 'Loop06',
		order: 6,
		label: 'Loop 6',
	},
	{
		key: 'Loop07',
		order: 7,
		label: 'Loop 7',
	},
];

const Editor = (props: ViewProps) => {
	const [data, setData] = useState(initialData);

	const renderItem: (params: RenderItemParams<{ order: number; label: string }>) => ReactNode = ({
		item,
		drag,
		isActive,
		index,
	}) => (
		<TouchableOpacity
			style={[styles.loop, { backgroundColor: isActive ? Colors.tertiary : Colors.secondary }]}
			onLongPress={drag}
			onPress={() => {
				isActive = !isActive;
				return true;
			}}>
			<Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center' }}>{item?.label}</Text>
		</TouchableOpacity>
	);
	return (
		<View style={[props.style, styles.editor]}>
			<View style={{ flex: 1 }}>
				<DraggableFlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={item => `draggable-item-${item.key}`}
					onDragEnd={({ data: d }) => setData(d)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	editor: {
		elevation: 0,
		backgroundColor: Colors.darker,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loop: {
		elevation: 3,
		width: 200,
		height: 100,
		margin: 10,
		textAlignVertical: 'center',
		textAlign: 'center',
		shadowColor: Colors.black,
		shadowOffset: { width: 100, height: 100 },
		shadowOpacity: 1,
	},
});

export default Editor;
