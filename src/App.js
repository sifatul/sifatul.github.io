import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container-fluid pt-5 px-0">
      <div>
        <img src="https://i.ibb.co/NSD44RP/me.jpg" class="profile-image mt-4 ml-2" />
        <div class="row photo pt-5 d-flex align-content-center">

          <h1 class="title d-inline">MD SIFATUL ISLAM | </h1>
          <span class="px-2 sub_title pt-1">Web/Application Developer</span>
        </div>


      </div>


      <div class="introduction d-flex d-row flex-wrap" id="about_me">


        <div class="intro-container  pr-4">

          <div class="py-3 hello">
            <span>HELLO</span>
            <span>World</span>
          </div>
          <div class="row">
            <span class="py-2">I am <strong>SIFATUL </strong>. I have worked as a <i>web</i> developer for
            almost two years and six months as an <i>android </i>developer. </span>
            <strong class="py-1"> I would love to be a part of your projects, learn more and
            grow.</strong>
          </div>

          <div class="row social intro mt-2">
            <a href="https://www.linkedin.com/in/mdsifatulislam?trk=nav_responsive_tab_profile"
              target="_blank"><i class="fab fa-linkedin-in"></i></a>

            {/* <a href="https://www.facebook.com/md.sifatulislam" target="_blank"> <i
              class="fab fa-facebook-f"></i></a> */}

            {/* <a href="https://twitter.com/sifii2013" target="_blank"> <i class="fab fa-twitter"></i></a> */}

            {/* <a href="https://www.pinterest.com/mdsifatulislam/"  target="_blank"><i aria-hidden="true" class="fa fa-pinterest"></i></a>  */}

            <a href="https://github.com/Sifatul" target="_blank"> <i class="fab fa-github"></i></a>

            <a href="http://codepen.io/sifii2013/" target="_blank"><i class="fab fa-codepen"
              aria-hidden="true"></i></a>
          </div>

        </div>
        <div class="d-flex board-container">

          <div class="board my-4 mx-auto">
            <div class="monitor">

              <div class="option_box">
                <div class="result option"></div>
                <div class="col-6 col-sm-6 col-md-6 ">

                  <div class="option" id="opt1"></div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 ">
                  <div class="option" id="opt2"></div>
                </div>

              </div>

              <div class=" back_button"><i class="fas fa-arrow-left"></i> </div>

            </div>
            <div class="game_board">
              <div class="row">
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="0"></span>
                </div>
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="1"></span>
                </div>
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="2"></span>
                </div>
              </div>
              <div class="row">
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="3"></span>
                </div>
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="4"></span>

                </div>
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="5"></span>

                </div>
              </div>
              <div class="row">
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="6"></span>
                </div>
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="7"></span>
                </div>
                <div class="col-4 col-sm-4 col-md-4 ">
                  <span class="move" data-move="8"></span>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
</script>

<script type="text/javascript" src="assets/myscripts.js"></script>
<script type="text/javascript" src="assets/tic_tac_toe.js"></script>

    </div>
  );
}

export default App;
