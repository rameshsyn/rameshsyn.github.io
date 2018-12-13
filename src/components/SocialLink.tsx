import * as React from "react";
import styled from "styled-components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: green;
  padding: 5px;
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;

  &:hover {
    color: black;
  }
`;

interface socialLink {
  brandIcon: IconProp;
  link: string;
}

interface socialLinkProps {
  socialLinks: Array<socialLink>;
}

const SocialLink = ({ socialLinks }: socialLinkProps) => {
  return (
    <Wrapper>
      {socialLinks.map((l, i) => (
        <Link href={l.link} key={i}>
          <FontAwesomeIcon icon={l.brandIcon} size="2x" />
        </Link>
      ))}
    </Wrapper>
  );
};

export default SocialLink;
