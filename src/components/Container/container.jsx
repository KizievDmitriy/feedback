import PropTypes from 'prop-types';
import { ContainerWrap } from './container.styled';

export const Container = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

Container.propTypes = {
  children: PropTypes.node,
};
