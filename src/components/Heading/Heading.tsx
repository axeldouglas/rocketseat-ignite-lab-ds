import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import { HeadingProps } from '.';

export const Heading: React.FC<HeadingProps> = ({
	size = 'md',
	asChild,
	children,
}) => {
	const Comp = asChild ? Slot : 'h2';

	return (
		<Comp
			className={clsx('text-gray-100 font-bold font-sans', {
				'text-lg': size === 'sm',
				'text-xl': size === 'md',
				'text-sxl': size === 'lg',
			})}
		>
			{children}
		</Comp>
	);
};
