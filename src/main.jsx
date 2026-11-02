import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { Layout } from './components/Layout.jsx';
import { pages } from './pages/index.js';

const pageKey = document.body.dataset.page;
const Page = pages[pageKey];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout pageKey={pageKey}>
      <Page />
    </Layout>
  </StrictMode>,
);
