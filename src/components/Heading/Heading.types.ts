import { ReactNode } from "react";

export interface HeadingProps {
	children: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	asChild?: boolean;
}
