import React from 'react';

interface Props {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, selected, onChange }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(selected);

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="container">
      <div className="container__title" onClick={() => setIsOpen(!isOpen)}>
        <span className="container__header">{selectedOption || 'Select a tag'}</span>{' '}
        <span className="container__caret">v</span>
      </div>
      <div hidden={!isOpen} className="container__options">
        <ul className="container__list">
          {options.map((option) => (
            <li
              key={option.label}
              className="container__item"
              onClick={() => handleOptionClick(option.value)}
              style={{ opacity: option.value ? 1 : 0 }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
