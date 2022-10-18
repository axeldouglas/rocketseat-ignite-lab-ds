import React from 'react';

import { TextInputInputProps } from '.';

const TextInputInput: React.FC<TextInputInputProps> = ({ ...props }) => {
	return (
		<input
			className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
			{...props}
		/>
	);
};

TextInputInput.displayName = 'TextInput.Input';

export default TextInputInput;
