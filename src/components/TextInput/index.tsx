import TextInputRoot from './TextInputRoot';
import TextInputInput from './TextInputInput';
import TextInputIcon from './TextInputIcon';
import { TextInputInputProps, TextInputRootProps, TextInputIconProps } from './TextInput.types';

export type { TextInputInputProps, TextInputRootProps, TextInputIconProps };

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}