import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from '../components/navbar';

import '../index.scss';

const SosPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className='error'>
          Nos techniciens travaillent actuellement sur cette page.
        </div>
      </main>
    </>
  );
};

export default SosPage;

export const Head: HeadFC = () => <title>Wati List - SOS</title>;
