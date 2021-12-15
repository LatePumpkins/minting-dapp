import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';


import * as s from "../styles/globalStyles";
import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 250px;
  @media (min-width: 767px) {
    width: 600px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

const Rewards = () => {
    // useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
    
    const rewardsRef = useNav('Rewards');

    return (
        <section ref={rewardsRef} id='rewardsContainer'>

<s.Container
            flex={1}
            ai={"center"}
          >
            <s.TextHuge
                          style={{
                            textAlign: "center",
                            color: "var(--primary-text)"   ,
                            fontWeight: "normal",           
              
                          }}
                        >
                          "Rewarding some of our lucky harvesters"
                        </s.TextHuge>
                        <s.SpacerMedium />

            <s.TextSubTitle
              style={{
                width: "95%",
                textAlign: "left",
                color: "var(--accent-text)"              

              }}
            >
              <ul style={{
                display: 'list-item',
                listStyleImage: 'url(public/config/images/avax-logo.png)'}}>
                <li> 1. Ahead of the Late Harvest there will be collaborations with some of our favourite Avalanche projects and influencers to give up to 100 free Pumpkins away!</li>
                <li> 2. At 33% minted our 5 most prolific early minters will each be airdropped a completely free Pumpkin.</li>
                <li> 3. At 66% minted we'll give away at least 30 AVAX worth of prizes. 5 AVAX each to 6 winning entries. 1 pumpkin harvested = 1 entry.</li>
              </ul> 
            
            </s.TextSubTitle>
            <s.SpacerLarge/>
          
          

          </s.Container>
        </section>


          );

      };


  
      export default Rewards;
