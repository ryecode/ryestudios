import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';

const PINK = '#8eff5a';
const BLUE = '#00471a';
const WHITE = '#fefefe';
const BLACK = '#000000'

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE, color: isCurrentEventKey ? BLACK:WHITE, padding: '0.5em', borderRadius: '5px', height: '2.5em' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export const AccordionComponent = () => {

  const {userName} = useContext(AppContext)

  return (
    <Accordion defaultActiveKey="0" flush>
      <Card style={{background: "transparent", border: "none"}}>
        <Card.Header style={{background: "#434040", fontSize:'small' }}>
          <ContextAwareToggle eventKey="0">INTRODUCTION</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            
          <p id="aboutMe">
              Greetings{""} {userName}! I'm Rye, a Full-Stack Web Developer based in
              Antipolo City, Philippines. I recently graduated from KodeGo's
              Full-Stack Web Development Bootcamp this past June 2023. Where I
              was awarded <br />"
              <a
                href="https://youtu.be/Hq0qzBNZzQA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "hsl(45, 100%, 53%)", zIndex: 1 }}
              >
                Best in Coding
              </a>
              ".
              <br /><br />
              Since childhood, one of my passions has been computers. I can
              quickly learn stuff about computers and programming. My first code
              was a simple ATM program back in high school using Turbo Pascal!
              <br /><br />
              Now that my skills have been somewhat updated, I'm looking to get
              a chance to work for a good IT company, showcase my skills and
              passion for coding, and further expand my knowledge about
              programming.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card style={{background: "transparent", border: "none"}}>
        <Card.Header style={{background: "#434040", fontSize:'small' }}>
          <ContextAwareToggle eventKey="1">BACKGROUND</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I am another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
