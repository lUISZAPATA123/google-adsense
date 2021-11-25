import styled from "styled-components";

interface Props {
  img: string;
}

export default function Hero() {
  return <HeaderHero img="cdho.jpg"></HeaderHero>;
}

const HeaderHero = styled.div`
  height: 90vh;
  width: 100%;
  background-size: 100% 100%;
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props: Props) => props.img});
  @media screen and (max-width: 768px) {
    background-size: contain;
    height: 166px;
  }
`;
