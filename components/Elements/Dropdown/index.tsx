import React from 'react';
import { useHandleClickOutside } from '@/helpers/hooks';
import styles from './index.module.scss';
import Icon from '@/components/Elements/Icons/Icon';

interface Props {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, selected, onChange }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(selected);
  const selectRef = useHandleClickOutside(() => setIsOpen(false));

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    setSelectedOption(value);
    onChange(value);
  };

  const handleSelect = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={styles.container} ref={selectRef}>
      <div className={styles.container__title} onClick={handleSelect}>
        <span className={styles.container__header}>{selectedOption || 'Select a tag'}</span> <Icon name="caret" />
      </div>
      {isOpen && (
        <ul className={styles['container__list']}>
          {options.map((option) => (
            <li
              key={option.label}
              className={styles['container__item']}
              onClick={() => handleOptionClick(option.value)}
              style={{ opacity: option.value ? 1 : 0 }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
