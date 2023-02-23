import { FunctionComponent } from "react";
import styles from "../../testcase1/ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <div className={styles.getInTouch}>
        <div className={styles.getInTouchChild} />
        <div className={styles.groupParent}>
          <div className={styles.getInTouchParent}>
            <div className={styles.getInTouch1}>Get In Touch</div>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.leaveUsA}>Leave us a message</div>
          <div className={styles.groupContainer}>
            <img className={styles.groupItem} alt="" src="/group-7.svg" />
            <div className={styles.infomationTechnologiesBuildiParent}>
              <div className={styles.infomationTechnologiesBuildiContainer}>
                <p className={styles.infomationTechnologiesBuildi}>
                  Infomation technologies building,
                </p>
                <p className={styles.victoriaIslandLagos}>
                  Victoria Island, Lagos, Nigeria.
                </p>
              </div>
              <div className={styles.div}></div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div1}>+234 081-1236-4568</div>
              <div className={styles.div2}></div>
            </div>
            <div className={styles.helloinfocomngParent}>
              <div className={styles.helloinfocomng}>hello@info.com.ng</div>
              <div className={styles.div3}></div>
            </div>
            <img
              className={styles.groupInner}
              alt=""
              src="/rectangle-19@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.eMail}>E-Mail</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild2} />
          <div className={styles.message}>Message</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.pricingParent}>
          <b className={styles.pricing}>Pricing</b>
          <b className={styles.pricing}>Product</b>
          <b className={styles.pricing}>Blog</b>
          <b className={styles.pricing}>Contact</b>
        </div>
        <div className={styles.loggingParent}>
          <b className={styles.logging}>LOGGING</b>
          <b className={styles.logging1}>LOGGING</b>
        </div>
        <div className={styles.btnParent}>
          <div className={styles.btn}>
            <div className={styles.rectangle2} />
            <b className={styles.login}>Login</b>
          </div>
          <div className={styles.btn1}>
            <div className={styles.rectangle3} />
            <b className={styles.signUp}>Sign Up</b>
          </div>
        </div>
      </div>
      <div className={styles.nav2}>
        <div className={styles.rectangle4} />
        <img className={styles.facebookIcon} alt="" />
        <img className={styles.twitterIcon} alt="" />
        <img className={styles.instagramIcon} alt="" />
        <div className={styles.newsletter}>
          <div className={styles.subscribeToOurContainer}>
            <p className={styles.infomationTechnologiesBuildi}>
              Subscribe to our
            </p>
            <p className={styles.victoriaIslandLagos}>newsletter</p>
          </div>
          <div className={styles.form}>
            <div className={styles.rectangle5} />
            <div className={styles.emailAddress}>Email address</div>
            <div className={styles.submit}>
              <div className={styles.rectangle6} />
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
          </div>
        </div>
        <div className={styles.logoAbout}>
          <div className={styles.copyright2020}>
            Copyright © 2020. LogoIpsum. All rights reserved.
          </div>
          <div className={styles.loggingGroup}>
            <b className={styles.logging2}>LOGGING</b>
            <b className={styles.logging3}>LOGGING</b>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.about1}>About</div>
          <div className={styles.ourStory}>Our Story</div>
          <div className={styles.benefits}>Benefits</div>
          <div className={styles.team}>Team</div>
          <div className={styles.careers}>Careers</div>
        </div>
        <img className={styles.backToTop} alt="" />
      </div>
      <div className={styles.servicesParent}>
        <div className={styles.services}>Services</div>
        <div className={styles.emailMarketing}>Aggregate</div>
        <div className={styles.campaigns}>{`Tail & Search`}</div>
        <div className={styles.branding}>{`React & Analyze`}</div>
        <div className={styles.offline}>Lightning Search</div>
        <div className={styles.offline1}>Fast Setup</div>
        <div className={styles.offline2}>{`Integrate & Archive`}</div>
        <div className={styles.offline3}>Team Visibility</div>
        <div className={styles.offline4}>Log Velocity Analytics</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild3} />
        <div className={styles.submit1}>Submit</div>
      </div>
    </div>
  );
};

export default ContactUs;
