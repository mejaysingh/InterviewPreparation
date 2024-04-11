// src/components/DropdownSelect.js
import React, { useMemo } from "react";

/* eslint-disable react/prop-types */
// TODO: upgrade to latest eslint tooling
//memoizes the passed in component along with the value of its props
const DropdownSelect = React.memo(function DropdownSelect({
  options,
  onChange,
}) {
  // Memoize the rendering of options
  const renderedOptions = useMemo(() => {
    return options.map((option) => (
      <option key={option.id} value={option.id}>
        {option.title}
      </option>
    ));
  }, [options]);

  return (
    <select onChange={onChange}>
      <option value="">Select</option>
      {renderedOptions}
    </select>
  );
});

export default DropdownSelect;
