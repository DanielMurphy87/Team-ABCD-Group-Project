import { render } from '@testing-library/react';
import { beforeAll, afterAll, test, expect } from 'vitest';
import Home from './Home';

const matchers = require('@testing-library/jest-dom/matchers');
expect.extend(matchers);

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