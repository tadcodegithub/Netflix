import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_inner_container}>
        {/* Footer first column */}
        <div>
          <div className={styles.footer_social_media_icons}>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <ul>
            <li>
              <a href="">Audio Description</a>{" "}
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Legal Notice</a>
            </li>
          </ul>
        </div>
        {/*Footer second column*/}
        <div className="footer_data">
          <div className="">
            <ul>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Cookie Preferences</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer third column */}
        <div>
          <ul>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Term of uses</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
          </ul>
        </div>
        {/* Footer fourth column */}
        <div>
          <ul>
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.source_and_copy}>
        <p>Service Code</p>
        <div className="copywrite">&copy;199-2025 Netflix, Inc..</div>
      </div>
    </div>
  );
}

export default Footer;
