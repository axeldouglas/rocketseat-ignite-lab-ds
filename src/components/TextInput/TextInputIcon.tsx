import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { TextInputIconProps } from '.';

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => {
	return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>;
};

TextInputIcon.displayName = 'TextInput.Icon';

export default TextInputIcon;
