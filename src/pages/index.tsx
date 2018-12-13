import * as React from "react";
import styled from "@styled-components";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import profileImageLink from "@images/profile_pic.png";
import SocialLink from "@components/SocialLink";
import Page from "@components/Page";

const Profile = styled.div`
  margin-top: 100px;
`;

const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

const ProfileName = styled.h1`
  text-align: center;
`;

const socialLinks = [
  {
    brandIcon: faFacebook,
    link: "https://facebook.com/rameshsyn"
  },
  {
    brandIcon: faTwitter,
    link: "https://twitter.com/ramesh_syn"
  },
  {
    brandIcon: faLinkedin,
    link: "https://linkedin.com/in/rameshsyn"
  },
  {
    brandIcon: faGithub,
    link: "https://github.com/rameshsyn"
  }
];

export default () => (
  <Page>
    <Profile>
      <ProfileImage src={profileImageLink} />
      <ProfileName>Ramesh Syangtan</ProfileName>
      <SocialLink socialLinks={socialLinks} />
    </Profile>
  </Page>
);
