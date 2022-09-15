/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const DigitalResume = () => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);
  const active =
    colorMode == `light` ? `matrixDark!` : `matrixLight!`;
  return (
    <Box
      maxW={{
        base: `100%`,
        md: `80%`,
        lg: `60%`,
        xl: `50%`,
      }}
      width={`100%`}
      id='container--main'
      m={{ base: `initial`, md: `0 auto`, lg: `initial` }}
      px={`2em`}
    >
      <Box id='wrapper--hero' m={`1.5em 0 1em 0`}>
        <Box
          p={`1.5em`}
          className={`${
            colorMode == `light`
              ? `guide_line_dark`
              : `guide_line_light`
          } section-page`}
        >
          <Text
            className='font-sans'
            textTransform={`uppercase`}
            fontWeight={900}
            fontSize={`3xl`}
            id='user-name'
            mb={5}
            color={
              colorMode == `light` ? `accent` : `lightBg`
            }
          >
            Kingsley Solomon
          </Text>
          <Text id='bio'>
            Frontend developer at{' '}
            <Link
              fontWeight={`medium!`}
              color={active}
              href='https://www.wewetube.com'
              target='_blank'
            >
              Wewetube.
            </Link>
          </Text>
          <Text my={2}>
            Innovative Web Developer with 5 years of
            experience in software development and
            Demonstrated talent for frontend web development
            to optimize online presence. A maestro in
            frameworks such as React and Vue, as well as
            scripting languages such as JavaScript.
          </Text>
          <Text mt={`1.5rem`}>👉 kinxly@gmail.com</Text>
        </Box>
      </Box>
      <Box
        p={`1.5rem`}
        mb={`1em`}
        className={`${
          colorMode == `light`
            ? `guide_line_dark`
            : `guide_line_light`
        } section-page`}
      >
        <div id='socials--list'>
          <Link
            fontWeight={`bold!`}
            color={active}
            href='https://twitter.com/kinxlo'
            target='_blank'
          >
            Twitter
          </Link>
          <Link
            fontWeight={`bold!`}
            color={active}
            href='https://www.linkedin.com/in/kingsley-solomon-b90339b2/'
            target='_blank'
          >
            Linkedin
          </Link>
          <Link
            fontWeight={`bold!`}
            color={active}
            href='https://github.com/kinxlo'
            target='_blank'
          >
            Github
          </Link>
          <Link
            fontWeight={`bold!`}
            download
            color={active}
            rel='noopener noreferrer'
            href='/KingsleySolomon_Ifijeh_Resume.PDF'
          >
            Download Resume
          </Link>
        </div>
      </Box>
      <Box
        p={`1.5em`}
        mb={`1em`}
        className={`${
          colorMode == `light`
            ? `guide_line_dark`
            : `guide_line_light`
        } section-page`}
      >
        <h2
          color={
            colorMode == `light` ? `accent` : `lightBg`
          }
          className='h2'
        >
          Skills & Qualifications
        </h2>
        <ul id='qualifications--list'>
          <li>
            ✔️ Over 3 Years experience with frontend
            development.
          </li>
          {/* <li>✔️ Experience with Java and its framework</li> */}
          <li>✔️ Good knowledge in API Implementation.</li>
        </ul>
      </Box>
      <Box
        p={`1.5em`}
        mb={`1em`}
        className={`${
          colorMode == `light`
            ? `guide_line_dark`
            : `guide_line_light`
        } section-page`}
      >
        <h2
          color={
            colorMode == `light` ? `accent` : `lightBg`
          }
          className='h2'
        >
          Tech stack
        </h2>

        <div id='wrapper--techstack__items'>
          <div className='card--techstack'>
            <span className='font-mono'>
              HTML, CSS, javascript
            </span>
          </div>
          <div className='card--techstack'>
            <span className='font-mono'>Java, Spring</span>
          </div>
          <div className='card--techstack'>
            <span className='font-mono'>
              React, chakra, Next JS
            </span>
          </div>

          <div className='card--techstack'>
            <span className='font-mono'>
              Vue, Vuetify, Nuxt JS
            </span>
          </div>
        </div>
      </Box>
      <Box mt={10} id='work-history-wrapper'>
        <h2
          color={
            colorMode == `light` ? `accent` : `lightBg`
          }
          className='h2'
        >
          Work History
        </h2>

        <Box
          className={`${
            colorMode == `light`
              ? `guide_line_dark`
              : `guide_line_light`
          } card--work-history`}
        >
          <div>
            <strong>
              🚧 FRONTEND ENGINEER (contract) | ClapMi
            </strong>
            <p>2021-10 - Current</p>
            <Text as={`ul`} pl={10}>
              <li>
                Actively listened to customers' requests,
                confirming full understanding before
                addressing concerns.
              </li>
              <li>
                Created plans and communicated deadlines to
                complete projects on time.
              </li>
              <li>
                Created UX strategies, including detailed
                wireframes and mockups.
              </li>
              <li>
                Collaborated with team members to achieve
                target results.
              </li>
              <li>
                Translated UX and business requirements into
                elegant code solutions.
              </li>
            </Text>
          </div>
        </Box>
        <Box
          className={`${
            colorMode == `light`
              ? `guide_line_dark`
              : `guide_line_light`
          } card--work-history`}
        >
          <div>
            <strong>🚧WEB DEVELOPER| WEWETUBE</strong>
            <p>2021-09 - Current</p>
            <Text as={`ul`} pl={10}>
              <li>
                Planned website development, converting
                mockups into usable web presence with HTML,
                JavaScript, AJAX and JSON coding.
              </li>
              <li>
                Engaged with clients to plan and optimize
                site issues and queries.
              </li>
              <li>
                Oversaw technical issues and troubleshooting
                requests to resolve user problems.
              </li>
              <li>
                Collaborated with stakeholders during
                development processes to confirm creative
                proposals and design best practices.
              </li>
              <li>
                Multi-tasked across multiple functions and
                roles to meet deadlines and organizational
                expectations.
              </li>
              <li>
                Collaborated with stakeholders during
                development processes to confirm creative
                proposals and design best practices.
              </li>
              <li>
                Contributed to projects within Scrum project
                management environments.
              </li>
              <li>
                Transformed native applications into
                mobile-friendly products
              </li>
            </Text>
          </div>
        </Box>
        <Box
          className={`${
            colorMode == `light`
              ? `guide_line_dark`
              : `guide_line_light`
          } card--work-history`}
        >
          <div>
            <strong>
              🚧FRONTEND DEVELOPER| Strategic Dots
              (TechStudio) Ltd, Lagos, Nigeria
            </strong>
            <p>2020-07 - 2021-09</p>
            <Text as={`ul`} pl={10}>
              <li>
                Coded using HTML, CSS and JavaScript to
                develop features for both mobile and desktop
                platforms.
              </li>
              <li>
                Made recommendations for new technology
                integration based on suitability and
                alignment to business goals.
              </li>
              <li>
                Performed user experience quality assurance
                testing to identify and remedy shortcomings
              </li>
              <li>
                Took part in pre-project analysis and
                technical evaluations to create
                user-friendly interface and appropriate
                functionality to achieve corporate
                objectives.
              </li>
            </Text>
          </div>
        </Box>
        <Box
          className={`${
            colorMode == `light`
              ? `guide_line_dark`
              : `guide_line_light`
          } card--work-history`}
        >
          <div>
            <strong>
              🚧CODE INSTRUCTOR| Strategic Dots (TechStudio
              Academy) Ltd, Lagos, Nigeria
            </strong>
            <p>2020-07 - 2021-09</p>
            <Text as={`ul`} pl={10}>
              <li>
                Teaching students basics of frontend
                development. i.e HTML, CSS Bootstrap and
                Javascript and React.
              </li>
              <li>
                Collaborated with students to complete
                homework assignments, identify lagging
                skills and correct weaknesses.
              </li>
              <li>
                Supported students with helpful study habits
                and strategies to reduce "code block"
                through critical thinking.
              </li>
              <li>
                Facilitated online Frontend development
                classes.
              </li>
            </Text>
          </div>
        </Box>
        <Box
          className={`${
            colorMode == `light`
              ? `guide_line_dark`
              : `guide_line_light`
          } card--work-history`}
        >
          <div>
            <strong>
              🚧WEB DEVELOPER (contract)| Darex Engineering,
              Lagos
            </strong>
            <p>2021-02 - 2021-05</p>
            <Text as={`ul`} pl={10}>
              <li>
                Used critical thinking to break down
                problems, evaluate solutions and make
                decisions.
              </li>
              <li>
                Actively listened to customers' requests,
                confirming full understanding before
                addressing concerns.
              </li>
            </Text>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default DigitalResume;
