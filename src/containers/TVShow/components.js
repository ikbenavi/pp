import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom,#FFBD54 0%,#fec458 50%,#FFBC3A 100%);
  min-height: 1000px;
  overflow: hidden;
`;

export const Title = styled.div`
  font-family: sans-serif;
  font-size: 26px;
  margin-top: 16px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  margin-right: 16px;
  max-height: 195px;
  overflow: auto;
`;

export const Cover = styled.img`
  padding: 8px;
  border-radius: 8px;
  margin-right: 16px;
  height: 195px;
`;

export const Summary = styled.div`
  display: flex;
`;

export const Episodes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  height: 600px;
  overflow: auto;
  justify-content: space-between;
`;

export const EpisodeLink = styled(Link)`
  display: flex;
  background-color: #000000;
  opacity: 0.8;
  color: #FFBD54;
  align-items: center;
  border-radius: 8px;
  border: 1px solid;
  margin: 8px;
  padding: 8px;
  text-decoration: none;
`;

export const BackLink = styled(EpisodeLink)`
  background-color: #FFBD54;
  color: #000000;
  width: 100px;
`;