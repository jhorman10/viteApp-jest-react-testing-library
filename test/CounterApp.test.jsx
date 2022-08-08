import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const value = 100;
    const initialValue = 10;

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={value} />)
        //assert
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrarel valor inicial de 100 <Counterapp value={100} />', () => {
        render(<CounterApp value={value} />)
        //assert
        expect(screen.getByText(value)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(value.toString());
    })

    test('debe incrementar el valor inicial con el boton + 1', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+ 1'))
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    })

    test('debe decrementar el valor inicial con el boton - 1', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('- 1'))
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    })

    test('debe resetear el valor inicial con el boton Reset', () => {
        render(<CounterApp value={200} />)
        fireEvent.click(screen.getByText('+ 1'))
        fireEvent.click(screen.getByText('+ 1'))
        fireEvent.click(screen.getByText('+ 1'))

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        expect(screen.getByText(200)).toBeTruthy();
    })
});