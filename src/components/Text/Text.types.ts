import { ReactNode } from "react";

export interface TextProps {
	children: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	asChild?: boolean;
	className?: string;
}
