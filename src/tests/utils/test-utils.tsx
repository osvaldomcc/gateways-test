import type { ReactNode } from 'react';

import { RenderHookOptions, render, renderHook } from '@testing-library/react';

import AuthProvider from '@/sections/app/contexts/AuthContext';

const wraper = (children: ReactNode) => <AuthProvider>{children}</AuthProvider>;

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => wraper(children),
    ...options,
  });
}

function customRenderHook<T, S>(
  hook: (initialProps: T) => S,
  options: Omit<RenderHookOptions<T>, 'wrapper'> = {},
) {
  return renderHook(hook, {
    wrapper: ({ children }) => wraper(children),
    ...options,
  });
}

export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, customRenderHook as renderHook };
