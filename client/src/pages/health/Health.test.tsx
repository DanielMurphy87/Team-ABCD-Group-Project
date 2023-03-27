import React from 'react';
import { render } from '@testing-library/react';
import { beforeAll, afterAll, test, expect } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import Health from './Health';
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';

const matchers = require('@testing-library/jest-dom/matchers');
expect.extend(matchers);

const server = setupServer(
    rest.get(`${FOOD_API_BASE_URL}/filter.php`, (req, res, ctx) => {
        return res(ctx.json({ meals: [] }));
    }),
    rest.get(`${DRINKS_API_BASE_URL}/filter.php`, (req, res, ctx) => {
        return res(ctx.json({ drinks: [] }));
    })
);

beforeAll(() => server.listen());
afterAll(() => {
    server.resetHandlers();
    server.close();
});

test('renders without crashing', () => {
    const { getByText } = render(<Health />);
    expect(getByText(/The MealDB is:/)).toBeInTheDocument();
    expect(getByText(/The CocktailDB is:/)).toBeInTheDocument();
});