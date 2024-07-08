import React from 'react';

export interface WindowSizeContextType {
  windowSize: { innerWidth: number; innerHeight: number };
}

export const WindowSizeContext = React.createContext<WindowSizeContextType>({
  windowSize: { innerWidth: 0, innerHeight: 0 },
});
