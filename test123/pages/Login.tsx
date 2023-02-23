import { FunctionComponent } from "react";
import styles from "../case 1/Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
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
      <img className={styles.loginChild} alt="" src="/vector-1.svg" />
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
          <b className={styles.daysArchive}>7 days Archive</b>
        </div>
        <div className={styles.groupParent4}>
          <img className={styles.groupItem} alt="" src="/group-65.svg" />
          <b className={styles.hoursSearch}>48 hours Search</b>
        </div>
      </div>
      <div className={styles.welcomeBackFriendParent}>
        <div className={styles.welcomeBackFriend}>Welcome Back Friend</div>
        <b className={styles.login1}>{`Login ! `}</b>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.eMail}>E-Mail</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.password}>Password</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild7} />
          <div className={styles.login2}>Login</div>
        </div>
        <div className={styles.or}>Or</div>
        <div className={styles.forgotPassword}>Forgot Password</div>
        <div className={styles.createAnAccount}>Create An Account</div>
        <div className={styles.frameItem} />
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild8} />
          <div className={styles.loginWithGithub}>Login with Github</div>
        </div>
        <img className={styles.github1Icon} alt="" src="/github-1@2x.png" />
      </div>
    </div>
  );
};

export default Login;
