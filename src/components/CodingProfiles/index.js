import React from 'react';
import styled from 'styled-components';
import { codingprofiles } from '../../data/constants';

// Container for the entire CodingProfiles section
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  padding-bottom: 120px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px; /* Add margin to the bottom */
`;

// Wrapper for the coding profiles
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1100px;
  width: 100%;
`;

// Title styling
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

// Individual profile card styling with fixed size
const ProfileCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  width: 250px; /* Fixed width for uniformity */
  height: 350px; /* Fixed height for uniformity */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 220px; /* Adjusted width for smaller screens */
    height: 320px; /* Adjusted height for smaller screens */
  }
  @media (max-width: 500px) {
    width: 180px; /* Adjusted width for very small screens */
    height: 280px; /* Adjusted height for very small screens */
  }
`;

// Image styling for profile pictures
const ProfileImage = styled.img`
  width: 100%;
  height: 160px; /* Fixed height to ensure uniformity */
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 20px;
`;

// Profile name styling
const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
  text-align: center;
`;

// Button styling
const ProfileButton = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.card};
  }
  margin-top: auto; /* Pushes button to the bottom */
`;

// CodingProfiles Component
const CodingProfiles = () => {
  return (
    <Container id="coding-profiles">
      <Title>Coding Profiles</Title>
      <Wrapper>
        {codingprofiles.map(profile => (
          <ProfileCard key={profile.id}>
            <ProfileImage src={profile.image} alt={profile.name} />
            <ProfileName>{profile.name}</ProfileName>
            <ProfileButton href={profile.link} target="_blank" rel="noopener noreferrer">
              Visit Profile
            </ProfileButton>
          </ProfileCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default CodingProfiles;
