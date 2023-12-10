import { Text, Grid, Card, Box } from '@radix-ui/themes';

export default function Home() {
  return (
    <>
      <main>
          <Grid columns="2" gap="1" style={{marginTop: "30px", marginLeft: "15%"}}>
            <Box>
              <Card size="2" style={{marginTop: "100px", maxWidth: 300}}>
                <Text size="8" weight="bold" as="p" align="center">Endorsements</Text>
                <br></br>
                <Text size="7" as="p" align="center">Fremont&apos;s Mayor, Lily Mei</Text> 
                <br></br>
                <Text size="6" as="p" align="center">Mayor Lily Mei was sworn in December 2016 as Fremont&apos;s first woman and minority mayor in Fremont&apos;s 63 year history. She first was elected to the Fremont City Council in 2014.</Text>
              </Card>
            </Box>
            <Box>
              <video controls style={{height: "600px"}}>
                <source src="https://video.wixstatic.com/video/2ffcfb_9443839910c045e483c78d1f07eb38af/480p/mp4/file.mp4" type="video/mp4" />
              </video>
            </Box>
          </Grid>
      </main>
    </>
  )
}
