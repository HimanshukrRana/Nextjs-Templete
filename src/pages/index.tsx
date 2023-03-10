import * as React from 'react';

import Button from '@/components/atoms/buttons/Button';
import Seo from '@/components/atoms/seo/Seo';
import Layout from '@/components/layout/Layout';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !Guide: -> Select !Guide: and CMD + SHIFT + F
// Before you begin editing, follow all comments with `Guide`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <p className='text-primary-solid'>test heading goes here</p>
        <p className='text-primary-light'>test heading goes here</p>
        <p className='text-primary-dark'>test heading goes here</p>
        <Button variant='primary'>primary submit</Button>
        <Button variant='outline'>outline submit</Button>
        <Button variant='light'>light submit</Button>
        <Button variant='dark'>dark submit</Button>


      </main>
    </Layout>
  );
}
