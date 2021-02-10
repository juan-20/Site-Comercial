import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  >img{
    height: 50px;
    width: 50px;
  }
`;
