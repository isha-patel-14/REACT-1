// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import './task1.css'

import down_arrow from './assets/down_arrow.png'
import logo from './assets/ARway_logo.png'
import vid from './assets/ARway - Redefining AR Experiences.mp4'


function App() {

  return (
    <>

      <div className="part1">
        <div className="navbar">

          <div className="logo">
            <img style={{ height: "200px", marginTop: "-55px", marginLeft: "-70px" }} src={logo} alt="ARway logo" />
          </div>

          <div className="nav_list">
            <div className="list1">
              <div>Solutions</div>
              <div><img src={down_arrow} className="down_arrow" alt="down" /></div>
            </div>

            <div className="list1">
              <div>Technology</div>
              <div><img src={down_arrow} className="down_arrow" alt="down" /></div>
            </div>

            <div className="list1">
              <div>Resources</div>
              <div><img src={down_arrow} className="down_arrow" alt="down" /></div>
            </div>

            <div className="list1">
              <div>Investors</div>
              <div><img src={down_arrow} className="down_arrow" alt="down" /></div>
            </div>

            <div className="list1">
              <div>Pricing</div>
            </div>
          </div>

          <div className="nav_box">
            <div className="login">
              <button onclick="openLoginForm()">Login</button>
            </div>

            <div className="contact_us">
              Contact us
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="headings">
          <div className="h1">One Platform</div>
          <div className="gradient-text">Endless AR Possibilities</div>
          <div className="h2">Transforming spaces with cutting-edge Indoor Mapping Solutions for Navigation and Wayfinding
          </div>
          <div className="button">Get Started</div>
        </div>

        <div className="video-container">
          <video src={vid} controls autoPlay loop muted  className="video" > video here
          </video>
        </div>

        <div className="gradient-text-2">SOLUTIONS</div>
        <div className="h3">Full Stack Visitor Experience Suite</div>

        <div className="boxes">

          <div className="box1">
            <div className="h4">Indoor Maps</div>
            <div className="h5">Static & branded 2D Maps of venues</div>
            <div><img src={"https://www.arway.ai/wp-content/uploads/2024/06/indoor-maps.png"} className="img1" alt="" />

            </div>

            <div className="sub-box">

              <div className="button1">Wayfinding</div>
              <div className="tick-flex">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Custom Branding</div>
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Multi Channel</div>
              </div>
              <div className="box-flex">
                <div className="button2">Mobile</div>
                <div className="button3">Web</div>
                <div className="button4">Klosk</div>
                <div className="button5">Print</div>
              </div>
            </div>
            <div className="learn_more">Learn More</div>

          </div>

          <div className="box1">
            <div className="h4">Interactive Maps</div>
            <div className="h5">Dynamic point-to-point routing on interactive maps</div>
            <div><img src={"https://www.arway.ai/wp-content/uploads/2024/06/interactive-maps.png"} className="img3"
              alt="" />
            </div>

            <div className="sub-box">

              <div className="button1">Wayfinding</div>
              <div className="tick-flex">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Custom Branding</div>
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Multi Channel</div>
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Analytics</div>
              </div>
              <div className="box-flex">
                <div className="button2">Mobile</div>
                <div className="button3">Web</div>
                <div className="button4">Klosk</div>
              </div>
            </div>
            <div className="learn_more">Learn More</div>

          </div>

          <div className="box2">
            <div className="h6">AR Navigation & Indoor Positioning</div>
            <div className="h5">Turn-by-turn, sub-meter precise Augmented Reality Guide & Blue Dot</div>
            <div><img src={"https://www.arway.ai/wp-content/uploads/2024/06/AR-Navigation-Indoor-Positioning-min-1.png"} className="img4" alt="" /></div>

            <div className="sub-box">

              <div className="button8">Navigation</div>
              <div className="tick-flex">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>POI Directory</div>
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Multi Floor</div>
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Analytics</div>
              </div>
              <div className="box-flex">
                <div className="button6">Mobile</div>
                <div className="button7">Headset</div>
              </div>
            </div>
            <div className="learn_more_1">Learn More</div>

          </div>

          <div className="box3">
            <div className="h7">AR Immersive Experiences</div>
            <div className="h5">Location-based immersive Augmented Reality experiences</div>
            <div><img src="https://www.arway.ai/wp-content/uploads/2024/06/ARExperiences.png" className="img5" alt="" />
            </div>

            <div className="sub-box">

              <div className="button9">Advertising & Training</div>
              <div className="tick-flex">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>2D & 3D Content</div>
                <div><img src={"https://cdn-icons-png.flaticon.com/128/992/992481.png"} className="img2" alt="" /></div>
                <div>Analytics</div>
              </div>
              <div className="box-flex">
                <div className="button10">Mobile</div>
                <div className="button11">Headset</div>
              </div>
            </div>
            <div className="learn_more_2">Learn More</div>

          </div>
        </div>

        <div className="gradient-text-3">
          USE CASES
        </div>

        <div className="h8">Indoor Navigation &</div>
        <div className="h8">Wayfinding Platform</div>

        <div className="box4">

          <div className="BOX1">
            <div><img src={"https://www.arway.ai/wp-content/uploads/2024/01/Frame-7801-1-min.png"} className="img7"
              alt="" />
            </div>
            <div className="h9">
              <div>Navigation &</div>
              <div>Wayfinding</div>
            </div>
            <div className="List">
              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Directory with Points of Interest</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Multiple Levels & Floors</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Interactive Navigation</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Turn-by-Turn & Step-by-Step</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>AI-assisted optimized routes</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Audio Narration</div>
              </div>
            </div>
          </div>

          <div className="BOX1">
            <div><img src={"https://www.arway.ai/wp-content/uploads/2024/01/Frame-7801-2-min-1.png"} className="img7"
              alt="" />
            </div>
            <div className="h9">
              <div>Curated Routes</div>
              <div>& Guided Tours</div>
            </div>
            <div className="List">
              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Audio-narrated guided tours around specific locations</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Context-enhancing AR activations</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Immersive experience</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Holographic tour guides</div>
              </div>
            </div>
          </div>

          <div className="BOX1">
            <div><img style={{ height: "286px", width: "405px", marginTop: "-2px", marginBottom: "10px" }}
              src="https://www.arway.ai/wp-content/uploads/2024/01/Frame-7801-3-min-1.png" alt="" />
            </div>
            <div className="h9">
              <div>Dynamic Exhibits &</div>
              <div>Displays</div>
            </div>
            <div className="List">
              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Expanded display capacity</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Immersive AR activations & holographic displays</div>
              </div>

              <div className="l1">
                <div><img src={"https://cdn-icons-png.flaticon.com/128/15050/15050690.png"} className="img6" alt="" />
                </div>
                <div>Descriptions & extra layer of context</div>
              </div>
            </div>
          </div>
        </div>

        <div className="button12">
          Sign up today
        </div>

        <div className="part2">
          <div className="h1">How you can transform your space with ARway</div>
          <div className="text1">Learn how to effortlessly bring a new dimension to any space using ARway with our easy,
            three-step approach. No deep tech skills needed—just your imagination and our user-friendly platform.
          </div>
        </div>

        <div className="cards_three">
          <div className="card1">
            <img src={"https://www.arway.ai/wp-content/uploads/2024/02/set-ur-map.png"} className="c2" />
            <div className="text4">Set-up your map</div>
            <div className="text5">Upload a floor plan to our Creator Portal, download a QR code, then use our app to
              anchor
              the floor plan to the physical location</div>
          </div>

          <div className="card2">
            <img src={"https://www.arway.ai/wp-content/uploads/2024/02/Build-ur-exp.png"} className="c1" />
            <div className="text2">Build your experience</div>
            <div className="text3">Use our Design Studio and app to build your experience. Create a directory and add AR
              assets.</div>
          </div>

          <div className="card3">
            <img src={"https://www.arway.ai/wp-content/uploads/2024/02/track-succes-1.png"} className="c1" />
            <div className="text2">Publish & track success</div>
            <div className="text3">Publish your map to make it live and track successes with your analytics dashboard.
            </div>
          </div>
        </div>

        <div className="box5">
          <div className="content-container">
            <div className="text6">
              <span className="highlight">ARway</span> - Redefining Navigation and Interaction with Augmented Reality
            </div>
            <p className="para">
              Discover the Power of Immersive Navigation and Engagement with ARway: Your Comprehensive Indoor
              Navigation and AR Experience Platform.
            </p>
            <div className="explore-button">Explore Our Solutions</div>
          </div>
        </div>
      </div>

      <div className="part3">
        <div className="black-blue">

          <div className="text7">
            <h1>ARway's disruptive technology differentiators</h1>
            <p>No need for beacons or hardware</p>
          </div>

          <div className="img-card">
            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-1.png"}
                  alt="" />
              </div>
              <h1>Ease of Maintenance</h1>
              <p>Enjoy a worry-free AR experience with no ongoing hardware maintenance, keeping operational costs
                low and satisfaction high.</p>
            </div>

            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-1-1.png"}
                  alt="" />
              </div>
              <h1>Simplify Your Start</h1>
              <p>Launch into the world of AR with minimal upfront investment, free from the hassle of costly
                hardware installations, 3D scanning devices and upkeep.</p>
            </div>

            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-1-2.png"}
                  alt="" />
              </div>
              <h1>Customer Convenienc</h1>
              <p>With ARway, ease of adoption is paramount. We ensure a low barrier to entry with minimal
                commitment, making it effortless for customers to get started.</p>
            </div>

          </div>

          <div className="text7">
            <p>Visual maker experience activation</p>
          </div>

          <div className="img-card">
            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-1-3.png"}
                  alt="" />
              </div>
              <h1>Seamless Integration</h1>
              <p>Use existing visual markers within your space, like logos or QR codes, to activate comprehensive
                AR maps — a perfect blend of brand integration and tech innovation.</p>
            </div>

            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-1-4.png"}
                  alt="" />
              </div>
              <h1>Instant Engagement</h1>
              <p>Propel visitors into immersive experiences instantly, creating memorable interactions and
                branding opportunities with every visit.</p>
            </div>

            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-1-5.png"}
                  alt="" />
              </div>
              <h1>One Marker, Many Possibilities</h1>
              <p>A single marker can unlock an entire AR experience, providing location persistence and endless
                possibilities for interaction.</p>
            </div>

          </div>

          <div className="text7">
            <p>No coding required</p>
          </div>

          <div className="img-card">
            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-1-6.png"}
                  alt="" />
              </div>
              <h1>AR Navigation Made Easy</h1>
              <p>Implement blue dot navigation and AR content with our intuitive, no-code assets.</p>
            </div>

            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-2.png"}
                  alt="" />
              </div>
              <h1>Monetize Your Airspace</h1>
              <p>Leverage AR to introduce ads and gamified content, creating new revenue streams within your
                space.</p>
            </div>

            <div className="c_1">
              <div className="c_img">
                <img src={"https://www.arway.ai/wp-content/uploads/2024/02/location-direction-8616013-2-1-1.png"}
                  alt="" />
              </div>
              <h1>White Label Solutions</h1>
              <p>Quickly launch your branded AR app with our white label capabilities, complete with built-in
                analytics to understand visitor behavior.</p>
            </div>
          </div>

          <div className="explore-button1">Explore ARway Now</div>

          <div className="part4">
            <div className="text8">
              <h1>An AR solution for agencies</h1>
              <p>Create AR experiences in <b><i>hours not weeks</i></b> for your clients and boost your revenue!
              </p>
            </div>
          </div>

          <div className="part4_cards">
            <div className="p4_c1">
              <img
                src={"https://www.arway.ai/wp-content/uploads/2024/02/Create-a-New-Ad-min-1024x556.png"} className="p4_img1" alt="" />
              <div className="text9">
                <h1>Fast track your AR rollout</h1>
                <p>Set up your AR map swiftly with our straightforward easy to use Web Editor Studio - no coding
                  required.</p>
              </div>
            </div>

            <div className="p4_c1">
              <img src={"https://www.arway.ai/wp-content/uploads/2024/02/Manage-My-Ads-min-1024x556.png"} className="p4_img1"
                alt="" />
              <div className="text9">
                <h1>Effortless to manage</h1>
                <p>Design your AR experience with user-friendly tools, making it simple to author and deploy AR
                  content in record time.</p>
              </div>
            </div>
          </div>

          <div className="part5">
            <div className="text7">
              <h1>Case Studies</h1>
            </div>

            <div className="img-card2">
              <div className="c_2">
                <div className="c_img2">
                  <img src={"https://www.arway.ai/wp-content/uploads/2024/06/don-150x150.jpg"} alt="" />
                </div>
                <h1>Donegal County Museum</h1>
                <div className="partner">Partner: <em>ERNACT</em></div>
                <p>Delve into history at the Donegal County Museum in Ireland using ARway to view interactive 3D
                  models, videos, and audio recordings along AR navigation routes</p>
              </div>

              <div className="c_2">
                <div className="c_img2">
                  <img src={"https://www.arway.ai/wp-content/uploads/2024/06/innovation-150x150.jpg"} alt="" />
                </div>
                <h1>Inishowen Innovation Hub</h1>
                <div className="partner">Partner: <em>ERNACT</em></div>
                <p>Explore the corporate coworking space in Ireland enriched with AR content and intuitive AR
                  navigation with integrated images, videos, 3D models.</p>
              </div>

              <div className="c_2">
                <div className="c_img2">
                  <img src={"https://www.arway.ai/wp-content/uploads/2024/06/localiza-150x150.jpg"} alt="" />
                </div>
                <h1>Localiza</h1>
                <div className="partner">Partner: <em>DrivenCX</em></div>
                <p>Travelers use the Localiza custom-branded app at Congonhas Airport, Sao Paulo to navigate
                  from the Localiza booth to car services and bus stops and enable exclusive offers..</p>
              </div>
            </div>
          </div>

          <div className="gradient-text-4">
                KEY ADVANTAGES:
            </div>
            <div className="text10">
                <h1>Why We Stand Out</h1>
            </div>

            <div className="card4">
                <div className="c4_box1">
                    <img  src={"https://www.arway.ai/wp-content/uploads/2024/01/Group-8959.png"} className="c4_img" alt=""/>
                    <p className="text11">Quick setup with no-code solutions.</p>
                </div>

                <div className="c4_box1">
                    <img  src={"https://www.arway.ai/wp-content/uploads/2024/01/Group-8959.png"} className="c4_img" alt=""/>
                    <p className="text11">Cross-platform functionality for broader reach.</p>
                </div>

                <div className="c4_box1">
                    <img  src={"https://www.arway.ai/wp-content/uploads/2024/01/Group-8959.png"} className="c4_img" alt=""/>
                    <p className="text11">Real-time map editing and content management from the web.</p>
                </div>

            </div>


        </div>



        </div>


      </>
      )
}

      export default App