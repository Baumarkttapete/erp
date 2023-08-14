import React from 'react';
import classes from '../../css/MagicTriangle.module.css';

interface TriangleSliderProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  locked: boolean;
  onLockToggle: () => void;
}

const TriangleSlider: React.FC<TriangleSliderProps> = ({ label, value, onChange, locked, onLockToggle }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!locked) {
      const newValue = parseInt(event.target.value, 10);
      onChange(newValue);
    }
  };

  return (
    <div className={classes.sliderContainer}>
      <label>{label}</label>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        disabled={locked}
      />
      <span>{value}</span>
      <input
        type="checkbox"
        checked={locked}
        onChange={onLockToggle}
        disabled={!value || value === 100}
      />
      <label>Lock</label>
    </div>
  );
};


export default TriangleSlider;