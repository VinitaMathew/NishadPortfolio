import React from "react";
import pranatiPagesData from "./PranatiPagesData";
import "./PranatiProject.scss";

const IntroImg = require("../../../../../assets/client-project1.png");
const PTImage1 = require("../../../../../assets/pranati-image1.png");
const PTImage2 = require("../../../../../assets/pranati-image2.png");
const PTImage3 = require("../../../../../assets/pranati-image3.png");
const PTImage4 = require("../../../../../assets/pranati-image4.png");
const PTImage5 = require("../../../../../assets/pranati-image5.png");
const PTImage6 = require("../../../../../assets/pranati-image6.png");
const PTAnalysis1 = require("../../../../../assets/pranati-analysis-icon1.png");
const PTAnalysis2 = require("../../../../../assets/pranati-analysis-icon2.png");
const PTAnalysis3 = require("../../../../../assets/pranati-analysis-icon3.png");
const PTAnalysis4 = require("../../../../../assets/pranati-analysis-icon4.png");
const PTAnalysis5 = require("../../../../../assets/pranati-analysis-icon5.png");
const PTImage7 = require("../../../../../assets/pranati-image7.png");
const PTImage8 = require("../../../../../assets/pranati-image8.png");
const PTImage9 = require("../../../../../assets/pranati-image9.png");
const PTImage10 = require("../../../../../assets/pranati-image10.png");
const PTImage11 = require("../../../../../assets/pranati-image11.png");
const PTImage12 = require("../../../../../assets/pranati-image12.png");
const PTImage13 = require("../../../../../assets/pranati-image13.png");
const PTImage14 = require("../../../../../assets/pranati-image14.png");

