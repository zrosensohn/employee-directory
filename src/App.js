import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Directory from './pages/Directory/Directory';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Wrapper>
                <Container>
                    <Route exact path='/directory' component={Directory} />
                </Container>
            </Wrapper>
            <Footer />
        </Router>
    )
}

export default App;