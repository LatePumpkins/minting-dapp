import { useNav } from '../customHooks/useNav';
import './Page.css';

import * as s from "../styles/globalStyles";
import styled from "styled-components";


import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from '../redux/blockchain/blockchainActions';
import { fetchData } from "../redux/data/dataActions";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;
  

export const StyledButton = styled.button`

  border-radius: 10px;
  border: none;
  background-color: var(--secondary);
  padding: 15px;
  font-family: "coder";
  src: local("coder"), url(MinecraftRegular-Bmg3.woff) format("woff");
  font-weight: bold;
  color: var(--secondary-text);
  width: 150px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const GreyoutButton = styled.button`

  border-radius: 10px;
  border: none;
  background-color: var(--greyed);
  padding: 15px;
  font-family: "coder";
  src: local("coder"), url(MinecraftRegular-Bmg3.woff) format("woff");
  font-weight: bold;
  color: var(--accent);
  width: 150px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const ParentRowDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px groove var(--secondary);
  background-color: var(--accent);
  border-radius: 10%;
  width: 200px;
  @media (min-width: 500px) {
    width: 100px;
  }
  @media (min-width: 800px) {
    width: 170px;
  }
  @media (min-width: 1200px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledMiniLogo = styled.img`
 
  background-color: var(--accent);
  width: 60px;
  @media (min-width: 600px) {
    width: 60px;
  }

`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

const Minting = () => {
    // useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
    
    const calculateTimeLeft = () => {
      let year = new Date().getFullYear();
      const difference = +new Date(`${year}-12-17`) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
  
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    });
  
    const claimNFTs = () => {
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost * mintAmount);
      let totalGasLimit = String(gasLimit * mintAmount);
      console.log("Cost: ", totalCostWei);
      console.log("Gas limit: ", totalGasLimit);
      setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit NFTrade.com to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
  
    const decrementMintAmount = () => {
      let newMintAmount = mintAmount - 1;
      if (newMintAmount < 1) {
        newMintAmount = 1;
      }
      setMintAmount(newMintAmount);
    };
  
    const incrementMintAmount = () => {
      let newMintAmount = mintAmount + 1;
      if (newMintAmount > 10) {
        newMintAmount = 10;
      }
      setMintAmount(newMintAmount);
    };
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    const getConfig = async () => {
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
    };
  
    useEffect(() => {
      getConfig();
    }, []);
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);

    const mintingRef = useNav('Minting');

    return (
        <section ref={mintingRef} id='mintingContainer'>
        
        <s.Container
        flex={1}
        ai={"center"}
      >
        
        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.GifContainer flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/GIF1.gif"} />
            <s.SpacerLarge />
            <StyledImg alt={"example"} src={"/config/images/GIF2.gif"} />
          </s.GifContainer>
          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 50,
              border: "10px groove var(--secondary)",
              boxShadow: "0px 0px 30px 30px rgba(0,0,0,0.7)",
            }}
          >

          <s.TextSubTitle
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
             1st Harvest:
            </s.TextSubTitle>

            <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Price: 0.10 <span style={{color: "var(--avalanche-red)" }}>AVAX</span> - 66% off <br></br>
                  Amount sold: <span style={{color: "#32CD32" }}>200/200</span>
                </s.TextTitle>
            <s.SpacerSmall/>    
            <GreyoutButton
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  SOLD OUT
                </GreyoutButton>  
            <s.SpacerMedium/>
            <s.TextSubTitle
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
             2nd Harvest:
            </s.TextSubTitle>
            <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Price: 0.1555 <span style={{color: "var(--avalanche-red)" }}>AVAX</span> - 50% off<br></br>
                  Amount: 0/300
                </s.TextTitle>      
          <s.TextSubTitle
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {timerComponents.length ? timerComponents : <span>You're late !</span>}
            </s.TextSubTitle>
            <s.SpacerMedium />


            
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {200} / {CONFIG.MAX_SUPPLY}
            </s.TextTitle>
            
            <s.SpacerSmall />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </s.TextTitle>
                <s.SpacerXSmall />
              
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.TextDescription>
                    <s.SpacerLarge />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT TO HARVEST
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                      
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerLarge />
            <s.TextDescription
                style={{
                  textAlign: "center",
                  color: "var(--accent-text)",
                }}
              >
                Please make sure you are connected to the right network (
                {CONFIG.NETWORK.NAME}).
              </s.TextDescription>
              <s.SpacerMedium/>
              <s.RowContainer>

              <a href='https://twitter.com/LatePumpKins'>
              <StyledMiniLogo alt={"example"} src={"/config/images/twitter-logo.png"} />
              </a>

              <s.SpacerLarge/>

              <a href='https://www.avax.network/'>
              <StyledMiniLogo alt={"example"} src={"/config/images/avax-logo.png"} />
              </a>

              <s.SpacerLarge/>

              <a href='https://discord.gg/exyt3NvdYY'>
              <StyledMiniLogo alt={"example"} src={"/config/images/discord-logo.png"} />
              </a>
              
              </s.RowContainer>

              <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              Contract:&nbsp;
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>

          </s.Container>

          <s.SpacerLarge />
          
          <s.GifContainer flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/GIF3.gif"} />
            <s.SpacerLarge />
            <StyledImg alt={"example"} src={"/config/images/GIF4.gif"} />
          </s.GifContainer>

        </ResponsiveWrapper>
        <s.SpacerLarge />        
    </s.Container>

        </section>


    );

};

export default Minting;



