import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { Tbl } from "./Tbl";




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

export const StyledLogo = styled.img`
  width: 250px;
  @media (min-width: 767px) {
    width: 600px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px groove var(--secondary);
  background-color: var(--accent);
  border-radius: 10%;
  width: 200px;
  @media (min-width: 200px) {
    width: 150px;
  }
  @media (min-width: 1000px) {
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

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-01`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >
        <StyledLogo 
        alt={"logo"}
        src={"/config/images/logo.png"} />
        
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
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {timerComponents.length ? timerComponents : <span>You're late !</span>}
            </s.TextSubTitle>
            <s.SpacerLarge />


            
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
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>
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
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Excluding gas fees.
                </s.TextDescription>
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

          </s.Container>

          <s.SpacerLarge />
          
          <s.GifContainer flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/GIF3.gif"} />
            <s.SpacerLarge />
            <StyledImg alt={"example"} src={"/config/images/GIF4.gif"} />
          </s.GifContainer>

        </ResponsiveWrapper>
        <s.SpacerLarge />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >

              <s.Container 
              flex={1}
              ai={"center"}

              style={{ 
                padding: 24, 
                backgroundColor: "var(--accent)" ,
                padding: 24,
                borderRadius: 15,
                border: "5px groove var(--secondary)",
                boxShadow: "0px 0px 30px 30px rgba(0,0,0,0.7)",  
              
              
              }}
              
              jc={"center"}>

              <s.TextTitle
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)"              
    
                }}
              >
                Our tale:
              </s.TextTitle>
              <s.SpacerMedium />

              <s.TextDescription
                style={{
                  width: "95%",
                  textAlign: "center",
                  color: "var(--accent-text)"              
    
                }}
              >
                The LatePumpkins are <span style={{color: "var(--primary-text)" }}>3110</span> pumpkins
                that were supposed to bloom on <span style={{color: "var(--avalanche-red)" }}>Avalanche</span> during Halloween Eve. A late autumn, and late artists,
                caused a significant delay, originating in the meantime a community that embraces lateness,
                procrastination and delay. Yet, a late harvest tends to bring bigger fruits, 
                and the harvesters have commited to give back 50% of the harvesting fees to a charity voted by the Pumpkins.
              </s.TextDescription>
            
              <s.SpacerLarge />

              
              <s.TextTitle
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)"              
    
                }}
              >
                Rarities:
              </s.TextTitle>

              <s.TextSubTitle
                style={{
                  textAlign: "center",
                  color: "var(--accent-text)"              
    
                }}
              >
                Body chart
              </s.TextSubTitle>
              <s.SpacerMedium />

              <s.Container

              flex={1}
              ai={"center"}
              
              style={{
                textAlign: "center",
                color: "var(--accent-text)"              
  
              }}>
              <Tbl data={body_dataSet}></Tbl>
              </s.Container>

              <s.SpacerMedium />

              <s.TextSubTitle
                style={{
                  textAlign: "center",
                  color: "var(--accent-text)"              
    
                }}
              >
                Head chart
              </s.TextSubTitle>
              <s.SpacerMedium />

              <s.Container

              flex={1}
              ai={"center"}
              
              style={{
                textAlign: "center",
                color: "var(--accent-text)"              
  
              }}>
              <Tbl data={head_dataSet}></Tbl>
              </s.Container>

              <s.TextSubTitle
                style={{
                  textAlign: "center",
                  color: "var(--accent-text)"              
    
                }}
              >
                Eyes chart
              </s.TextSubTitle>
              <s.SpacerMedium />

              <s.Container

              flex={1}
              ai={"center"}
              
              style={{
                textAlign: "center",
                color: "var(--accent-text)"              
  
              }}>
              <Tbl data={eyes_dataSet}></Tbl>
              </s.Container>

              <s.TextSubTitle
                style={{
                  textAlign: "center",
                  color: "var(--accent-text)"              
    
                }}
              >
                Legs chart
              </s.TextSubTitle>
              <s.SpacerMedium />

              <s.Container

              flex={1}
              ai={"center"}
              
              style={{
                textAlign: "center",
                color: "var(--accent-text)"              
  
              }}>
              <Tbl data={feet_dataSet}></Tbl>
              </s.Container>
             
              <s.TextSubTitle
                style={{
                  textAlign: "center",
                  color: "var(--accent-text)"              
    
                }}
              >
                Arms chart
              </s.TextSubTitle>
              <s.SpacerMedium />

              <s.Container

              flex={1}
              ai={"center"}
              
              style={{
                textAlign: "center",
                color: "var(--accent-text)"              
  
              }}>
              <Tbl data={arms_dataSet}></Tbl>
              </s.Container>

            </s.Container>
            
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
          </s.TextDescription>

          
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}



