import React from 'react';
import Button from "../Button";
import renderIf from 'render-if';
import './FileBase64.scss';

const handleChange = (onChange, onBlur, multiple) => (e) => {
    const files = Array.from(e.target.files);
    const allFiles = [];
    files.forEach(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            allFiles.push({
                name: file.name,
                size: file.size,
                type: file.type,
                sizeKB: file.size / 1024,
                base64: reader.result.split(',')[1]
            });

            if (allFiles.length === files.length) {
                const value = multiple ? allFiles : allFiles[0];
                onChange(value);
                onBlur(value);
            }
        }
    })
};

const FileBase64 = ({disabled, accept, multiple, onBlur, onChange, value, error, invalid}) => {
    let inputRef = null;

    const onClick = () => {
        if(inputRef) {
            inputRef.click()
        }
    };

    return (
        <div class="file-base64-input">
            <input disabled={disabled}
                   type='file'
                   ref={input => inputRef = input}
                   accept={accept}
                   style={{display: "none"}}
                   onChange={handleChange(onChange, onBlur, multiple)}
                   multiple={multiple}/>
            <Button title="Choose Image" onClick={onClick}/>
            {renderIf(invalid)(() => (
                <span class="error">{error}</span>
            ))}
            {renderIf(value)(() => [
                <span class="file-info" key="file-info-name">Name: {value.name}</span>,
                <span class="file-info" key="fil-info-size">Size: {value.size / 1000}KB</span>
            ])}
        </div>
    )
};

export default FileBase64;