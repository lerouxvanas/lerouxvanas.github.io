import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Style from './styles';

function App() {
    return (
        <div className="App">
            <div className="reg tl" />
            <div className="reg tr" />
            <div className="reg bl" />
            <div className="reg br" />
            <header className="App-header">
                <div>
                    <h1>Leroux van As</h1>
                    <Style.ColorSwatch>
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </Style.ColorSwatch>
                    <Style.CategoryWrapper>
                        <div>Work</div>
                        <div>About</div>
                        <div>Contact</div>
                    </Style.CategoryWrapper>
                </div>
            </header>
        </div>
    );
}

export default App;
