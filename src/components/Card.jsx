import {
  CardContainer,
  AdviceNumber,
  AdviceText,
  CardImage,
  DiceButton,
} from "../styles/Card.styled";

export default function Card({ data, handleClick }) {
  const { advice, id } = data;
  return (
    <>
      <CardContainer>
        <AdviceNumber>ADVICE #{id}</AdviceNumber>
        <AdviceText>"{advice}"</AdviceText>
        <CardImage />
        <DiceButton onClick={handleClick} />
      </CardContainer>
    </>
  );
}
