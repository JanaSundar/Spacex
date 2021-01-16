import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import axios from 'axios';

import App from './App';
import Content from './components/Content';
import Filter from './components/Filter';
import { SpaceXProvider } from './store/SpaceXContext';
import { mockData } from './utils';

// Mocking axios
jest.mock('axios');

afterEach(cleanup);

describe('APP', () => {
  test('renders App Component', () => {
    render(<App />);
    const title = screen.getByText(/SpaceX Launch Programs/i);
    const name = screen.getByText(/Developed By Jana/i);
    expect(title).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});

describe('FILTER', () => {
  describe('renders Filter Component', () => {
    it('check text is present', () => {
      render(<Filter />);
      const title = screen.getByText(/Filters/i);
      expect(title).toBeInTheDocument();
    });
  });

  test('button click event', async () => {
    act(() => {
      render(
        <SpaceXProvider>
          <Filter />
          <Content />
        </SpaceXProvider>
      );
    });

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

    const button = document.querySelector('.filter__btn');
    fireEvent.click(button);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });
});

describe('CONTENT', () => {
  test('renders App Component', () => {
    const { container } = render(<Content />);
    const allContentCard = container.querySelectorAll('.content__card');
    expect(allContentCard).toHaveLength(0);
  });
});
