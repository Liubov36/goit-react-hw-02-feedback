import PropTypes from 'prop-types';
import { Section, Title } from './Section.styled';

export const Chapter = ({ title, children }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};