export default function PranatiProject() {
  return (
    <div className="pranati-container">
      <img src={IntroImg} alt="" />
      <br />
      <br />
      <br />
      <div className="objective">
        <b>Pranati is a wellness website</b> that offers therapy services to
        improve mental health and overall well-being. Its responsive design
        ensures a great user experience on all devices. The website has a
        calming color palette, easy-to-navigate interface, and informative
        content to help users select and book therapy services.
      </div>
      <br />
      <h2>Getting to understand the niche better </h2>
      <div>
        To understand the the opportunities and potential of the field of
        therapy in India, a detailed research on this field was performed and
        some of the interesting facts and statistics are displayed below{" "}
      </div>
      <div className="analysis-container">
        <div className="analysis-item">
          <span className="percent">80%</span>
          <span>
            of people with mental health disorders in India{" "}
            <b>do not receive treatment</b>.
          </span>
        </div>
        <div className="analysis-item">
          <img src={PTImage1} alt="" />
          <span>
            Mental health disorders are a significant problem in India, with an
            estimated <b>56 million people affected by depression</b> and
            <b>38 million people affected by anxiety disorders</b>.
          </span>
        </div>
        <div className="analysis-item">
          <img src={PTImage2} alt="" />
          <span>
            In recent years, there has been a growing interest in therapy and
            counseling services in India. According to a report by the Indian
            Brand Equity Foundation, the counseling and therapy market in India
            is expected to grow at a compound annual{" "}
            <b>growth rate of 20% between 2020 and 2025</b>.
          </span>
        </div>
        <div className="analysis-item">
          <span className="percent">74%</span>
          <span>
            of mental health professionals in India had{" "}
            <b>started providing online therapy</b> services during the
            pandemic.
          </span>
        </div>
      </div>
      <div className="info-container">
        <div className="desc">
          In India, there are growing opportunities for therapy as more people
          seek support for their mental health and wellbeing. With the
          increasing awareness and acceptance of mental health issues, therapy
          has become an accessible and viable option for those who are
          struggling with anxiety, depression, stress, and other mental health
          concerns. <br />
          <br />
          Therapy in India is offered in various forms such as{" "}
          <b>
            individual therapy, group therapy, family therapy, and couples
            therapy
          </b>
          . Additionally, there are several emerging fields of therapy, such as
          art therapy, dance movement therapy, and music therapy, that are
          gaining popularity. <br />
          <br />
          <b>
            Overall, the demand for therapy in India is on the rise, creating
            numerous opportunities for qualified therapists
          </b>{" "}
          and mental health professionals to make a positive impact on the lives
          of individuals and communities.
        </div>
        <img src={PTImage3} alt="" />
      </div>
      <br />
      <br />
      <h2>Understanding the client better</h2>
      <div>
        Pranati is a team of engineers who have turned their attention to
        psychology, with{" "}
        <b>
          a mission to create a kinder, more compassionate, and safer space for
          people seeking therapy
        </b>
        . Their core values center around providing hope and comfort to their
        patients, without any judgement or stigma.
        <br />
        <br />
        Pranati's team recognizes that seeking therapy can be a vulnerable and
        challenging experience, and{" "}
        <b>
          they strive to create a safe and supportive environment where patients
          feel seen and heard
        </b>
        . Their focus on kindness and compassion is reflected in their approach
        to therapy, where they aim to provide personalized care that meets the
        unique needs of each patient.
        <br />
        <br />
        Overall, Pranati's dedication to creating a safe and non-judgmental
        space for therapy is at the heart of their mission. By prioritizing the
        comfort and well-being of their patients, they aim to help people find
        the hope and healing they need to live happier, healthier lives.
      </div>
      <br />
      <br />
      <h2>Competitive analysis</h2>
      <div className="info-container-2">
        <div className="desc">
          After conducting the competitive analysis for Pranati's wellness
          website, several key insights were gained that can inform the design
          and development of the website. The analysis revealed that while there
          are several other therapy service providers in India, many of them
          have websites that are outdated, difficult to navigate, or do not
          convey a strong sense of brand identity.
          <br />
          <br /> In contrast, Pranati has a unique opportunity to differentiate
          itself through a user-centered design approach that prioritizes ease
          of use, accessibility, and a strong brand identity. This can be
          achieved through thoughtful information architecture, clear and
          concise copywriting, and visual design elements that are consistent
          with Pranati's mission and values.
        </div>
        <img src={PTImage4} alt="" />
      </div>
      <br />
      <br />
      <div className="analysis-table">
        <div>
          <img src={PTImage5} alt="" />
          <span>Amaha - Your mental health partner</span>
        </div>
        <br />
        <div className="table-wrapper">
          <table>
            <tr>
              <th>Strengths</th>
              <th>Weakness</th>
              <th>Opportunities</th>
              <th>Threats</th>
            </tr>
            <tr>
              <td>
                Clear and visually appealing website design.
                <br />
                <br />{" "}
                <b>Well-organised navigation and user-friendly interface.</b>
                <br />
                <br />
                Offers a variety of health services and programs.
                <br />
                <br /> Provides informative and engaging content about health
                and wellness.
                <br />
                <br /> Offers online booking and appointment scheduling
                functionality.
              </td>
              <td>
                Limited information about the team or healthcare professionals
                behind the services.
                <br />
                <br /> Could benefit from more detailed descriptions of the
                services and programs offered.
                <br />
                <br />{" "}
                <b>
                  The website could be more responsive and optimized for mobile
                  devices.
                </b>
                <br />
                <br /> Limited customer reviews or testimonials available on the
                website.
              </td>
              <td>
                Expanding the range of services offered to cater to a wider
                audience.
                <br />
                <br />{" "}
                <b>
                  Enhancing the website's mobile responsiveness to improve user
                  experience.
                </b>
                <br />
                <br /> Establishing partnerships with local health professionals
                or organizations to enhance credibility.
                <br />
                <br /> Incorporating a blog or resource section to provide more
                educational content.
              </td>
              <td>
                Competition from other online health platforms and wellness
                websites.
                <br />
                <br /> Maintaining up-to-date information and staying ahead of
                emerging health trends.
                <br />
                <br />{" "}
                <b>
                  Negative customer experiences or feedback impacting the
                  reputation of the brand.
                </b>
                <br />
                <br /> Adapting to changing healthcare regulations and privacy
                concerns.
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br />
      <div className="analysis-table">
        <div>
          <img src={PTImage6} alt="" />
          <span>Docvita</span>
        </div>
        <br />
        <div className="table-wrapper">
          <table>
            <tr>
              <th>Strengths</th>
              <th>Weakness</th>
              <th>Opportunities</th>
              <th>Threats</th>
            </tr>
            <tr>
              <td>
                Simplified user journey and step-by-step process for getting
                started with therapy.
                <br />
                <br />{" "}
                <b>
                  Clearly outlines the benefits of therapy and the steps
                  involved.
                </b>
                <br />
                <br /> Offers a search function to find therapists based on
                location and specialization.
                <br />
                <br /> Provides user testimonials and ratings to build trust and
                credibility.
                <br />
                <br /> Mobile-friendly design and responsive layout.
              </td>
              <td>
                Limited information about the organization behind the platform.
                <br />
                <br />
                <b>
                  Asking for email and phone number before viewing services and
                  prices.
                </b>
                <br />
                <br /> Lack of transparency about the qualifications and
                credentials of therapists.
                <br />
                <br /> Limited options for therapy types or modalities.
                <br />
                <br /> The website's design could be more visually appealing and
                modern.
              </td>
              <td>
                Expanding the platform to include additional therapy types or
                specialized areas.
                <br />
                <br />
                <b>
                  Incorporating more detailed therapist profiles with
                  qualifications and expertise.
                </b>
                <br />
                <br /> Offering additional resources or educational content
                related to mental health and therapy.
                <br />
                <br /> Integrating tele-health services into the platform would
                provide users with the option for remote consultations, catering
                to the growing demand for virtual healthcare.
              </td>
              <td>
                Competitors in the Online Appointment Booking Space: The website
                faces competition from other online platforms that offer similar
                doctor appointment booking services. Staying ahead in terms of
                user experience, doctor database, and convenience is crucial.
                <br />
                <br />
                User Privacy and Data Security: Ensuring robust privacy and data
                security measures is essential to maintain user trust,
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br />
      <h2>What have we learnt from the analysis?</h2>
      <div style={{ maxWidth: "700px" }}>
        To provide a professional and smooth user experience, the Pranati
        wellness site must incorporate the following factors -
      </div>
      <div className="analysis-result-container">
        <div className="analysis-result-item">
          <img src={PTAnalysis1} alt="" />
          <span>
            <b>Comprehensive and Reliable Content:</b> Ensure that the website
            provides accurate and credible information related to mental
            wellness, covering a wide range of topics such as mental health
            conditions, coping strategies, self-care practices, and professional
            resources. Regularly update the content to maintain its relevance
            and reliability.
          </span>
        </div>
        <div className="analysis-result-item">
          <img src={PTAnalysis2} alt="" />
          <span>
            <b>User-Friendly Design and Navigation:</b> Focus on creating a
            user-friendly and intuitive design that allows visitors to easily
            navigate through the website and find the information they need.
            Prioritise clear and organised menus, logical page structures, and
            intuitive user interfaces.
          </span>
        </div>
        <div className="analysis-result-item">
          <img src={PTAnalysis3} alt="" />
          <span>
            <b>Accessibility and Inclusivity:</b> Ensure that the website is
            accessible to a diverse audience, including individuals with
            disabilities. Implement accessibility features such as alt-text for
            images, keyboard navigation support, and appropriate color
            contrasts. Consider providing content in multiple formats, including
            text, audio, and video, to accommodate different learning
            preferences.
          </span>
        </div>
        <div className="analysis-result-item">
          <img src={PTAnalysis4} alt="" />
          <span>
            <b>Emotional Support and Crisis Resources:</b> Integrate resources
            and helplines for individuals in need of immediate support or facing
            a mental health crisis. Provide clear instructions on how to seek
            help and offer guidance on accessing emergency services or
            contacting helplines.
          </span>
        </div>
        <div className="analysis-result-item">
          <img src={PTAnalysis5} alt="" />
          <span>
            <b>Mobile Responsiveness:</b> Optimise the website for mobile
            devices to cater to users who prefer accessing information on
            smartphones or tablets. Ensure that the design and functionality
            adapt seamlessly across different screen sizes and resolutions.
          </span>
        </div>
      </div>
      <br />
      <br />
      <h2>The challenges and blockers that we’re facing</h2>
      <div className="challenges">
        <div>
          <div>
            It is important to acknowledge that there are{" "}
            <b>
              certain constraints and limitations in terms of available
              resources and financial support. These constraints impact our
              ability to fully implement some essential features at this stage
              of the design process.
            </b>
            However, it is crucial to recognise the significance of the
            following factors, even if their implementation may be challenging
            in the current circumstances:
          </div>
          <br />
          <ul>
            <li>
              Comprehensive and Reliable Content: Although limited resources may
              restrict the extent of content coverage, we aim to provide
              accurate and relevant information pertaining to mental wellness
              within the available scope.
            </li>
            <li>
              Interactive and Engaging Elements: While resource limitations may
              hinder the inclusion of advanced interactive features, we will
              explore cost-effective alternatives to encourage user engagement
              and foster a sense of community.
            </li>
            <li>
              Personalisation and Customisation: Given the current financial
              constraints, creating personalised user experiences may require a
              simplified approach or phased implementation to accommodate future
              growth and enhancements.
            </li>
            <li>
              Collaboration with Mental Health Professionals: Recognising the
              financial limitations, partnering with mental health professionals
              at this stage may involve seeking their expertise through expert
              articles or external resources, rather than direct collaboration
              or online counselling services.
            </li>
          </ul>
        </div>
        <div className="desc-wrapper">
          <img src={PTImage7} alt="" />
          <div className="desc">
            Despite these constraints,{" "}
            <b>
              we will prioritise designing a user-friendly interface, ensuring
              accessibility, and implementing a cohesive visual identity aligned
              with the mental wellness theme.
            </b>
            Continuous evaluation of user feedback and careful consideration of
            future scalability will guide our decisions to optimise the website
            within the given resources and financial framework.
          </div>
        </div>
      </div>
      <h2>The final UI</h2>
      <br />
      <img src={PTImage8} alt="" />
      <br />
      <br />
      <br />
      <div className="ui-palette-wrapper">
        <img src={PTImage9} alt="" />
        <div className="palette">
          <h4>Colour Palette</h4>
          <div className="colors">
            <div className="color one"></div>
            <div className="color two"></div>
            <div className="color three"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h2>The Homepage</h2>
      <br />
      <div>
        {pranatiPagesData.map((page, index) => {
          return (
            <div key={index} className="homepage">
              <img src={page.image} alt="" />
              <ul>
                {page.desc.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <br />
      <h2>Other Pages</h2>
      <br />
      <div className="other-pages">
        <div className="pages-wrapper">
          <img src={PTImage10} alt="" />
          <img src={PTImage11} alt="" />
        </div>
        <div className="pages-wrapper">
          <img src={PTImage12} alt="" />
          <img src={PTImage13} alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <img src={PTImage14} alt="" />
      <br />
      <br />
      <br />
      <div>
        The first phase of the Pranati wellness website is completed. In the
        following phases, we would include more features and functionalities
        based on the user research that was conducted during the first phase.
        The booking flow is taken care by a third party appointment booking API
        called SetMore. Thus not much of a design change can be incorporated
        into that plugin, hence not added into this case study.
      </div>
    </div>
  );
}
