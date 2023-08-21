import './App.css';
import Header from './component/Header/Header';
import Container from '@mui/material/Container';
import Banner from './component/Banner/Banner';
import Features from './component/Features/Features';
import Testimonials from './component/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Container maxWidth="lg">
          <Header></Header>
          <Banner></Banner>
          <Features></Features>
          <Testimonials></Testimonials>
          </Container>
    </div>
  );
}

export default App;
