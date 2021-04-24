import styled from 'styled-components';

export const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #0a0b0c;
  text-align: center;
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 20px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  height: 400px;
`;

export const CardHeader = styled.header`
  padding: 16px 0;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardText = styled.p`
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  color: rgb(115, 138, 148);
  max-height: 130px;
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.color || '#aaa'};
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;
  margin: 0 auto;
  padding-top: 15px;

  &:hover {
    color: #777;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 200px;
  margin: 20px auto;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;
