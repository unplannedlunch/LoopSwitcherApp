import React, { ReactNode, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

import { Colors, Typography } from '../styles';
import { ImgDragHandle } from '../assets/img';

const initialData = [
	{
		key: 'loop01',
		order: 0,
		label: 'Loop 1',
	},
	{
		key: 'loop02',
		order: 1,
		label: 'Loop 2',
	},
	{
		key: 'loop03',
		order: 2,
		label: 'Loop 3',
	},
	{
		key: 'loop04',
		order: 3,
		label: 'loop 4',
	},
	{
		key: 'loop05',
		order: 4,
		label: 'Loop 5',
	},
	{
		key: 'loop06',
		order: 5,
		label: 'Loop 6',
	},
	{
		key: 'loop07',
		order: 6,
		label: 'Loop 7',
	},
	{
		key: 'loop08',
		order: 7,
		label: 'Loop 8',
	},
];

const renderItem: (params: RenderItemParams<{ key: string; order: number; label: string }>) => ReactNode = ({
	item,
	drag,
	isActive,
	index,
}) => {
	const DragHandle = (props: TouchableOpacityProps) => {
		return (
			<TouchableOpacity onPressIn={drag} style={props.style}>
				<ImgDragHandle />
			</TouchableOpacity>
		);
	};

	return (
		<View style={[styles.loop, { backgroundColor: isActive ? Colors.tertiary : Colors.secondary }]}>
			<Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center', ...Typography.body }}>
				{item.order}
			</Text>
			<Text style={{ flex: 4, textAlign: 'center', textAlignVertical: 'center', ...Typography.body }}>
				{item.label + '\n' + item.key}
			</Text>
			<DragHandle style={{ flex: 1, ...Typography.body }} />
		</View>
	);
};

const Editor = (props: ViewProps) => {
	const [data, setData] = useState(initialData);

	return (
		<View style={[props.style, styles.editor]}>
			<View style={{ flex: 1 }}>
				<DraggableFlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={item => `draggable-item-${item.key}`}
					onDragEnd={({ data: d }) => {
						for (const i in d) {
							d[i].order = parseInt(i, 10);
						}
						setData(d);
					}}
					extraData={{ data }}
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
		flexDirection: 'row',
		elevation: 3,
		width: 300,
		height: 70,
		margin: 10,
		textAlignVertical: 'center',
		textAlign: 'center',
		borderRadius: 8,
		borderWidth: 0,
		shadowColor: Colors.black,
		shadowOffset: { width: 100, height: 100 },
		shadowOpacity: 1,
	},
});

export default Editor;
