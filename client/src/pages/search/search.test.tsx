import { render } from '@testing-library/react';
import * as customMatchers from '@testing-library/jest-dom/matchers';
import { beforeAll, afterAll, test, expect } from 'vitest';
import Search from './Search';

expect.extend(customMatchers);
test('renders without crashing', () => {
    const { getByText } = render(<Search />);
    expect(getByText(/Search/)).toBeInTheDocument();
    expect(getByText(/10 Results/)).toBeInTheDocument();
});