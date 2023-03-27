import { render } from '@testing-library/react';
import * as customMatchers from '@testing-library/jest-dom/matchers';
import { beforeAll, afterAll, test, expect } from 'vitest';
import Home from './Home';

expect.extend(customMatchers);
test('renders without crashing', () => {
    const message = 'Test message';
    const { getByText } = render(<Home message={message} />);
    expect(getByText(/What's for dinner/)).toBeInTheDocument();
});

test('This is a test', async () => {
    const { findByText, findAllByText } = render(<Home message='' />);
    const elements = await findAllByText(/Test message/);
    expect(elements.length).toBeGreaterThan(0);
});