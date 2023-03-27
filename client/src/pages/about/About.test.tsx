import React from 'react';
import { render } from '@testing-library/react';
import { beforeAll, afterAll, test, expect } from 'vitest';
import About from './About';

const matchers = require('@testing-library/jest-dom/matchers');
expect.extend(matchers);

test('renders without crashing', () => {
    const { getByText } = render(<About />);
    expect(getByText(/ingredients in your pantry/)).toBeInTheDocument();
    expect(getByText(/Thank you for choosing/)).toBeInTheDocument();
});