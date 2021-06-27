import { ReactNode } from "react";
import cx from "classnames";

import "./styles.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

export function Question({
  content,
  author,
  children,
  isHighlighted = false,
  isAnswered = false,
}: QuestionProps) {
  return (
    <div
      className={cx(
        "questions",
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.avatar} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
