import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import { TextProps } from '.';

export const Text: React.FC<TextProps> = ({
	size = 'md',
	asChild,
	children,
	className,
}) => {
	const Comp = asChild ? Slot : 'span';

	return (
		<Comp
			className={clsx(
				'text-gray-100 font-sans',
				{
					'text-xs': size === 'sm',
					'text-sm': size === 'md',
					'text-md': size === 'lg',
				},
				className
			)}
		>
			{children}
		</Comp>
	);
};
