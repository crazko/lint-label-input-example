import React from 'react';

import './styles.css';

const label = 'label';

export default function App() {
  return (
    <form action="/">
      {/* ✅ true negative with text */}
      <div>
        <label>some text</label>
        <input type="text" />
      </div>

      {/* ❌ false positive with variable */}
      <div>
        <label>{label}</label>
        <input type="text" />
      </div>

      {/* ✅ true positive when nested */}
      <div>
        <label>
          {label}
          <input type="text" />
        </label>
      </div>
    </form>
  );
}
