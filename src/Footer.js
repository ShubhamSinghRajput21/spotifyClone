import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="" alt="" className="footer__albumLogo" />
        <div className="footer__songInfo">
          <h4>Yeam</h4>
          <p>me</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline className="footer__icon" fontSize="large" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay className="footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDown className="footer__icon" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
