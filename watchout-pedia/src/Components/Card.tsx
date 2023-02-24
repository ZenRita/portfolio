import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { AiFillStar} from "react-icons/ai";

const StyledLink = styled(Link)`
  display: block;
  margin-inline: 10px;
  text-decoration: none;
`;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Info = styled.div`
  width: 100%;
  text-align: left;
`;

const Title = styled.h4`
  max-width: 200px;
  margin-bottom: 3px;
  color: #292a32;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  white-space: nowrap;
`;

const Keyword = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  color: #292a32;
  font-size: 13px;
  font-weight: 400;
`;

const Average = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  color: #74747b;
  font-size: 13px;
  font-weight: 400;
`;

interface Props {
    linkUrl: string;
    title: string;
    year: string;
    posterPath: string;
    voteAverage: number;
}
const Card: React.FC<Props> = ({ linkUrl,title,posterPath,year,voteAverage }) => {
    return (
        <StyledLink to={linkUrl}>
            <Base>
                <ImageWrapper>
                    <Image src={posterPath} alt={`${title}의 포스터`}/>
                </ImageWrapper>
                <Info>
                    <Title>{title}</Title>
                    <Keyword>{year}</Keyword>
                    <Average>
                        <span>평균</span>
                        <span>&nbsp;<AiFillStar /></span>
                        <span>{voteAverage}</span>
                    </Average>
                </Info>
            </Base>
        </StyledLink>
    )
}

export default Card;