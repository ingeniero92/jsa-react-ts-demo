import { Provider as ReduxProvider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { store, AuthProvider } from "./store";
import { HeaderComponent, MainComponent, FooterComponent } from "./components";

import "./styles/scss/index.scss"; // GLOBAL SCSS

const JSAReactTSDemoApp = () => {
    return (
        <AuthProvider>
            <ReduxProvider store={ store }>
                <MemoryRouter>
                    <HeaderComponent />
                    <MainComponent />
                    <FooterComponent />
                </MemoryRouter>
            </ReduxProvider>
        </AuthProvider>
    )
}

export default JSAReactTSDemoApp;