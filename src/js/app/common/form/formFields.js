import formField from './FormField';
import InputControl from './Input';
import SelectControl from '../form/Select';
import MultiselectControl from "./Multiselect";
import FileInputControl from "./FileInput";
import DatePickerControl from './DatePicker';
import FileBase64Control from './FileBase64';

export const Input = formField(InputControl);
export const Select = formField(SelectControl);
export const Multiselect = formField(MultiselectControl);
export const FileInput = formField(FileInputControl);
export const DatePicker = formField(DatePickerControl);
export const FileBase64 = formField(FileBase64Control);