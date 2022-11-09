import {
  CardWrapper,
  AdviceNumber,
  AdviceText,
  CardImage,
  DiceButton,
} from "../styles/Card.styled";

export default function Card({ data, handleClick }) {
  const { advice, id } = data;
  return (
    <>
      <CardWrapper>
        <AdviceNumber>ADVICE #{id}</AdviceNumber>
        <AdviceText>"{advice}"</AdviceText>
        <CardImage />
        <DiceButton onClick={handleClick} />
      </CardWrapper>
    </>
  );
}
