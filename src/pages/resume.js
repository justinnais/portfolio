import React, { useEffect } from 'react';
import { Page, Seo } from 'gatsby-theme-portfolio-minimal';
import file from './justin-naismith-resume.pdf';

export default function Resume() {
  useEffect(() => {
      console.log(file);
    window.open(file);
    return () => {};
  }, []);
  return (
    <>
      <Seo title='Resume' />
      <Page>
        Check out my resume below
        <a href={file} download='Justin-Naismith-Resume' onClick={() => {console.log(file)}}>
          Download
        </a>
      </Page>
    </>
  );
}
