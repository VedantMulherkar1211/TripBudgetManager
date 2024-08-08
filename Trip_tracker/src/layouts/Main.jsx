// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";

// components
import Nav from "../components/Nav";

// helper functions
import { fetchData } from "../helpers"

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  const email = fetchData("email");
  const password = fetchData("password");
  return { userName, email, password };
}

const Main = () => {
  const { userName, email, password } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} email={email} password={password} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
}

export default Main;
