import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import { renderWithProviders } from '../render';

test('Sort buttons are loaded and present', () => {
    renderWithProviders(<Home />);

    // If we can find them we know the user can see them.
    expect(screen.getByText('sort alphabetically')).toBeVisible();
    expect(screen.getByText('sort by price')).toBeVisible();
    expect(screen.getByText('sort by star rating')).toBeVisible();
});

test('At least one card is present', () => {
    renderWithProviders(<Home />);

    expect(screen.getByText('Aguamarina Golf Hotel')).toBeVisible();
});

test('Descriptions cannot be seen by default', () => {
    renderWithProviders(<Home />);

    expect(
        screen.queryByText('The Aguamarina Golf Hotel has an exceptional location')
    ).not.toBeInTheDocument();
});

test('Descriptions can be seen after an appropriate button click', async () => {
    renderWithProviders(<Home />);
    const firstBtn = screen.getAllByText('Read more about this hotel')[0];

    expect(firstBtn).toBeInTheDocument();

    fireEvent.click(firstBtn);

    // If I can see the first overview piece of text I know the drop down has expanded.
    await waitFor(() => {
        expect(screen.getAllByText('Overview')[0]).toBeVisible();
    });
});
