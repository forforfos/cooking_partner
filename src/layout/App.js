import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from '@emotion/styled'
import SearchPage from "../pages/search";
import ResultsPage from "../pages/results";

const Wrapper = styled('div')`
    body {
      margin: 0;
      padding: 0;
    }
`

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
