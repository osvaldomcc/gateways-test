import { render, screen } from '@testing-library/react';

import InfinityScroll from '@/sections/app/components/InfinityScroll';

describe('InfinityScroll', () => {
  const disconnect = vi.fn();
  const observe = vi.fn();

  beforeAll(() => {
    const IntersectionObserverMock = vi.fn(() => ({
      disconnect,
      observe,
    }));
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
    disconnect.mockReset();
    observe.mockReset();
  });

  it('should trigger observe', () => {
    const handleReachEnd = vi.fn();
    render(<InfinityScroll isLoading onReachEnd={handleReachEnd} />);
    expect(observe).toBeCalled();
  });

  it('should trigger disconnect', () => {
    const handleReachEnd = vi.fn();
    render(<InfinityScroll isLoading onReachEnd={handleReachEnd} />);
    expect(disconnect).toBeCalled();
  });

  it('should show the spinner', () => {
    const handleReachEnd = vi.fn();
    render(<InfinityScroll isLoading onReachEnd={handleReachEnd} />);
    expect(screen.getByRole('spinbutton')).toBeTruthy();
  });

  it('should not show the spinner', () => {
    const handleReachEnd = vi.fn();
    render(<InfinityScroll isLoading={false} onReachEnd={handleReachEnd} />);
    expect(screen.queryByRole('spinbutton')).toBeFalsy();
  });
});
