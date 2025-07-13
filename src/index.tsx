import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css'

class PerxShop {
    private root: ReactDOM.Root | null = null;

    start(config: { dealers?: string[] }, containerId: string = 'app-root') {
        const container = document.getElementById(containerId);
        if (!container) throw new Error(`Container ${containerId} not found`);

        this.root = ReactDOM.createRoot(container);
        this.root.render(
            <React.StrictMode>
                <App dealers={config.dealers} />
            </React.StrictMode>
        );
    }

    stop() {
        this.root?.unmount();
    }
}

declare global {
    interface Window {
        App: typeof PerxShop;
    }
}

window.App = PerxShop;