import { FunctionComponent } from "react";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.iso}>
        <img className={styles.image2Icon} alt="" src="/image-21@2x.png" />
        <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
      </div>
      <b className={styles.b}>“</b>
      <div className={styles.iAlwaysObserve}>
        I always observe the people who pass by when I ride an escalator. I'll
        never see most of them again, so I imagine a lot of things about their
        lives... about the day ahead of them.
      </div>
      <div className={styles.hideoKojima}>Hideo Kojima</div>
      <img className={styles.signUpChild} alt="" src="/vector-1.svg" />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
      <div className={styles.back}>Back</div>
      <img
        className={styles.iconnavigationarrowBackIos}
        alt=""
        src="/iconnavigationarrow-back-ios-24px.svg"
      />
      <div className={styles.gamersParent}>
        <div className={styles.gamers}>Gamers</div>
        <img className={styles.groupChild} alt="" src="/group-3.svg" />
      </div>
      <div className={styles.klmii3cr9iiParent}>
        <img
          className={styles.klmii3cr9iiIcon}
          alt=""
          src="/klmii3cr9ii@2x.png"
        />
        <div className={styles.frameChild} />
        <div className={styles.groupParent}>
          <img className={styles.groupItem} alt="" src="/group-65.svg" />
          <b className={styles.free}>Free</b>
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupItem} alt="" src="/group-65.svg" />
          <b className={styles.mbmonth}>50 MB/Month</b>
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupItem} alt="" src="/group-65.svg" />
          <b className={styles.unlimitedSystems}>Unlimited Systems</b>
          <div className={styles.groupParent1}>
            <img className={styles.groupItem} alt="" src="/group-65.svg" />
            <b className={styles.unlimitedUsers}>Unlimited Users</b>
          </div>
        </div>
        <div className={styles.groupParent2}>
          <img className={styles.groupItem} alt="" src="/group-65.svg" />
          <b className={styles.additional16gbFirst}>
            Additional 16GB First Month
          </b>
        </div>
        <div className={styles.groupParent3}>
          <img className={styles.groupItem} alt="" src="/group-65.svg" />
          <b className={styles.unlimitedUsers}>48 hours Search</b>
        </div>
        <div className={styles.groupParent4}>
          <img className={styles.groupItem} alt="" src="/group-65.svg" />
          <b className={styles.unlimitedUsers}>7 days Archive</b>
        </div>
      </div>
      <div className={styles.joinUsAndStartLoggingYourParent}>
        <div className={styles.joinUsAnd}>
          Join Us and start Logging your File
        </div>
        <b className={styles.register}>{`Register ! `}</b>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.name}>E-Mail</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.name}>Company or Organisation</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild8} />
          <div className={styles.password}>Password</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild8} />
          <div className={styles.confirmPassword}>Confirm Password</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild10} />
          <div className={styles.registerAccount}>Register Account</div>
        </div>
        <div className={styles.or}>Or</div>
        <div className={styles.iAgreeTo}>{`I agree to terms & conditions`}</div>
        <div className={styles.frameItem} />
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild11} />
          <div className={styles.registerWithGoogle}>Register with Google</div>
          <img
            className={styles.flatColorIconsgoogle}
            alt=""
            src="/flatcoloriconsgoogle.svg"
          />
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild11} />
          <div className={styles.registerWithGithub}>Register with Github</div>
        </div>
        <img className={styles.frameInner} alt="" src="/ellipse-6.svg" />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-7.svg" />
        <div className={styles.rectangleParent6}>
          <div className={styles.rectangleDiv} />
          <div className={styles.nigeria}>Nigeria</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.rectangleDiv} />
          <div className={styles.gmt0000Utc}>(GMT +00:00) UTC</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <img className={styles.github1Icon} alt="" src="/github-1@2x.png" />
      </div>
    </div>
  );
};

export default SignUp;
