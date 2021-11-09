import App from './App';
import {
    getByLabelText,
    getByTestId,
    getByText,
    queryByTestId,
    waitFor,
} from '@testing-library/dom';

describe('App', () => {
    it('prints the provided text', async () => {
        const text = 'Lorem ipsum';
        const container = App();

        const input = getByLabelText(container, 'Enter some text');
        input.value = text;

        getByText(container, 'Print').click();

        await waitFor(() => expect(
            queryByTestId(container, 'printed-text')).toBeTruthy(),
        );

        expect(getByTestId(container, 'printed-text')).toHaveTextContent(text);

        expect(container).toMatchSnapshot();
    });
});
