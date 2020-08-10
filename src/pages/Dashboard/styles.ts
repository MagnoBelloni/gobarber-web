import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    max-width: 200px;
    background: #c53030;
    color: #fff;

    &:hover {
      background: ${shade(0.2, '#c53030')};
    }
  }
`;
