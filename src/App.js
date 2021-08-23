import "./css/Login.css";
import back from "./imgs/Aatrox.jpg";

function App() {
  return <div className="App">{Login()}</div>;
}

function Login() {
  return (
    <section id="login">
      <div className="login_container">
        <div className="login_user_signinBx">
          <div class="login_imgBx">
            <img id="login_back" src={back} alt="Aatrox" />
          </div>
          <div class="login_formBx">
            <form>
              <h2>Start</h2>
              <input type="text" placeholder="Username" />
              <input type="submit" value="Search" />
              <p class="login_p">
                상명대학교 캡스톤디자인 2021{" "}
                <a href="https://github.com/YUNJUSEOK/CapstoneDesign">GitHub</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
