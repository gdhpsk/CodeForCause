import styles from "../styles/subjects.module.css"
import { Grid, Box, Text, Card, Inset, Avatar } from '@radix-ui/themes';

export default function Home() {
  return (
    <>
      <main>
        <Text size="9" as="p" align="center" weight="bold" style={{marginTop: "20px"}}>Our Subjects!</Text>
        
        <Grid columns="4" gap="3" width="auto" style={{marginTop: "20px"}}>
            <Box>
              
                <Card size="2">
                  <Inset clip="padding-box" side="top" pb="current">
                    <Grid style={{placeItems: "center"}}>
                      <svg preserveAspectRatio="none" data-bbox="24.31 19.951 151.365 159.999" viewBox="24.31 19.951 151.365 159.999" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                          <g>
                              <path d="M172.637 45.827c-7.686-10.376-27.03-8.199-48.807.897-5.637-16.653-14.091-26.773-23.699-26.773-9.736 0-18.062 10.12-23.699 26.773-21.906-9.095-41.121-11.273-48.807-.897-6.021 7.814-3.459 20.881 7.046 36.637 3.843 5.765 8.583 11.657 13.963 17.55-19.215 20.881-29.976 42.274-21.265 54.059 3.587 4.74 9.608 6.918 17.166 6.918 8.839 0 19.856-2.946 31.641-7.814 5.637 16.653 14.091 26.773 23.699 26.773 9.736 0 18.062-10.12 23.699-26.773 11.785 4.868 22.802 7.814 31.641 7.814 7.558 0 13.707-2.178 17.166-6.918 8.839-11.785-2.178-33.307-21.393-54.187 19.471-20.753 30.36-42.274 21.649-54.059zm-35.357 2.562c15.116-4.612 26.133-4.227 30.232 1.153 4.099 5.38 1.281 16.141-7.43 29.335-3.587 5.38-8.07 10.889-13.066 16.525-5.124-5.124-10.633-10.248-16.525-15.116-.897-10.12-2.562-19.472-4.868-27.542 3.971-1.665 7.942-3.074 11.657-4.355zm-20.496 74.043c-5.508 4.099-11.145 7.942-16.781 11.401a257.143 257.143 0 0 1-16.653-11.401c-2.562-1.922-5.124-3.843-7.558-5.893-.384-5.38-.641-10.889-.641-16.525s.256-11.145.641-16.525c2.434-1.922 4.996-3.971 7.558-5.893a257.143 257.143 0 0 1 16.653-11.401c5.637 3.459 11.145 7.302 16.781 11.401 2.562 1.922 5.124 3.843 7.558 5.893.384 5.38.641 10.889.641 16.525s-.256 11.145-.641 16.525c-2.562 1.922-4.996 3.971-7.558 5.893zm6.533 2.946c-.897 6.789-2.178 13.323-3.715 19.215-4.484-2.05-8.967-4.484-13.451-7.046a208.467 208.467 0 0 0 14.476-9.992c.897-.768 1.793-1.408 2.69-2.177zm-29.464 12.17c-4.612 2.562-9.095 4.996-13.451 7.046a157.683 157.683 0 0 1-3.715-19.087c.897.769 1.793 1.409 2.818 2.178a405.25 405.25 0 0 0 14.348 9.863zm-24.98-26.645c-4.099-3.587-7.942-7.174-11.529-10.889 3.587-3.587 7.43-7.302 11.529-10.889-.128 3.587-.256 7.174-.256 10.889s.128 7.302.256 10.889zm7.815-36.381a157.645 157.645 0 0 1 3.715-19.087c4.355 2.05 8.967 4.484 13.451 7.046a218.395 218.395 0 0 0-14.347 9.864c-1.026.768-1.923 1.536-2.819 2.177zm29.463-12.042a171.475 171.475 0 0 1 13.451-7.046 155.156 155.156 0 0 1 3.715 19.215 22.67 22.67 0 0 0-2.818-2.05c-4.612-3.586-9.48-6.916-14.348-10.119zm24.852 26.773a237.3 237.3 0 0 1 11.529 10.761c-3.587 3.587-7.43 7.302-11.529 10.761.128-3.587.256-7.174.256-10.761.129-3.715 0-7.302-.256-10.761zm-47.91-42.53c4.74-12.938 10.889-20.368 16.91-20.368s12.17 7.43 16.91 20.368c.256.897.641 1.665.897 2.562-5.893 2.69-11.785 5.893-17.806 9.48-5.893-3.459-11.914-6.661-17.806-9.351.254-.897.639-1.794.895-2.691zM39.922 79.005c-8.711-13.195-11.529-23.827-7.43-29.335 2.178-2.946 6.405-4.355 12.17-4.355 4.996 0 11.017 1.025 17.934 3.203a130.05 130.05 0 0 1 11.657 4.227c-2.178 8.07-3.843 17.294-4.868 27.542-5.893 4.868-11.401 9.992-16.525 15.116-4.867-5.509-9.351-11.017-12.938-16.398zm22.803 72.506c-15.116 4.612-26.133 4.227-30.232-1.153-4.099-5.38-1.281-16.141 7.43-29.335 3.587-5.38 7.942-10.889 13.066-16.397 4.996 5.124 10.633 10.248 16.525 15.116.897 10.12 2.562 19.343 4.868 27.414-3.971 1.793-7.942 3.202-11.657 4.355zm54.187 1.794c-4.74 12.938-10.889 20.368-16.91 20.368s-12.17-7.43-16.91-20.368c-.256-.897-.641-1.665-.897-2.562 5.893-2.69 11.785-5.893 17.806-9.351 5.893 3.587 11.914 6.661 17.806 9.48-.383.639-.639 1.536-.895 2.433zm43.17-32.154c8.711 13.195 11.529 23.827 7.43 29.335-4.099 5.38-14.988 5.893-30.232 1.153-3.715-1.153-7.686-2.562-11.657-4.355 2.178-8.07 3.843-17.422 4.868-27.542 5.893-4.868 11.401-9.992 16.525-15.116 4.996 5.508 9.48 11.017 13.066 16.525z" fill="#413adb" data-color="1"></path>
                              <path fill="#f2bf03" d="M69.129 42.112c0 7.216-5.85 13.066-13.066 13.066-7.216 0-13.066-5.85-13.066-13.066 0-7.216 5.85-13.066 13.066-13.066 7.216 0 13.066 5.85 13.066 13.066z" data-color="2"></path>
                              <path fill="#f2bf03" d="M113.068 100.014c0 7.216-5.85 13.066-13.066 13.066-7.216 0-13.066-5.85-13.066-13.066 0-7.216 5.85-13.066 13.066-13.066 7.216 0 13.066 5.85 13.066 13.066z" data-color="2"></path>
                              <path fill="#c6f4eb" d="M165.078 158.301c0 7.216-5.85 13.066-13.066 13.066-7.216 0-13.066-5.85-13.066-13.066 0-7.216 5.85-13.066 13.066-13.066 7.216 0 13.066 5.85 13.066 13.066z" data-color="3"></path>
                          </g>
                      </svg>
                    </Grid>
                  </Inset>
                  <Text size="7" weight="bold" as="p" align="center">Cells and Beyond</Text>
                  <Text size="5" as="p" align="center">Biology is considered an easy and interesting subject, but many students tend not to like it because of all the memorization it involves for tests. Here at Stem Made Fun, we believe in interactive learning. Science has proven that through interactive learning, students will use more of their senses which in turn will connect multiple neurons forming long-term memory. With this course, we intend to make students understand its concepts without having to just memorize them. By the end, they will be in awe of Biology.</Text>
                </Card>
            </Box>
          <Box>
            <Card size="2">
              <Grid style={{placeItems: "center"}}>
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://static.wixstatic.com/media/2288b9_626f7396209544bebbdbd744bf2a2bf7~mv2.webp"
                    alt="coding"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 200,
                      backgroundColor: 'var(--gray-5)',
                    }}
                  />
                </Inset>
              </Grid>
                <Text size="7" weight="bold" as="p" align="center">Let&apos;s Code</Text>
                <Text size="5" as="p" align="center">In a STEM filled world, programming is a must. With applications in a wide range of fields, we will be teaching python to students. We want to ignite a flame in students so that they can be introduced to computer science, start coding early on and take control of their Software education. By partaking in this course, they are one vital step closer to becoming great programmers. This can serve as a stepping stone in the direction of considering programming as a career path and in building the skill set to thrive in it.</Text>
            </Card>
          </Box>
         <Box>
           <Card size="2">
             <Grid style={{placeItems: "center"}}>
               <Inset clip="padding-box" side="top" pb="current">
                 <Avatar
                   src="https://static.wixstatic.com/media/2288b9_0c78b1f043584224b643b58ea98516d7~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mic-icon-2048x2048-qg3t3t7v.png"
                   fallback="microphone"
                   radius="full"
                   style={{
                     display: 'block',
                     objectFit: 'cover',
                     width: '100%',
                     height: 200,
                     backgroundColor: 'var(--gray-5)',
                   }}
                 />
               </Inset>
             </Grid>
              <Text size="7" weight="bold" as="p" align="center">Persuasive Reasoning</Text>
            <Text size="5" as="p" align="center">Debating, instead of arguing, can help you defuse a rapidly escalating situation. Debating helps you to develop essential critical thinking skills – the ability to make  reasoned and well thought out arguments in addition to questioning the evidence behind a particular stance or conclusion. This course can help build soft skills which are required at every stage in life.  Constructive debate is also said to have a positive impact on the cognitive development of a child. Starting at a young age will make the students more confident and comfortable with expressing themselves later on and make public speaking less daunting.</Text>
           </Card>
          </Box>
          <Box>
            <Card size="2">
              <Grid style={{placeItems: "center"}}>
                 <Inset clip="padding-box" side="top" pb="current">
                    <svg preserveAspectRatio="none" data-bbox="36.61 37.995 126.78 124.01" viewBox="36.61 37.995 126.78 124.01" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                        <g>
                            <path fill="#FF83B5" d="M122.53 156.415l-85.92-10.54 40.02-107.88 82.91 7.53-37.01 110.89z" data-color="1"></path>
                            <path fill="#C6F4EB" d="M108.8 130.725l11.4 1.24 4.38-12.39-11.4-1.24-4.38 12.39z" data-color="2"></path>
                            <path fill="#C6F4EB" d="M103.47 145.805l11.41 1.25 4.37-12.39-11.4-1.25-4.38 12.39z" data-color="2"></path>
                            <path fill="#C6F4EB" d="M114.13 115.645l11.4 1.24 4.38-12.39-11.4-1.25-4.38 12.4z" data-color="2"></path>
                            <path fill="#C6F4EB" d="M119.46 100.555l11.4 1.24 4.38-12.38-11.4-1.25-4.38 12.39z" data-color="2"></path>
                            <path fill="#C6F4EB" d="M129.17 73.085l-4.38 12.39 11.4 1.24 4.38-12.38-11.4-1.25z" data-color="2"></path>
                            <path fill="#413ADB" d="M94.34 128.885l11.4 1.25 4.37-12.39-11.4-1.24-4.37 12.38z" data-color="3"></path>
                            <path fill="#413ADB" d="M89.01 143.975l11.4 1.24 4.38-12.39-11.41-1.24-4.37 12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M99.66 113.805l11.41 1.25 4.38-12.39-11.41-1.25-4.38 12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M105 98.725l11.4 1.24 4.37-12.38-11.4-1.25-4.37 12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M114.7 71.255l-4.38 12.39 11.4 1.24 4.38-12.38-11.4-1.25z" data-color="3"></path>
                            <path fill="#413ADB" d="M95.99 116.205l-11.39-1.24-4.38 12.38 11.39 1.25 4.38-12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M79.27 130.045l-4.38 12.39 11.39 1.24 4.38-12.39-11.39-1.24z" data-color="3"></path>
                            <path fill="#413ADB" d="M101.32 101.115l-11.39-1.24-4.38 12.39 11.39 1.25 4.38-12.4z" data-color="3"></path>
                            <path fill="#413ADB" d="M106.65 86.035l-11.4-1.24-4.37 12.39 11.39 1.24 4.38-12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M107.6 83.345l4.38-12.38-11.4-1.25-4.37 12.39 11.39 1.24z" data-color="3"></path>
                            <path fill="#413ADB" d="M66.09 125.805l11.4 1.25 4.38-12.39-11.4-1.24-4.38 12.38z" data-color="3"></path>
                            <path fill="#413ADB" d="M65.14 128.495l-4.38 12.4 11.4 1.24 4.38-12.39-11.4-1.25z" data-color="3"></path>
                            <path fill="#413ADB" d="M71.42 110.725l11.4 1.25 4.38-12.4-11.4-1.24-4.38 12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M92.52 84.495l-11.39-1.24-4.38 12.39 11.4 1.24 4.37-12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M93.48 81.805l4.37-12.39-11.39-1.24-4.38 12.38 11.4 1.25z" data-color="3"></path>
                            <path fill="#413ADB" d="M67.74 113.125l-11.39-1.24-4.38 12.38 11.39 1.24 4.38-12.38z" data-color="3"></path>
                            <path fill="#413ADB" d="M51.02 126.955l-4.38 12.4 11.39 1.24 4.38-12.39-11.39-1.25z" data-color="3"></path>
                            <path fill="#413ADB" d="M73.07 98.035l-11.39-1.24-4.38 12.39 11.39 1.25 4.38-12.4z" data-color="3"></path>
                            <path fill="#413ADB" d="M78.4 82.955L67 81.715l-4.37 12.38 11.39 1.25 4.38-12.39z" data-color="3"></path>
                            <path fill="#413ADB" d="M83.73 67.875l-11.4-1.24-4.37 12.38 11.39 1.25 4.38-12.39z" data-color="3"></path>
                            <path fill="#011E62" d="M159.54 45.525l-37.01 110.89 4.39 5.59 36.47-107.47-3.85-9.01z" data-color="4"></path>
                            <path fill="#011E62" d="M149.4 52.775l-69.49-6.89-6.02 15.11 69.26 8.09 6.25-16.31z" data-color="4"></path>
                        </g>
                    </svg>
                 </Inset>
               </Grid>
              <Text size="7" weight="bold" as="p" align="center">Number Fun</Text>
                <Text size="5" as="p" align="center">In our technologically advancing world, math continues to have many implications. The difficulty is that students fail to maintain enthusiasm for math perceiving it to be either hard to comprehend or uninteresting. This causes them to drop out of advanced math classes, preventing them from achieving their dreams. Our goal is to make math understandable and fun again, and to change the child’s view on math. Once a child is encouraged and shown how delightful and relevant math can be, they will not have to struggle with it again.</Text>
            </Card>
          </Box>
        </Grid>
      </main>
    </>
  );
}
