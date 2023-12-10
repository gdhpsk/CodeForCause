import { Box, Text, Grid, Card, Inset, Button, Dialog, Flex } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

export default function Home() {
  let [width, setWidth] = useState({width: 0})
  const getWidth = () => typeof document !== "undefined" ? document.body.clientWidth : 0
  useEffect(() => {
    setWidth({width: getWidth()})
  }, [getWidth()])
  return (
    <>
      <main style={{marginTop: "-10px", marginLeft: "-10px", marginRight: "-15px"}}>
        <Box>
          <img src="https://static.wixstatic.com/media/84770f_8536b6095ed5471c8f524ef1193ba91c~mv2.jpg/v1/fill/w_1899,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_8536b6095ed5471c8f524ef1193ba91c~mv2.jpg" style={{height: "300px", width: "100%"}} />
          <Text size="9" weight="bold" style={{display: "block", width: "100%", textAlign: "center", marginTop: "-180px"}}>STEM Made Fun</Text>
          <Grid style={{placeItems: "center"}}>
            <Box style={{width: "90%", height: "150px", marginTop: "120px", borderRadius: "50px", backgroundColor: "lightcyan"}}>
              <Text size="4" weight="bold" style={{display: "inline-block", marginTop: "60px", width: "100%", textAlign: "center"}}>&quot;It is easier to build strong children than to repair broken men.&quot; - Frederick Douglass</Text>
            </Box>
            <br></br>
            <Grid columns={width.width > 1000 ? "4" : width.width > 800 ? "3" : width.width > 520 ? "2" : "1"} gap="8">
              <Box>
                <Card size="2" style={{ maxWidth: 240 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2ffcfb_e837816820f040d294181ec231d7c666~mv2.png/v1/fill/w_439,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SMF%20RITI.png"
                      alt="science logo"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="3">
                    Discover STEM Made Fun&apos;s Latest Project, an interactive Science Textbook filled with experiments, fun activities, and engaging learning while delving into the basics of physics.
                  </Text>
                  <br></br>
                  <Button radius="full" color="gray" onClick={() => window.location.href = "https://www.amazon.com/dp/B0C71W5T7F?ref_=cm_sw_r_cp_ud_dp_E7T7DNA7QVHSM6RKCXNK"}>Download</Button>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button radius="full" color="gray" style={{marginLeft: "10px"}}>Learn More</Button>
                    </Dialog.Trigger>

                    <Dialog.Content style={{ maxWidth: 750 }}>
                      <Dialog.Title size="8" weight="bold" as="h1" align="center">STEM Made Projects</Dialog.Title>

                      <Grid columns={width.width > 700 ? "2" : "1"}>
                        <img src="https://static.wixstatic.com/media/2ffcfb_77909e89be444a3ea09eb535d77ad4b1~mv2.jpeg/v1/fill/w_594,h_951,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2ffcfb_77909e89be444a3ea09eb535d77ad4b1~mv2.jpeg" height="300px" width="300px"></img>
                        <Text as="p" size="4" style={{marginLeft: "10px"}}>The SMF Book is an interactive guide for 5-8th graders interested into venturing into the world of physics. From our first to last page, we take readers on a captivating expedition with vibrant illustrations and hands on experiments.</Text>
                      </Grid>
                      <br></br>
                      <Text size="8" as="p" align="center" weight="bold">Topics Covered in Science & Beyond</Text>
                      <img src="https://static.wixstatic.com/media/2ffcfb_3652240548924752a4f09fd2ac0a877d~mv2.png/v1/crop/x_0,y_301,w_1563,h_872/fill/w_681,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SMF%2012.png" style={{width: "min(680px, 100%)"}}/> 
                     
                        <Text as="p" size="4" style={{marginLeft: "10px"}}>These three units perfectly culminate the basic ideals of physics in an interesting and engaging manner for students to understand. Experience the Force covers the basic forces acting on a plane and applies this knowledge through building paper airplanes. Flow of Electricity is a unit centered around electricity and its applications such as magnets, compasses, and circuitry. Finally, objects in motion covers the science behind how cars and roller coasters work.</Text>
                <br></br>
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Root>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 240 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/d3cf84_d2c2512c7a5747a6abd3abbdebee3b67~mv2.jpg/v1/crop/x_10,y_0,w_514,h_514/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fcsn_edited.jpg"
                      alt="science logo"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    FCSN
                  </Text>
                  <br></br>
                  <Grid style={{placeItems: "center"}}>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button radius="full" color="gray" style={{marginLeft: "10px"}}>Learn More</Button>
                      </Dialog.Trigger>

                      <Dialog.Content style={{ maxWidth: 750 }}>
                        <Dialog.Title size="8" weight="bold" as="h1" align="center">FCSN</Dialog.Title>

                        <Grid columns={width.width > 700 ? "2" : "1"}>
                          <img src="https://static.wixstatic.com/media/d3cf84_c5d8f590a14144f88ad30d9c30e13cda~mv2.jpg/v1/fill/w_959,h_636,al_c,q_85,enc_auto/306833917_456098723217905_5841695899717241821_n.jpg" height="250px" width="300px"></img>
                          <Text as="p" size="4" style={{marginLeft: "10px"}}>
                          We are proud to reflect on our enriching partnership with Family Connections Special Needs (FCSN). Together, we embarked on a mission to make coding accessible and enjoyable for all, regardless of their unique challenges.</Text>
                        </Grid>
                        <br></br>
                          <Text as="p" size="4" style={{marginLeft: "10px"}}>Through this collaboration, we provided specially-tailored coding sessions, ensuring that each student at FCSN could engage with and thrive in the world of technology. The enthusiasm and progress we&apos;ve seen among the students have been truly inspiring. We extend our heartfelt gratitude to FCSN for their unwavering support and look forward to more initiatives that empower and inspire. Thank you for your continued support. #FCSN #Stemmadefun #Partnership #Coding #Inclusivity</Text>
                    <br></br>
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Grid>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 240 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/c970dc_8cd5b2fb2f1c446eb89532b5b35cb1a2~mv2.png/v1/fill/w_474,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(2).png"
                      alt="coach"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Coach Art
                  </Text>
                  <br></br>
                  <Grid style={{placeItems: "center"}}
                    >
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button radius="full" color="gray" style={{marginLeft: "10px"}}>Learn More</Button>
                      </Dialog.Trigger>

                      <Dialog.Content style={{ maxWidth: 750 }}>
                        <Dialog.Title size="8" weight="bold" as="h1" align="center">Coachart x SMF</Dialog.Title>

                        <Grid columns={width.width > 700 ? "2" : "1"}>
                          <iframe src="https://www.youtube.com/embed/gb9OXUYhPGg?si=Qbo7AK3UmKgEEqin" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                          <Text as="p" size="4" style={{marginLeft: "10px"}}> 
                          STEM Made Fun is a non-profit organization dedicated to providing educational support to underprivileged children through innovative and fun projects. We are proud to work with CoachArt, a non-profit organization, to make a difference in the lives of children. Learn more about our projects and how you can help.</Text>
                        </Grid>
                    <br></br>
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Grid>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 240 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/c970dc_ec6c32cd0d07458e97ffcc0c6119b517~mv2.png/v1/crop/x_504,y_0,w_3024,h_3024/fill/w_474,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_7116_HEIC.png"
                      alt="summer"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Summer
                  </Text>
                  <br></br>
                  <Grid style={{placeItems: "center"}}>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button radius="full" color="gray" style={{marginLeft: "10px"}}>Learn More</Button>
                      </Dialog.Trigger>

                      <Dialog.Content style={{ maxWidth: 750 }}>
                        <Dialog.Title size="8" weight="bold" as="h1" align="center">SMF Summer 2020</Dialog.Title>

                        <Grid columns={width.width > 700 ? "2" : "1"}>
                          <img src="https://static.wixstatic.com/media/c970dc_b8902e32cce8466d86417648925510d7~mv2.png/v1/crop/x_0,y_414,w_4032,h_2196/fill/w_1520,h_828,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG_7071_HEIC.png" height="200px" width="300px"></img>
                          <Text as="p" size="4" style={{marginLeft: "10px"}}>STEM Made Fun is worked with students during the summer of 2020 to maintain their interest in STEM-related topics during the COVID-19 pandemic. We taught 4 subjects including Number Fun, Cells and Beyond, Let’s Code and Persuasive Reasoning to over 80 students. STEM Made Fun donated over $2500 of proceeds from the program to charity.</Text>
                        </Grid>
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Grid>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 240 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/c970dc_4bfaff294eb14d99a2be3ef0a43c6d49~mv2.jpg/v1/crop/x_7,y_0,w_1203,h_1203/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2_edited.jpg"
                      alt="coach"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    TGIF
                  </Text>
                  <br></br>
                  <Grid style={{placeItems: "center"}}>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button radius="full" color="gray" style={{marginLeft: "10px"}}>Learn More</Button>
                      </Dialog.Trigger>

                      <Dialog.Content style={{ maxWidth: 750 }}>
                        <Dialog.Title size="8" weight="bold" as="h1" align="center">TGIF</Dialog.Title>

                        <Grid columns={width.width > 700 ? "2" : "1"}>
                          <img src="https://cdn.discordapp.com/attachments/937862402337296414/1183163201853079592/image.png?ex=65875599&is=6574e099&hm=61c077aa2148bc4437614a84269024656246b5db
                            550d3baf8f723877f8dd89ee&" height="300px" width="300px"></img>
                          <Text as="p" size="4" style={{marginLeft: "10px"}}>
                          Greetings to all our supporters, We&apos;re delighted to look back on our successful partnership with TGIF. Together, we brought exciting coding, science, and debate classes to Warm Springs Elementary on Mondays, Wednesdays, and Thursdays. This collaboration sparked creativity and instilled a love for learning among the students. We&apos;re grateful for TGIF&apos;s support, and we look forward to future endeavors that inspire young minds. Thank you for your continued support. #TGIF #Stemmadefun #Partnership #Coding #Science #Debate</Text>
                        </Grid>

                    <br></br>
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Grid>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 240 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/c970dc_d6357489ed164527ad7f2acd678975b7~mv2.webp"
                      alt="nodia"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Nodia India
                  </Text>
                  <br></br>
                  <Grid style={{placeItems: "center"}}>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button radius="full" color="gray" style={{marginLeft: "10px"}}>Learn More</Button>
                      </Dialog.Trigger>

                      <Dialog.Content style={{ maxWidth: 750 }}>
                        <Dialog.Title size="8" weight="bold" as="h1" align="center">Nodia India</Dialog.Title>

                        <Grid columns={width.width > 700 ? "2" : "1"}>
                          <img src="https://static.wixstatic.com/media/c970dc_fabb293af7364e0baf99d8e69c80eab4~mv2.png/v1/fill/w_882,h_518,al_c,lg_1,q_90,enc_auto/c970dc_fabb293af7364e0baf99d8e69c80eab4~mv2.png" height="300px" width="300px"></img>
                          <Text as="p" size="4" style={{marginLeft: "10px"}}>
                          Greetings to all our supporters,
                          We are excited to look back at a remarkable year spent teaching coding at an all-girls public school in Noida, India. Our dedicated Noida chapter hosted enriching after-school sessions four times a week, inspiring young minds and breaking barriers in the tech world. Our mission was to empower these bright young girls through coding, equipping them with critical skills for the future. The progress and enthusiasm we witnessed over the year were truly inspiring, and we are incredibly proud of what our students achieved. We look forward to more opportunities to inspire and uplift through technology.
                          Thank you for your continued support.
                          #Stemmadefun #Coding #NoidaIndia #Empowerment</Text>
                        </Grid>
                        <br></br>
                        <Text size="8" as="p" align="center" weight="bold">Meet the Team</Text>
                        <br></br>
<Grid columns={width.width > 700 ? "2" : "1"}>                       
<img 
  src="https://static.wixstatic.com/media/c970dc_f8b2ac9556264c9f8a794ed1a9bd1a97~mv2.jpeg/v1/fill/w_806,h_786,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shambavinoida.jpeg" height="300px" width="300px"/>
  
                          <Text  as="p" size="4" style={{marginLeft: "10px"}} >Hi my name is Shambhavi Mittal. I am in class 11.
                      I am a Scholar Badge holder and have been for the past 7 years. Since class 1, I have been taking part in Science, Maths and Computer Science olympiads. I have been learning Odissi dance,Indian Classical music and Tabla for more than 10 years and have been performing professionally for the past 4 years. I know HTML and Python, for which I have also taken courses organised by Codechef. I am very keen about the STEM subjects and want every student to understand its importance. Throughout my life I have seen the struggle of underprivileged girls, through the incidents I have heard from my mother and also personal conversations with them. Helping and motivating them to pursue STEM subjects has and always will be my personal accomplishment.</Text>
  </Grid> 
                    <br></br>
                        <Grid columns={width.width > 700 ? "2" : "1"}>                       
                        <img 
                          src="https://static.wixstatic.com/media/c970dc_6ca6b5c18c8542ccabdef88fbd01545f~mv2.jpeg/v1/crop/x_0,y_21,w_202,h_197/fill/w_283,h_276,al_c,lg_1,q_80,enc_auto/siddhinodia.jpeg" height="300px" width="300px"/>

                                                  <Text  as="p" size="4" style={{marginLeft: "10px"}} >Hi my name is Siddhi Singhal. I have conferred excellence in academics and extracurricular activities awards from my school many times. I have done Science and Mathematics Olympiads for 5 years, and have also shown a great interest in programming languages like HTML, Python and small basic. I have been to different NGO schools from my school since I was in 3 rd grade; I have taught my age and below children different topics of different subjects through which I also learned a lot too. Now I want to share this experience with others. To add on, I have learnt karate and self-defense since I was of age 3. I have participated in many different types and levels of competition, like for French solo singing, odyssey of minds, art competitions. For a fact I am the only female percussionist in my school, and happened to be the only senior in the band in my year.</Text>
                          </Grid> 
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Grid>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 240 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/c970dc_80fc0481a43442c18ed4d711b9f40df2~mv2.png/v1/fill/w_474,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20Black%20M%20Letter%20Logo%20Design%20Business%20Identity%20for%20Digital%20Design%20Company.png"
                      alt="coach"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 140,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Robotic Rampage
                  </Text>
                  <br></br>
                  <Grid style={{placeItems: "center"}}>
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button radius="full" color="gray" style={{marginLeft: "10px"}}>Learn More</Button>
                      </Dialog.Trigger>

                      <Dialog.Content style={{ maxWidth: 750 }}>
                        <Dialog.Title size="8" weight="bold" as="h1" align="center">Robotic Rampage x SMF</Dialog.Title>

                        <Grid columns={width.width > 700 ? "2" : "1"}>
                          <img src="https://static.wixstatic.com/media/c970dc_0ff5ea7458ab4d08a7034807ef270fd5~mv2.png/v1/crop/x_0,y_424,w_4032,h_2196/fill/w_1520,h_828,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG_4681_HEIC.png" height="250px" width="300px"></img>
                          <Text as="p" size="4" style={{marginLeft: "10px"}}>STEM Made fun is working with student teachers from Robotic Rampage to mentor other robotics teams nearby and introduce robotics in a fun and engaging way. Robotic Rampage has been competing as a part of First Tech Challenge for 5 years and as a part of their outreach program, they reached out to many new teams. One example we helped the rookie FTC team named Technogoats with understanding the basics of FTC and had multiple workshops with them. Another team is the Incredigirls, a rookie all girls FLL team we helped by having numerous workshops and providing them with game winning strategies. SMF also helped Robotic Rampage&apos;s outreach effort by working together on sending letters to first responders during the COVID-19 Pandemic.
Website: http://www.roboticrampage.com.</Text>
                        </Grid>

                    <br></br>
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Root>
                  </Grid>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  )
}
