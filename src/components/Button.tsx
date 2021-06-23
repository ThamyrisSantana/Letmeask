import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; //...props = está pegando todos os atributos de um button do html

export function Button(props: ButtonProps) {
  //...props = asociando os atributos a props
  return (
    <div>
      <button className="button" {...props}></button>
      {/* os três pontos faz que pegue todas as props  */}
    </div>
  );
}
