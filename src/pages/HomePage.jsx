import { useUserContext } from '../contexts/UserContext';

export default function HomePage() {
  const { isGuest, username } = useUserContext();
  return (
    <div className="container py-5">
      {isGuest ? <h1>Non hai i permessi necessari</h1> : <h1>Benvenuto {username} </h1>}
    </div>
  );
}
