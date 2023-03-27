import { render } from '@testing-library/react';
import { beforeAll, afterAll, test, expect } from 'vitest';
import Search from './Search';

const matchers = require('@testing-library/jest-dom/matchers');
expect.extend(matchers);

test('renders without crashing', () => {
    const { getByText } = render(<Search />);
    expect(getByText(/Search/)).toBeInTheDocument();
    expect(getByText(/10 Results/)).toBeInTheDocument();
});