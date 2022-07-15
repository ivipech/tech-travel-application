import styled from 'styled-components';

export const Container = styled.section`
  background: ${(props) => props.theme || '#eee'};
`;

export const NewsletterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 1rem;
`;
