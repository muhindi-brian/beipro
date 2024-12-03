import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock login - replace with actual API call
    if (email && password) {
      set({
        user: {
          id: '1',
          name: 'John Doe',
          email: email
        },
        isAuthenticated: true
      });
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  }
}));