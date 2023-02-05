import Header from "./Header";
import Menu from "./Menu";
import Reservation from "./Reservation";

function Home() {
    return (
      <>
      <div>
        < Header />
        <Reservation />
        <Menu/>
      </div>
      </>
    );
  }

  export default Home;