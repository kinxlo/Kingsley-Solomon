import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FcLeft } from 'react-icons/fc';
import { AppContext } from '../../context/AppContext';

const DigitalResume = () => {
  const { getResume } = useContext(AppContext);
  return (
    <Box
      className='resume_wildCard'
      position={`relative`}
      zIndex={3}
      id='container--main'
    >
      <IconButton
        onClick={getResume}
        position={`fixed`}
        display={{ base: `none`, md: `block` }}
        right={5}
        bottom={20}
        variant='outline'
        className='accent'
        aria-label='Call Sage'
        borderRadius={`100%`}
        fontSize='20px'
        icon={<FcLeft />}
      />

      <section id='wrapper--hero' className='section--page'>
        {/* <Image boxSize={`7rem`} alt='pp' src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile0_dqiv0d.jpg' /> */}
        <div>
          <Text
            fontWeight={900}
            fontSize={`5xl`}
            my={`1.5rem`}
            as={`h1`}
            id='user-name'
          >
            Ifijeh Kingsley Solomon
          </Text>
          <Text id='bio'>
            Software developer - Frontend developer at{' '}
            <Link
              className='link'
              href='https://www.wewetube.com'
              target='_blank'
            >
              Wewetube.
            </Link>
          </Text>
          <Text mt={`1.5rem`}>👉 kinxly@gmail.com</Text>
        </div>
      </section>

      <section className='section--page'>
        <div id='socials--list'>
          <Link
            className='link'
            href='https://twitter.com/kinxlo'
            target='_blank'
          >
            Twitter
          </Link>
          <Link
            className='link'
            href='https://www.linkedin.com/in/kingsley-solomon-b90339b2/'
            target='_blank'
          >
            Linkedin
          </Link>
          <Link
            className='link'
            href='https://github.com/kinxlo'
            target='_blank'
          >
            Github
          </Link>
          <Link
            download
            className='link'
            rel='noopener noreferrer'
            href='/KingsleySolomon_Ifijeh_Resume.PDF'
          >
            Download Resume
          </Link>
        </div>
      </section>

      <section className='section--page'>
        <h2 className='h2'>Skills & Qualifications</h2>
        <ul id='qualifications--list'>
          <li>
            ✔️ 3 Years experience with frontend development
          </li>
          <li>✔️ Experience with Java and its framework</li>
          <li>✔️ Good knowledge in API Implementation.</li>
        </ul>
      </section>

      <section className='section--page'>
        <h2 className='h2'>Tech stack</h2>

        <div id='wrapper--techstack__items'>
          <div className='card--techstack'>
            <span>HTML, CSS, javascript</span>
          </div>
          <div className='card--techstack'>
            <span>Java, Spring</span>
          </div>
          <div className='card--techstack'>
            <span>React, chakra, Next JS</span>
          </div>

          <div className='card--techstack'>
            <span>Vue, Vuetify, Nuxt JS</span>
          </div>
        </div>
      </section>

      <section
        id='work-history-wrapper'
        className='section--page'
      >
        <h2 className='h2'>Work History</h2>

        <div className='line-break'></div>
        <div className='card--work-history'>
          <strong>🚧 FRONTEND DEVELOPER | WEWETUBE</strong>
          <p>9/2021 - Present</p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab minus veniam facilis ipsum
            dolorum fuga maiores cumque sequi corporis
            officia?
          </p>
          <Text as={`ul`} pl={10}>
            <li>
              Handled development and integration of new
              features into already existing products.
            </li>
            <li>
              Deployed production ready applications within
              my first five months
            </li>
            <li>
              Maintaining and improving quality of exiting
              projects
            </li>
          </Text>
        </div>
        <div className='line-break'></div>
        <div className='card--work-history'>
          <strong>
            🚧 FRONTEND DEVELOPER | TECHSTUDIO NG
          </strong>
          <p>6/2020 - 9/2021</p>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dolorem minus, distinctio nisi
            mollitia aliquam vero doloribus laborum eligendi
            fugiat quod?
          </p>
          <Text as={`ul`} pl={10}>
            <li>
              Teaching students the basics of frontend
              development. i.e HTML, CSS Bootstrap and
              Javascript and React
            </li>
            <li>
              Worked on the frontend of websites and Apps
            </li>
          </Text>
        </div>
      </section>

      <section className='section--page'>
        <h2 className='h2'>Projects & Accomplishments</h2>

        <div className='card--project'>
          <Link className='link' href='project1.html'>
            <span>🏆 </span>Built Link Laboratory management
            system for forensics lab
          </Link>
        </div>

        <div className='card--project'>
          <Link className='link' href='project1.html'>
            <span>🏆 </span>Documentation website - Lead
            team to re-build docs for agora.io
          </Link>
        </div>

        <div className='card--project'>
          <Link className='link' href='project1.html'>
            <span>🏆 </span>Ecommerce platform using paypal
            and stripe API for payment integration
          </Link>
        </div>

        <div className='card--project'>
          <Link className='link' href='project1.html'>
            <span>🏆 </span>Social Network - open source
            project
          </Link>
        </div>
      </section>
    </Box>
  );
};

export default DigitalResume;
