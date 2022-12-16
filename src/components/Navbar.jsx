import React, { useEffect } from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { ChartBar } from 'phosphor-react';

const Navbar = () => {

  const token = localStorage.getItem("token");

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">

      <Link className="navbar-brand navbar-logo" to="/"  >
        <i className="fas fa-rocket"></i>
        <div className="title">ISRO</div>
      </Link>


      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      {token ?
        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" >
                <i
                  className="fas fa-tachometer-alt">
                </i>Home
              </Link>
            </li>

            <li className="nav-item">
              {/* <i className="fa-solid fa-chart-simple"></i> */}
              <Link className="nav-link" to="/features" >

                <ChartBar size={20} />
                {/* <FontAwesomeIcon icon={solid("fa-chart-simple")} /> */}

                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/xls" >
                <i
                  className="far fa-clone">
                </i>XLS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >
                <i
                  className="far fa-chart-bar">
                </i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={() => {
                localStorage.clear();
                window.location.reload()
              }}>
                <i
                  className="far fa-copy">
                </i>LogOut
              </Link>
            </li>
          </ul>
        </div>
        : <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/login" >
                <i
                  className="fas fa-tachometer-alt">
                </i>Login
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/signup" >
                <i
                  className="fas fa-tachometer-alt">
                </i>Signin
              </Link>
            </li>
          </ul>
        </div>}
    </nav >
  )
}
export default Navbar;