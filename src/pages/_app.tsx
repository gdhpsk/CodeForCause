import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@radix-ui/themes/styles.css';
import { Theme, Grid } from '@radix-ui/themes';
import Nav from "@/components/Nav"

export default function App({ Component, pageProps }: AppProps) {
  return <Theme appearance='light'>
    <Grid style={{placeItems: "end", backgroundColor: "lightgray", marginTop: "-10px", marginLeft: "-10px", marginRight: "-15px", paddingBottom: "15px"}}>
       <Nav></Nav>
    </Grid>
       <img src="https://static.wixstatic.com/media/d3cf84_02b2039a53854f239467a3b3da2a7fa1~mv2.png/v1/fill/w_173,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/v1_logo_smf%20(1).png" height="50px" style={{marginTop: "-55px", display: "block"}} onClick={() => window.location.href = "/"}></img>
    <Component {...pageProps} />
  </Theme>
}
