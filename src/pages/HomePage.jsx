import { userContext } from '../contexts/UserContext';

export default function HomePage() {
  const { isGuest, username } = userContext();
  return (
    <div className="container py-5">
      {isGuest ? (
        <>
          <h1>Non hai i permessi necessari</h1>
          <p>
            <strong>Suggerimento: </strong>prova a loggare
          </p>
        </>
      ) : (
        <h1>Benvenuto {username} </h1>
      )}
    </div>
  );
}
