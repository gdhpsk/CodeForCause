import { Tabs, Dialog, Flex, Button, Box, Text, TextField, TextArea } from '@radix-ui/themes';
import Link from 'next/link';
import {useState} from 'react'

export default function Nav() {
  let [email, setEmail] = useState({
    first: "",
    last: "",
    email: "",
    message: ""
})
let [error, setError] = useState("")
  return (
    <>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="home"><Link href="/">Home</Link></Tabs.Trigger>
          <Tabs.Trigger value="endorsements"><Link href="/endorsements">Endorsements</Link></Tabs.Trigger>
          <Tabs.Trigger value="subjects"><Link href="/subjects">Subjects</Link></Tabs.Trigger>
          <Tabs.Trigger value="team"><Link href="/team">Team</Link></Tabs.Trigger>
          <Tabs.Trigger value="contact">
            <Dialog.Root>
              <Dialog.Trigger>
                <span style={{marginLeft: "10px", textDecoration: "underline"}}>Contact us</span>
              </Dialog.Trigger>

              <Dialog.Content style={{ maxWidth: 750 }}>
                <Dialog.Title size="8" weight="bold" as="h2" align="center">Contact</Dialog.Title>
                 <Dialog.Description align="center">Please reach out to us if you have any questions / want to join us.</Dialog.Description>
<br></br>
                
                  <Flex gap="8">
                    <Box>
                      <Text size="4" weight="bold" align="center">Phone</Text>
                      <br></br>
                      <Text size="4" align="center">510-328-8045</Text>
                    </Box>
                    <Box>
                      <Text size="4" weight="bold" align="center">Email</Text>
                      <br></br>
                      <Text size="4" align="center">stemmadefun@gmail.com</Text>
                    </Box>
                  </Flex>
                <br></br>

                <Box>
                  <Text size="2">First Name</Text>
                  <TextField.Root>
                    <TextField.Input placeholder="First Name..." onChange={(e) => {
                      setEmail({
                        ...email,
                        first: e.target.value
                      })
                    }}/>
                  </TextField.Root>
                  <br></br>
                  <Text size="2">Last Name</Text>
                  <TextField.Root>
                    <TextField.Input placeholder="Last Name..." onChange={(e) => {
                        setEmail({
                          ...email,
                          last: e.target.value
                        })
                      }}/>
                  </TextField.Root>
                  <br></br>
                  <Text size="2">Email</Text>
                  <TextField.Root>
                    <TextField.Input placeholder="Email..." onChange={(e) => {
                        setEmail({
                          ...email,
                          email: e.target.value
                        })
                      }}/>
                  </TextField.Root>
                  <br></br>
                  <Text size="2">Message</Text>
                  <TextArea placeholder="Message..." onChange={(e) => {
                      setEmail({
                        ...email,
                        message: e.target.value
                      })
                    }}/>
                </Box>
                <Text size="4">{error}</Text>
                <br></br>
                  <Button variant="soft" color="blue" style={{marginRight: "10px"}} onClick=                     {() => {
                    console.log(email)
                  }}>
                    Submit
                  </Button>
                <Dialog.Close>
                  <Button variant="soft" color="red" onClick={() =>
                    setEmail({
                                first: "",
                                last: "",
                                email: "",
                                message: ""
                            })
                  }>
                    Cancel
                  </Button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Root>
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
}
