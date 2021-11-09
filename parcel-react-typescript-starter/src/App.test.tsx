import * as React from 'react';
import App from './App';
import { getByTestId, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    it('waits for the button to be enabled to click it', async () => {
        const { container } = render(<App />);
        const getCountButton = () => getByTestId(container, 'count-button');

        await waitFor(
            () => expect(getCountButton()).not.toHaveAttribute('disabled'),
        );

        userEvent.click(getCountButton());
        expect(container).toMatchSnapshot();
    });
});
