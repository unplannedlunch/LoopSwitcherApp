import React, { ReactNode, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

import { Colors, Typography } from '../styles';
import { ImgDragHandle, Gear } from '../assets/img';
import { TextInput } from 'react-native-gesture-handler';

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
		label: 'Loop 4',
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

const LoopEditor = (props: ViewProps) => {
	const [data, setData] = useState(initialData);

	const renderItem: (params: RenderItemParams<{ key: string; order: number; label: string }>) => ReactNode = ({
		item,
		drag,
		isActive,
		index,
	}) => {
		if (!item) {
			return null;
		}

		const DragHandle = (dragHandleProps: TouchableOpacityProps) => {
			return (
				<TouchableOpacity onPressIn={drag} style={dragHandleProps.style}>
					<ImgDragHandle />
				</TouchableOpacity>
			);
		};

		const handleLabelChange = (newLabel: string) => {
			if (index !== undefined) {
				const tempData = { ...data };
				tempData[index].label = newLabel;
				setData(tempData);
			}
		};

		return (
			<View style={[styles.loop, { backgroundColor: isActive ? Colors.tertiary : Colors.primary }]}>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: isActive ? Colors.secondaryLighter : Colors.secondary,
						borderTopLeftRadius: 8,
						borderBottomLeftRadius: 8,
					}}>
					<View style={{ flex: 1 }}>
						<Gear />
					</View>
					<Text style={{ flex: 1, ...Typography.body }}>{item.order}</Text>
				</View>
				<View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
					<TextInput style={{ ...Typography.body }} value={item.label} /*onChangeText={handleLabelChange}*/ />
					<Text style={{ ...Typography.body }}>Key: {item.key}</Text>
				</View>
				<DragHandle
					style={{
						flex: 1,
						backgroundColor: isActive ? Colors.tertiaryDarker : Colors.primaryDarker,
						borderTopRightRadius: 8,
						borderBottomRightRadius: 8,
						...Typography.body,
					}}
				/>
			</View>
		);
	};

	return (
		<View style={[props.style, styles.editor]}>
			<View style={{ flex: 1 }}>
				<DraggableFlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={item => `draggable-item-${item.key}`}
					onDragEnd={({ data: d }) => {
						for (const i in d) {
							if (d[i]) {
								d[i].order = parseInt(i, 10);
							}
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
		height: 75,
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

export default LoopEditor;
