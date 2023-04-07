import { findByText, render, waitFor } from '@testing-library/react';
import { beforeAll, afterAll, test, expect } from 'vitest';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import Search from './Search';
import React, { ReactNode, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

const matchers = require('@testing-library/jest-dom/matchers');
expect.extend(matchers);

const queryClient = new QueryClient();

interface RenderWithRouterProps {
    children: Array<ReactNode>
}

const renderWithRouter = ({ children }: RenderWithRouterProps) => (
    render(
        <Suspense fallback={<div><p>Loading...</p></div>}>
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/search/:beef']}>
                    <Routes>
                        <Route path='/search/:searchTerm' element={children[0]} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        </Suspense>
    )
)
/* 
jest.mock('react', () => {
    const React = jest.requireActual('react');
    React.Suspense = ({ children }: RenderWithRouterProps) => children;
    return React;
}); */

test('renders without crashing', async () => {
    const { getByText } = renderWithRouter({ children: [<Search />] })
    await waitFor( () => {expect(getByText(/meals found:/)).toBeInTheDocument();
    expect(getByText(/drinks found:/)).toBeInTheDocument()})
});