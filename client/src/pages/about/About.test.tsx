import React from 'react';
import { render } from '@testing-library/react';
import * as customMatchers from '@testing-library/jest-dom/matchers';
import { beforeAll, afterAll, test, expect } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import About from './About';
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';

expect.extend(customMatchers);
test('renders without crashing', () => {
    const { getByText } = render(<About />);
    expect(getByText(/ingredients in your pantry/)).toBeInTheDocument();
    expect(getByText(/Thank you for choosing/)).toBeInTheDocument();
});