import React, {useRef} from 'react';
import Button from "../Button";

const handleChange = (onChange, onBlur, multiple) => (e) => {
  const files = Array.from(e.target.files);
  const data = multiple ? files : files[0];
  onChange(data);
  onBlur(data);
};

const FileInput = ({disabled, accept, multiple, onBlur, onChange, title}) => {
  const buttonRef = useRef(null);

  const onClick = () => {
    buttonRef.current.click()
  };
  return [
    <input disabled={disabled}
           type="file"
           ref={buttonRef}
           style={{display: "none"}}
           accept={accept}
           onChange={handleChange(onChange, onBlur, multiple)}
           multiple={multiple} key="hidden-button"/>,
    <Button title={title || "Choose File"} onClick={onClick} key="visible-button" disabled={disabled}/>
  ];
};

FileInput.defaultProps = {
  onBlur: () => {}
};


export default FileInput;