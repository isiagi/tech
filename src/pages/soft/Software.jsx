import "./software.css";
import img from "../../assets/images/sot1.jpg";

const Software = () => {
  return (
    <div className="parent">
      <div className="mxWidt bg">
        <div className="soft__container"></div>
        <div className="soft__section">
          <h2 style={{textAlign: 'center', marginBlock: "2rem"}}>custom software development</h2>
          <p>
            Developing software that meets specific business requirements is
            necessary for survival in today’s competitive era and custom
            software development has become an ideal solution for businesses.
            The process involves the conceptualizing, designing, building, and
            deploying of software for a specific individual or a group of
            individuals within an organization or as a third-party arrangement.
          </p>
          <div className="ye__grid">
            <img src={img} alt="" className="soft__img" />
            <div>
              <h1>
                Are you wondering why you would want to invest in custom
                software development?
              </h1>
              <p>
                Scalability is one of the most important advantages of
                customized software. By developing custom solutions,
                organizations can modify or add to their capacity as they
                expand. The software is designed with specific infrastructure,
                branding, and implementation needs in mind.{" "}
              </p>
            </div>
          </div>
          <h3 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Types of Custom Software Development</h3>
          <div>
            <h4>1. Mobile Application Development</h4>
            <p>
              Custom mobile application development is one of the most effective
              ways to ensure a personalized and highly satisfactory user
              experience. Businesses of all sizes are taking advantage of these
              custom apps to help them stay competitive and increase
              productivity.
            </p>
            <p>
              Development of custom apps takes place to address a particular
              audience rather than catering to a large group with varying
              requirements. This is the reason custom mobile app development is
              gaining traction and proving to be an attractive option for
              businesses.
            </p>
          </div>
          <div>
            <h4>2. Ecommerce Software Development</h4>
            <p>
              The eCommerce sector continues to show unprecedented growth with
              the competition becoming fierce. Capturing customer attention is
              crucial and presents a multitude of challenges. To meet these
              ever-increasing demands and ensure exceptional customer
              experience, e-commerce companies are investing in custom
              solutions.
            </p>
          </div>
          <div>
            <h4>3. SaaS Development</h4>
            <p>
              Software as a Service (SaaS) is one of the fastest-growing sectors
              in the tech industry. In fact, IT is expected that the SaaS
              industry will reach a market size of over $185.8B by 2024.{" "}
            </p>
            <p>
              Developing a custom solution enables SaaS companies to provide
              their clients with access to online applications and eliminates
              the need for costly and complex hardware management. The right
              solution is designed to strategically fit the needs of any SaaS
              client and can be easily adapted.{" "}
            </p>
          </div>
          <div>
            <h4>4. Custom Product Development</h4>
            <p>
              Custom product development is best for businesses that aim to
              monetize their software solution to generate revenue. This service
              covers the end-to-end process of developing products which
              includes product strategy, design, development, launch,
              maintenance, support, and expansion.{" "}
            </p>
            <p>
              Product development can include a variety of software solutions,
              including…{" "}
            </p>
            <ul style={{fontWeight: '500'}}>
              <li>Web-based software products</li>
              <li>Mobile apps</li>
              <li>SaaS-based applications</li>
              <li>White label software. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
