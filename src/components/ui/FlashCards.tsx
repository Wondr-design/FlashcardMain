import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
interface CardProps {
  q: {
    id: number;
    question: string;
    answer: string;
  };
  selectedId: number | null;
  handleClick: (id: number) => void;
}
const FlashCards = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };
  return (
    <>
      <div className="flashcards">
        {questions.map((q) => (
          <Card
            key={q.id}
            q={q}
            selectedId={selectedId}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};

const Card = ({ q, selectedId, handleClick }: CardProps) => {
  return (
    <div
      onClick={() => handleClick(q.id)}
      className={q.id === selectedId ? "selected" : ""}
    >
      {q.id === selectedId ? q.answer : q.question}
    </div>
  );
};

export default FlashCards;