const body_dataSet = [['Black', 'Legendary', '0.71%', 'hidden.png'], ['AVAX', 'Rare', '3.54%', '952c39d35dd1ce607f73e66d8ae441074a652642.png'], ['Green', 'Rare', '3.92%', 'hidden.png'], ['Psychedelic', 'Rare', '4.05%', 'b4f329b607ca9dade27705fcaf1089794619998e.png'], ['White', 'Rare', '4.86%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Blue', 'Uncommon', '8.33%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Sick', 'Uncommon', '8.78%', 'fef1b06a74de9d85bdf67dbd3f51bec13e9903be.png'], ['Purple', 'Uncommon', '9.29%', 'c4795cfb2e3f781989fcde34661b2ea47d01b08a.png'], ['Yellow', 'Common', '16.72%', '19917634db9e856b552769df862e80505999be19.png'], ['Dark Orange', 'Common', '16.98%', '1fd2232ff7fb9d673dcc5ea0d3005c66145d2b4f.png'], ['Orange', 'Common', '22.83%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]

const eyes_dataSet = [['Demon', 'Rare', '4.79%', '7013fee8edc61e41d26062cf6c1fd0a5f903c794.png'], ['Zombie', 'Rare', '5.43%', '1d99931f33074610d169038fda2aff5e46157785.png'], ['High as Fuck', 'Uncommon', '7.85%', '19917634db9e856b552769df862e80505999be19.png'], ['Sick', 'Uncommon', '8.33%', 'fef1b06a74de9d85bdf67dbd3f51bec13e9903be.png'], ['Unibrown', 'Uncommon', '8.46%', 'fef1b06a74de9d85bdf67dbd3f51bec13e9903be.png'], ['Small', 'Common', '15.72%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Cute', 'Common', '49.42%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]

const head_dataSet = [['Crown', 'Legendary', '0.32%', 'd4aebe4330568a6228f60f58a2e15b6d8cb35ae8.png'], ['Unicorn', 'Legendary', '0.48%', 'hidden.png'], ['Christmas Tree', 'Legendary', '0.51%', 'hidden.png'], ['Gladiator', 'Legendary', '0.64%', 'hidden.png'], ['Cheap Magician', 'Legendary', '0.80%', '19917634db9e856b552769df862e80505999be19.png'], ['Helicopter Cap', 'Legendary', '0.93%', 'ae34f7e3b6362a3071f16e46a812edea72a75083.png'], ['Pirate', 'Legendary', '1.00%', 'c58dd16f5b9253ab8059dca9c47ba52665fd2a79.png'], ['Christmas Gift', 'Epic', '1.16%', '7fef199a69d54b07d5029c70d8c3f6a97b0dbb12.png'], ['Sheriff', 'Epic', '1.16%', 'hidden.png'], ['Witch', 'Epic', '1.19%', 'hidden.png'], ['Dynamite', 'Epic', '1.22%', 'fa1fa3d740ff64a0f47bd47ca9dbb3f44ec16eef.png'], ['Otaku Ears', 'Epic', '1.25%', 'e883a1233881a7aa92e36bf7fc78f448119abe73.png'], ['Mexican Hat', 'Epic', '1.29%', '4fb8da88783ee934b4a843d69f3b0c2ceba5c960.png'], ['Santa', 'Epic', '1.38%', '9fb8b9e73341270657bd95b60b2a808b858a8f39.png'], ['Bomb', 'Epic', '1.48%', '65a4083c130f89179702b3e9046781e564dd6e17.png'], ['White', 'Epic', '1.83%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Pineapple', 'Epic', '1.96%', '89390c1a011140d189a9fb887f5720496f614c44.png'], ['Beret', 'Rare', '2.44%', '1014819c28cc5583c98fd89c5f7bf56e29f61c91.png'], ['Orange', 'Rare', '2.51%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png'], ['Red Cap', 'Rare', '2.51%', '9d675ef1d434b9ccbe27442da3a3ea93fea783be.png'], ['Plant Cherries', 'Rare', '2.60%', '7013fee8edc61e41d26062cf6c1fd0a5f903c794.png'], ['Irish', 'Rare', '2.73%', '1fd2232ff7fb9d673dcc5ea0d3005c66145d2b4f.png'], ['Purple', 'Rare', '2.77%', 'c4795cfb2e3f781989fcde34661b2ea47d01b08a.png'], ['Chandelier', 'Rare', '2.80%', '1fd0ced1d944524e1fb1798943311b4e58a1091b.png'], ['Blue', 'Rare', '2.83%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Blue Cap', 'Rare', '2.93%', '0ce9ea2921ed795213863f6122a221ffbb6d7b59.png'], ['Plant Flower', 'Rare', '2.93%', 'a56018712a5a3e35eb54ebc4b3b07986f0cb8ecd.png'], ['Green Cap', 'Rare', '2.99%', 'hidden.png'], ['Plant Punk', 'Rare', '3.02%', 'hidden.png'], ['Reindeer', 'Rare', '3.05%', '9ac6b5f1aac59e0b9684e88c630127d854ad8a26.png'], ['Plant 2', 'Rare', '3.76%', 'f94b5c39912bdcc1579d5bcf468a02e6c1a27188.png'], ['Plant 3', 'Rare', '3.92%', '30366ef1553c6d218369c283127a57513a002e41.png'], ['Balding', 'Rare', '3.95%', 'hidden.png'], ['Plant 7', 'Rare', '3.95%', '42564e1cf62ff164b2656d4f5d699f315b717ebe.png'], ['Plant 1', 'Rare', '3.99%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Plant 4', 'Rare', '4.05%', 'f5c4e87a0ecc6e30952d3fa3d85925bfc9ce5628.png'], ['Plant 5', 'Rare', '4.12%', 'd390e0d5381a56edd879c2fa16e0f0efafbc5523.png'], ['Plant 6', 'Rare', '4.21%', 'ca4622f2438af4ecb2d4266d8111cf60646d6ea5.png'], ['Plant Fruit', 'Rare', '4.66%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Blond', 'Rare', '5.11%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]

const feet_dataSet = [['Air Jordan 1', 'Legendary', '0.90%', '21fe76fc09e106d7d5e365d31364027656e61d6d.png'], ['Pink Heels', 'Epic', '1.06%', 'ca4622f2438af4ecb2d4266d8111cf60646d6ea5.png'], ['Air Jordan 5', 'Epic', '1.58%', 'hidden.png'], ['Converse Chuck Taylor All Star', 'Rare', '2.86%', 'b36c022d0183c3e0f8288bef2f1e2ea8168e9b46.png'], ['Nike Dunk', 'Rare', '3.34%', '4fb8da88783ee934b4a843d69f3b0c2ceba5c960.png'], ['Stan Smith Green', 'Rare', '4.28%', 'a56018712a5a3e35eb54ebc4b3b07986f0cb8ecd.png'], ['Stan Smith Red', 'Rare', '4.37%', '0ce9ea2921ed795213863f6122a221ffbb6d7b59.png'], ['Brown Moccasins', 'Rare', '4.60%', 'a34f6eafdcd9914104767a523c1a5a02a77b9b5d.png'], ['White Elf', 'Rare', '4.66%', 'f94b5c39912bdcc1579d5bcf468a02e6c1a27188.png'], ['Stan Smith Blue', 'Rare', '4.69%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png'], ['Pink Elf Shoes', 'Rare', '5.08%', '0f081edb734265aef9b0cd0901f1266d7bf8706e.png'], ['Santa Elf', 'Rare', '5.11%', '1fd2232ff7fb9d673dcc5ea0d3005c66145d2b4f.png'], ['Black Heels', 'Uncommon', '8.97%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Black Moccasins', 'Uncommon', '9.55%', '0d6a5627969b82987cddccb0d7e9467c7a7b37a8.png'], ['German Flipflops', 'Uncommon', '10.06%', 'cc3a9fe4d95332a462d7447b53b3aae81e0c7d9a.png'], ['Classic', 'Common', '28.87%', '19917634db9e856b552769df862e80505999be19.png']]

const arms_dataSet = [['Gun', 'Rare', '5.79%', '1d99931f33074610d169038fda2aff5e46157785.png'], ['Black Gloves', 'Uncommon', '9.55%', 'f5c4e87a0ecc6e30952d3fa3d85925bfc9ce5628.png'], ['Brown Gloves', 'Uncommon', '9.65%', 'c4795cfb2e3f781989fcde34661b2ea47d01b08a.png'], ['Golden Watch Left', 'Common', '17.85%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png'], ['Golden Watch Right', 'Common', '19.10%', '6269bba57462f5ccc33fbbb88a74f25d297e3c45.png'], ['Arms', 'Common', '34.53%', '51eddce473e883122c0b8f5f93acf3f7bbd95163.png']]


export default App;
