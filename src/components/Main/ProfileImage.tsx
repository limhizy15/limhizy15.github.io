import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 14px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
