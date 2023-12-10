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
          <Text size="9" weight="bold" style={{display: "block", width: "100%", textAlign: "center", marginTop: "50px"}}>Meet our Team</Text>
          <Grid style={{placeItems: "center", marginTop: "40px"}}>
            
            <Grid columns={width.width > 600 ? "2" : "1"} gap="8">
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/d3cf84_9b9a46c0d5ca4d8d9b4dc32e100bd79d~mv2.jpg/v1/fill/w_571,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d3cf84_9b9a46c0d5ca4d8d9b4dc32e100bd79d~mv2.jpg"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    President
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Krishiv Aggarwal
                  </Text>
                  <Text as="p" size="3">
                    Hi I am Krishiv, a rising senior at Irvington High School in Fremont, California, with a strong interest in the fields of computers and engineering. Growing up in Silicon Valley with parents who hold master&apos;s degrees in STEM fields has provided me with extensive exposure to subjects relating to robotics and sciences and encouraged me to pursue knowledge in programming languages such as Python, web development (HTML, CSS, JavaScript), and C.
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2288b9_5b0f0ea83232414e9bf25292e4632eb2~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    President
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Aashrith Bandaru
                  </Text>
                  <Text as="p" size="3">
                    I&apos;m Aashrith Bandaru, a STEM education advocate and entrepreneurial leader from Fremont, California. My passion lies at the intersection of data science and business, and I&apos;ve gained extensive programming knowledge in web development, Python, and Java. As the president of the Data Science Club at Irvington High School, I&apos;ve honed my skills and achieved success in business competitions, winning first place in VBC at the International Career Development Conference with DECA. I&apos;ve also made a lasting impact through co-founding STEM Made Fun, a nonprofit organization focused on accessible education and community service. With every endeavor, I strive to leave a positive and significant mark on the world around me.
                  </Text>
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Text size="8" weight="bold" style={{display: "block", width: "100%", textAlign: "center", marginTop: "50px"}}>Officers</Text>
          <Grid style={{placeItems: "center", marginTop: "40px"}}>

            <Grid columns={width.width > 1000 ? "3" : width.width > 600 ? "2" : "1"} gap="8">
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2ffcfb_27a9af8e114c4d34a771ae8ffe869414~mv2.jpg/v1/fill/w_504,h_418,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0188_edited.jpg"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    Marketing
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Anish Ayyadevara
                  </Text>
                  <Text as="p" size="3">
                    Hi, my name is Anish Ayyadevara. I&apos;m a student at Irvington High School with a keen interest in the field of business. I am proud to say that at the age of 17, I have already started multiple companies and gained recognition as an entrepreneur. One of my successful ventures is TradeChoice LLC in which has gained recognition across the USA and is continuing to grow.
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2288b9_1d220dd21eea4ae28a239b3801a4c230~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    Operations
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Tanuj Kancharla
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2288b9_072981fc43ac438daa08f1258f0d806a~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    Development
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Karthik Nukavarapu
                  </Text>
                  <Text as="p" size="3">
                    Hi, my name is Karthik Nukavarapu and I&apos;m a student at Washington High School and interested in STEM and plan on majoring in computer science. I have worked with Stem Made Fun for over a year now and have been a volunteer that has put in many hours from helping children learn coding to making curriculum. I have learnt Python and Java and currentlyy learning HTML, CSS, and JavaScript.
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2288b9_ecbddd97ce4f4a05a4af780d5261b7c8~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    Curriculum
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Sreyas Yallapragada
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2288b9_14df1bec557044b8aaefde804ac2611d~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    Outreach
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Karthik Sankran
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src="https://static.wixstatic.com/media/2288b9_6fcfc24f9dcf4b409130c9f2908dc473~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="7" weight="bold" style={{textAlign: "center"}}>
                    Logistics
                  </Text>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Sujith Sridhar
                  </Text>
                  <Text as="p" size="3">
                    As a junior at Irvington High School, my interests lie in both business and STEM. Through my involvement in organizations like DECA, FBLA, and various internships, I have gained expertise in areas such as finance and entrepreneurship. Additionally, I have developed a keen interest in the stock market and have gained valuable experience managing my own custodial account.
                  </Text>
                </Card>
              </Box>
            </Grid>
          </Grid>
           <Text size="8" weight="bold" style={{display: "block", width: "100%", textAlign: "center", marginTop: "50px"}}>Local Volunteers</Text>
          <Grid style={{placeItems: "center", marginTop: "40px"}}>

            <Grid columns={width.width > 600 ? "3" : "2"} gap="8">
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2288b9_dbb4718b9ba04ff6ad81b89e86ebba1e~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Sathvik Lingaram
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2288b9_46f1e7d76a74423f89bbdb8774bcfaa3~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Shaan Patel & Pratyush Mathur
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2288b9_6f78de1aacde48c7a7bcb1e8fdab2cbc~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Riti Nalumachu
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2288b9_b9a9176888ef461f9d30a06fc4d5440f~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Prithvi Maddi
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2288b9_f9f3e613033b48cd9dc75e938a5639be~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Anish Jaiswal
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2288b9_296c4fa645c34fcdaf07b54b90624407~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Sai Panchal
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2288b9_bc86d9da46304d72b70bf68c0db1e75d~mv2.webp"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Saaeesh Namburu
                  </Text>
                </Card>
                <br></br>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2ffcfb_e31654f312674cfbb6edcf1bba6c0137~mv2.png/v1/fill/w_359,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC01892_heic.png"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Pravit Ampapathini
                  </Text>
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Text size="8" weight="bold" style={{display: "block", width: "100%", textAlign: "center", marginTop: "50px"}}>Our Connecticut Volunteers</Text>
          <Text size="5" style={{display: "block", width: "100%", textAlign: "center", marginTop: "10px"}}>We are thrilled to introduce our newest group of passionate volunteers hailing from the vibrant community of Connecticut! These dedicated individuals have generously offered their time, skills, and enthusiasm to join our mission in empowering the next generation with quality STEM education.</Text>
          <Grid style={{placeItems: "center", marginTop: "40px"}}>

            <Grid columns="3" gap="8">
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2ffcfb_fe3eb94c1a4647aaa9d055b05299a9d1~mv2.png/v1/fill/w_359,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FullSizeRender_HEIC.png"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Manasvini kotumraju
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2ffcfb_438d909403ad4f77a9445f54f5d0b82f~mv2.png/v1/fill/w_359,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-11-19%20at%207_26_10%E2%80%AFPM.png"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Harshita rayapureddy
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card size="2" style={{ maxWidth: 400 }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src="https://static.wixstatic.com/media/2ffcfb_53e03bd47fba49449236d9479433ed49~mv2.png/v1/fill/w_359,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CE538C06-D579-4266-A0F3-28F4C68C9791_heic.png"
                      alt="president"
                      style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                  </Inset>
                  <Text as="p" size="5" weight="bold" style={{textAlign: "center"}}>
                    Aditi tallapaka
                  </Text>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  )
}
