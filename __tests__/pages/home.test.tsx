import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

const server = setupServer(
    rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.json({ greeting: 'hello there' }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads home page', async () => {
    render(<Home />);

    expect(screen.getByText('Home')).toBeVisible();
});
