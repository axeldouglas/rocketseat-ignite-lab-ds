import { Meta, StoryObj } from '@storybook/react';
import { EnvelopeSimple } from 'phosphor-react';
import { TextInput, TextInputInputProps } from '.';

export default {
	title: 'Components/TextInput',
	component: TextInput.Root,
	args: {
		children: <TextInput.Input placeholder='Type your full name' />,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {};

export const InputIcon: StoryObj<TextInputInputProps> = {
	args: {
		children: [
			<TextInput.Icon>
				<EnvelopeSimple />
			</TextInput.Icon>,
			<TextInput.Input placeholder='Type your e-mail address' />,
		],
	},
};
