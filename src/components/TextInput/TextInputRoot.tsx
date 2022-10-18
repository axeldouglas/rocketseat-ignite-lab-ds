import React from 'react';

import { TextInputRootProps } from '.';

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => {
	return (
		<div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full outline-none focus-within:ring-2 ring-cyan-300'>
			{children}
		</div>
	);
};

TextInputRoot.displayName = 'TextInput.Root';

export default TextInputRoot;
