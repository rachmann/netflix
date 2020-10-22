import styled from 'styled-components/macro';
// ^^ you want to import macro so that your div class names in HTML have the names of this component
//   - in this case, it will be generated as something like:
//      <div class="jumbotron__Inner-es77m8-0 kyyBQJ"><p>Hello again!!</p></div>
//    instead of just something like:
//      <div class="es77m8-0 kyyBQJ"><p>Hello again!!</p></div>
// this is how you add a template to a styled component -> everything between back quotes ``
export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* this is how you pass a property to a styled component 
       - then look in index.js of this component for calling method
       - here, you can make the flex from left or right based on how you call it */
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item =  styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;


export const Container = styled.div`
  @media (max-width: 1000px){
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px){
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1em;
  margin-bottom: 8px;

  @media (Max-width: 600px){
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px){
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

