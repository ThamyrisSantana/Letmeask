import { useHistory } from "react-router-dom";

import { auth, firebase } from "../services/firebase";

import illustration from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImage from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

export function Home() {
  const history = useHistory();

  function handleCreatRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);

      history.push("/rooms/new");
    });
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vico</strong>
        <p>Tire ass duvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreatRoom}>
            <img src={googleIconImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala/>" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
