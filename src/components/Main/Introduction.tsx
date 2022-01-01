import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <Title>
            Hoodie<PointText>.</PointText>diary
          </Title>
          <SubTitle>FE개발자의 주저리</SubTitle>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction

const Background = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 768px;
  height: 160px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 160px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  font-size: 35px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`
const PointText = styled.span`
  color: #bfb2ab;
`
