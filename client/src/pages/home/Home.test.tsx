import { render } from '@testing-library/react';
import { beforeAll, afterAll, test, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Home';

const matchers = require('@testing-library/jest-dom/matchers');
expect.extend(matchers);


const queryClient = new QueryClient();

interface RenderWithRouterProps {
    children: Array<ReactNode>
}

const renderWithRouter = ({ children }: RenderWithRouterProps) => (
    render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={children[0]} />
                </Routes>
            </MemoryRouter>
        </QueryClientProvider>
    )
)

test('renders without crashing', () => {
    const message = 'Test message';
    // const { getByText } = render(<Home />);
    const { getByText } = (
        renderWithRouter({ children: [<Home />] })
    )
    expect(getByText(/What's for dinner/)).toBeInTheDocument();
});

/*
test('This is a test', async () => {
    const { findByText, findAllByText } = render(<Home />);
    const elements = await findAllByText(/Test message/);
    expect(elements.length).toBeGreaterThan(0);
});
*/