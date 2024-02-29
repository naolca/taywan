'use client';
import { Provider } from 'react-redux';
import { Store } from '../redux/store';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  );
}