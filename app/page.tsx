"use client";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import SectionWithImageLeft from "@/components/SectionWithImage";
import SectionWithLink from "@/components/SectionWithLink";
import SectionWithImageRight from "@/components/SectionWithImageRight";
import SectionCentered from "@/components/SectionCentered";
import SectionWithImageNew from "@/components/SectionWithImageNew";
import experienceElement from "@/components/experienceElement";
import ExperienceElement from "@/components/experienceElement";
import SkillsCard from "@/components/SkillsCard";

const sections = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "Extracurriculars", title: "Extracurriculars" },
];

export default function Home() {
  return (
    <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl">
      <Navbar sections={sections} />
      <Header />
      <main className="container mx-auto px-4 py-16 ">
        <Section id="about" title="About">
          <p>
            <b>Software Engineer</b> focused on building{" "}
            <b>end-to-end data-driven applications</b>, combining real-time data
            processing with user-facing mobile experiences. Experienced in
            developing <b>Flutter applications</b> and backend systems, working
            with SQL and NoSQL databases, and integrating scalable services.
            Built projects involving data pipelines and mobile interfaces, with
            a strong interest in designing systems that turn data into usable
            products.
          </p>
          {/* <p>
            A Software Engineering graduate from King Fahd University of
            Petroleum and Minerals, with experience in{" "}
            <b>Mobile Application Development </b>
            using tools such as <b>Flutter</b>, as well as back-end development
            and working with <b>SQL and NoSQL</b> databases like Supabase and
            Firebase. Interested in <b>Product management</b> as well as
            self-development and finding new challenges.
          </p> */}
        </Section>
        <SectionWithImageNew
          id="projects"
          title="Real-Time Discord Data Pipeline (Kafka + HDFS)"
          subtitle="End-to-end system for streaming and storing Discord server data"
          techstack="Kafka | Python | HDFS | Docker | Discord API"
          developmentpoints={`• Developed a data ingestion service to collect messages from Discord text channels using the Discord API 
            • Implemented a Kafka producer to stream the collected data into a Kafka topic in real-time 
            • Designed a pipeline to handle continuous message ingestion and data structuring 
            • Stored streamed data in HDFS for scalable and durable storage 
            • Containerized the system using Docker to ensure consistent deployment and environment setup`}
          impactpoints={`• Built a real-time streaming pipeline simulating production-like data workflows
            • Enabled scalable storage of large volumes of unstructured data
            • Demonstrates practical experience with distributed systems, data pipelines, and containerization`}
          imageUrl="https://pngimg.com/uploads/discord/discord_PNG18.png"
          imageAlt="Discord Logo"
          imageWidth={204}
          imageHeight={204}
          linkUrl="https://github.com/FaresFouziNZ/discordBackupBot"
          linkText="View Project Repository →"
        />
        <SectionWithImageNew
          id="projects"
          title="Suspicious Bank Transaction Detection System"
          subtitle="Batch-based data processing system for detecting anomalous financial transactions"
          techstack="Scala | ZIO | PostgreSQL | MinIO | FastAPI | Docker"
          developmentpoints={`• Developed a batch processing system to analyze financial transaction data for suspicious behavior patterns
            • Designed the system to avoid redundant computation by optimizing batch processing logic
            • Implemented data storage and querying using PostgreSQL for structured transaction records
            • Integrated MinIO as an object storage layer for handling raw or large-scale data files
            • Built a separate FastAPI service in Python to expose an external API for calculating suspicious risk scores
            • Used Scala with ZIO to build a functional and reliable backend processing pipeline`}
          impactpoints={`• Demonstrates strong understanding of batch data processing systems
            • Shows ability to design multi-service architectures (processing + API layer)
            • Highlights experience with functional programming (Scala + ZIO)
            • Implements real-world concepts like deduplication and system efficiency
            • Reflects ability to work across multiple backend technologies`}
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1777090874/nmvbjhg_bpft7k.png"
          imageAlt="System Architecture Diagram"
          imageWidth={550}
          imageHeight={500}
          linkUrl="https://github.com/FaresFouziNZ/Suspicious-Transaction-Detection"
          linkText="View Project Repository →"
        />
        <SectionWithImageNew
          id="projects"
          title="Spotify Mobile Application Clone"
          subtitle="Flutter-based mobile application developed as part of an app development challenge, replicating core features of a music streaming platform"
          techstack="Flutter | Dart | Supabase"
          developmentpoints={`• Developed a functional MVP of a music streaming application within a 6-day time constraint
            • Implemented core features including song playback, search functionality, and playlist creation
            • Designed a responsive UI inspired by modern music streaming platforms
            • Built navigation structure using Go Router for multi-screen flow
            • Managed state and lifecycle using Flutter Hooks
            • Used Freezed for structured and type-safe data models
            • Integrated Supabase for backend data storage and retrieval`}
          impactpoints={`• Delivered a working mobile MVP under strict time constraints (6 days)
            • Demonstrated ability to rapidly learn and apply new technologies (Hooks, Go Router, Freezed, Riverpod, Supabase)
            • Showcased practical Flutter architecture and state management skills (MVVM)
            • Balanced feature scope with delivery speed in a real-world simulation scenario`}
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/250px-Spotify_logo_without_text.svg.png?_=20160123212544"
          imageAlt="Spotify Logo"
          imageWidth={204}
          imageHeight={204}
        />
        {/* <SectionWithImageLeft
          id="interests"
          title="Working with Flutter"
          text="I started using Flutter in 2021. Built various applications for different platforms such as mobile devices, desktop devices, web, and embedded devices. Developed more than 11 projects for college work, side projects, job works, and competitive participation."
          imageUrl="https://flutter.dev/assets/lockup_flutter_vertical.7e432d07dc23bc4f2c04fbaac8d8670e.png"
          imageAlt="Flutter Logo"
          imageWidth={204}
          imageHeight={204}
        /> */}
        {/* <SectionWithLink
          id="projects"
          title="Winning Flutter Weekend Hackathon"
          text="Formed a team with 4 random participants. Built a solution in the tourism field to connect tourists with local citizens. Developed the main scenario of the application within 36 hours, writing about 7500 lines of code. Won the hackathon and took first place."
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776993123/IMG_0659_m9jkre.jpg"
          imageAlt="Hackathon Image"
          imageWidth={320}
          imageHeight={320}
          linkUrl="https://github.com/FaresFouziNZ/FlutterWeekend"
          linkText="Check Github Repository"
        /> */}
        {/* <SectionCentered
          id="more"
          title="Figma Design"
          textColor="text-gray-800"
        >
          <a
            href="https://www.figma.com/design/xIFZH7mkALI2DL8dct8HfL/%D9%88%D9%84%D8%AF-%D8%A7%D9%84%D8%AF%D9%8A%D8%B1%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/3r8/xkb/nuf/Screenshot%202024-05-17%20002738.png"
              alt="Figma Design"
              width={680}
              height={680}
              className="mx-auto mt-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
            />
          </a>
        </SectionCentered> */}
        {/* <SectionWithImageLeft
          id="Hroof"
          title="Hroof Questions Application"
          text="A mobile application built using Flutter for the Intellectual and Electronic Sports Club at King Fahd University of Petroleum and Minerals. The application is designed to help the presenter to navigate through the questions and provide a seamless user experience."
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776995082/Screenshot_2026-04-24-04-15-02-74_9d8ed4b5b87a0fe65520dbf5e7f05d02-portrait_ie1iqe.png"
          imageAlt="Hroof Questions Application"
          imageWidth={320}
          imageHeight={320}
        /> */}
        {/* <SectionWithImageLeft
          id="Gebly"
          title="Gebly"
          text="Gebly is a Flutter mobile application that resolves the conflict and the disturbance of group food ordering by allowing the users to send their orders to the group host allowing him to view orders clean and organized."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/bk5/9kg/tyk/Screenshot%202024-05-17%20023246-portrait.png"
          imageAlt="Gebly"
          imageWidth={250}
          imageHeight={250}
        /> */}
        <div className="relative bg-gradient-to-r from-orange-400 via-pink-400 to-purple-700 py-16 text-center rounded-3xl ">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50"></div> */}
          <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row md:items-start md:space-x-6 justify-center">
            <SectionCentered
              id="experience"
              title="Professional Experiences"
              textColor="text-white"
            >
              <p></p>
            </SectionCentered>
          </div>
        </div>
        <ExperienceElement
          id="experience-data-engineer"
          poistion="Graduate Development Program - Data Engineer"
          entity="Government (Confidential)"
          date="Aug 2024 - Jul 2025"
          text={`• Designed ETL pipelines to extract data from diverse sources to the Enterprise Data Warehouse, resulting in a 40% reduction in data retrieval time.
                 • Implemented automated Data Quality Frameworks with rule-based validation, anomaly detection, and reconciliation pipelines, reducing manual review time and data discrepancies by 25%.
                 • Automated Data Profiling and Cleansing to maintain high-quality data within the warehouse, leading to improved analytics and decision-making.
                 • Utilized Apache Airflow for workflow orchestration, and MS SQL Server for data storage and transformation.`}
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/99/Emblem_of_Saudi_Arabia.svg"
          imageAlt="Saudi Logo"
          imageWidth={300}
          imageHeight={320}
        />
        <ExperienceElement
          id="experience-kfupm"
          poistion="Part-Time Flutter Developer"
          entity="KFUPM (King Fahd University of Petroleum and Minerals)"
          date="Jan 2023 - May 2023"
          text={`• Enhanced course-section distribution by 10% through Flutter scheduling interface development.
                 • Integrated front-end pages with REST APIs and local CSV files reliably.
                 • Developed a complex student schedule planner UI using Flutter improving overall usability experience.`}
          imageUrl="https://upload.wikimedia.org/wikipedia/ar/archive/3/37/20180719130502%21King_Fahd_University_of_Petroleum_%26_Minerals_Logo.png"
          imageAlt="Saudi Logo"
          imageWidth={300}
          imageHeight={320}
        />
        <ExperienceElement
          id="experience-naseej"
          poistion="Software Developer (Part-Time)"
          entity="Naseej"
          date="Aug 2022 - Feb 2023"
          text={`• Connected front-end interfaces with REST APIs and local CSV datasets efficiently.
                 • Followed Waterfall software development methodology ensuring consistent high-quality delivery.
                 • Improved overall software performance by 25% via targeted optimization and collaboration.`}
          imageUrl="https://naseej.com/wp-content/uploads/2023/08/Naseej-Logo.webp"
          imageAlt="Saudi Logo"
          imageWidth={300}
          imageHeight={320}
        />
        <ExperienceElement
          id="experience-smusicians"
          poistion="Software Engineering Intern"
          entity="sMusicians"
          date="Jul 2021 - Jun 2022"
          text={`• Supported development tasks in early-stage software projects.
                 • Gained hands-on experience with software development lifecycle and team collaboration.
                 • Worked on debugging, feature implementation, and system maintenance.
                 • Participated in Agile Scrum ceremonies aligning development with project objectives effectively.`}
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776993462/Screenshot_2026-04-24_032241_bujy2c.png"
          imageAlt="Saudi Logo"
          imageWidth={300}
          imageHeight={320}
        />
        {/* <SectionWithImageLeft
          id="experience-nassej"
          title="Nassej"
          text={`Naseej is a leading technology company specialized in Education solutions, Library Solutions, Digital Transformation, Talent Management Solutions, etc. I have been able to achieve the following:
          - Worked in a waterfall software development environment
          - Linked the front-end pages with data using REST API and local CSV files.
          - Worked with Natural Language Processing for the Arabic language.`}
          imageUrl="https://naseej.com/wp-content/uploads/2023/08/Naseej-Logo.webp"
          imageAlt="Nassej"
          imageWidth={320}
          imageHeight={320}
        />
        <SectionWithImageLeft
          id="experience-kfupm"
          title="King Fahd University of Petroleum and Minerals"
          text={`KFUPM in Saudi Arabia is a top university, established in 1963, known for excellence in science, engineering, and business. I have been able to achieve the following:
          - Implemented complex UI for student schedule planner using Flutter framework.
          - Linked the front-end pages with data using REST API and local CSV files.
          - Managed to release the software internally on desktop.`}
          imageUrl="https://upload.wikimedia.org/wikipedia/ar/archive/3/37/20180719130502%21King_Fahd_University_of_Petroleum_%26_Minerals_Logo.png"
          imageAlt="King Fahd University of Petroleum and Minerals"
          imageWidth={320}
          imageHeight={320}
        /> */}
        <div className="relative bg-gradient-to-r from-orange-400 via-pink-400 to-purple-700 py-16 text-center rounded-3xl">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50"></div> */}
          <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row md:items-start md:space-x-6 justify-center">
            <SectionCentered id="Skills" title="Skills" textColor="text-white">
              <p></p>
            </SectionCentered>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center px-4 md:flex-row mb-4 mt-4 justify-center">
          <SkillsCard
            title="Data Engineering"
            text={`• Apache Kafka
                   • Apache Airflow
                   • Spark
                   • Hadoop HDFS
                   •  Data pipelines
                   • Data warehousing
                   • Data architecture
                   • Big data systems`}
          />
          <SkillsCard
            title="Backend Development"
            text={`• Python
                   • Scala
                   • Java
                   • Rest APIs
                   • OOP
                   • Linux
                   • Git/Github`}
          />
          <SkillsCard
            title="Mobile Development"
            text={`• Flutter
                   • Dart
                   • Firebase
                   • Supabase`}
          />
        </div>
        <div className="container mx-auto flex flex-col items-center px-4 md:flex-row mb-4 mt-4 justify-center">
          <SkillsCard
            title="Tools & DevOps"
            text={`• Docker
                   • SQL (PostgreSQL, Supabase)
                   • NoSQL (Firebase)`}
          />
          <SkillsCard
            title="Product & System Thinking"
            text={`• Product Management
                   • System Design
                   • Software Architecture
                   • Agile Methodologies
                   • Business intelligence
                   • Data-driven decision making`}
          />
          <SkillsCard
            title="Soft Skills"
            text={`• Leadership
                   • Communication
                   • Problem-solving`}
          />
        </div>
        <div className="relative bg-gradient-to-r from-orange-400 via-pink-400 to-purple-700 py-16 text-center rounded-3xl">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50"></div> */}
          <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row md:items-start md:space-x-6 justify-center">
            <SectionCentered
              id="Extracurricular Activities"
              title="Extracurricular Activities"
              textColor="text-white"
            >
              <p></p>
            </SectionCentered>
          </div>
        </div>
        <ExperienceElement
          id="experience-smusicians"
          poistion="President — Intellectual & Electronic Sports Club"
          entity="King Fahd University of Petroleum and Minerals (KFUPM)"
          text={`• Led a student organization serving 3000+ members, focused on community building and student engagement.
                 • Directed club strategy and coordinated cross-functional teams to deliver events and technical initiatives.
                 • Acted as a Product Manager, bridging communication between Student Affairs and internal teams to align requirements and execution.
                 • Supervised the development committee as a Project Manager, overseeing multiple projects including:
                 - Point System, 
                 - Horof Game, 
                 - and Horof Questions Application.
                 • Awarded Best Student Club by the university president for outstanding performance and impact.`}
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776992975/ie2Logo-Dark_vioetj.png"
          imageAlt="IE Club Logo"
          imageWidth={300}
          imageHeight={320}
          linkUrl="https://www.linkedin.com/posts/fares-alnzlawe_%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87-%D8%AD%D8%B5%D9%84-%D9%86%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A7%D8%AA-%D8%A7%D9%84%D8%B0%D9%87%D9%86%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-activity-7067730772794687488--PQ-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgRp1cBTYze4JmXPHPgfBY2Ax_VY3gjQ5M"
          linkText="Check Celebration Post on LinkedIn →"
        />
        <ExperienceElement
          id="experience-smusicians"
          poistion="Hackathon Winner — Tourism Solution Project"
          entity="Google Developer Student Clubs (GDSC) - Flutter Weekend Hackathon"
          text={`• Formed and collaborated with a team in a fast-paced hackathon environment.
                 • Designed and developed a solution connecting tourists with local residents to enhance travel experiences.
                 • Built and delivered a functional application prototype within 36 hours.
                 • Led the development of the core application flow and main user scenarios.
                 • Achieved 1st place, demonstrating strong execution, teamwork, and problem-solving under time constraints.`}
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776993123/IMG_0659_m9jkre.jpg"
          imageAlt="Saudi Logo"
          imageWidth={300}
          imageHeight={320}
          linkUrl="https://github.com/FaresFouziNZ/FlutterWeekend"
          linkText="View Project's Repositry →"
        />
        <ExperienceElement
          id="experience-smusicians"
          poistion="Data Engineering Nano Degree (In Progress)"
          entity="IBM"
          text={`• Currently completing a structured program covering data engineering fundamentals including data pipelines, databases, and large-scale data processing.
                 • Gaining hands-on experience with ETL workflows, data modeling, and storage systems.
                 • Applying learned concepts to real-world projects involving streaming and batch processing.
                 `}
          imageUrl="https://cdn.worldvectorlogo.com/logos/ibm.svg"
          imageAlt="Saudi Logo"
          imageWidth={300}
          imageHeight={320}
        />
        {/* <SectionWithLink
          id="projects"
          title="Intellectual and Electronic Sports Club President"
          text="Intellectual and Electronic Sports Club at King Fahd University of Petroleum and Minerals focuses on creating a community for gamers in KFUPM and reducing the stress on students.
          I have been able to improve social skills dealing with more than 3000 students. Played the role of a Product manager between students affairs administrations and Club's organizers.
          Managed to win Best Student Club award presented by university president. I kept acting as the Project manager for the development committee. Supervising Point system project, Horof game, and Horof questions application."
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776992975/ie2Logo-Dark_vioetj.png"
          imageAlt="Intellectual and Electronic Sports Club President"
          imageWidth={320}
          imageHeight={320}
          linkUrl="https://www.linkedin.com/posts/fares-alnzlawe_%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87-%D8%AD%D8%B5%D9%84-%D9%86%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A7%D8%AA-%D8%A7%D9%84%D8%B0%D9%87%D9%86%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-activity-7067730772794687488--PQ-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgRp1cBTYze4JmXPHPgfBY2Ax_VY3gjQ5M"
          linkText="Check the LinkedIn post about the club's achievements"
        /> */}
        {/* <SectionWithImageLeft
          id="what-else"
          title="Intellectual and Electronic Sports Club President"
          text="Intellectual and Electronic Sports Club at King Fahd University of Petroleum and Minerals focuses on creating a community for gamers in KFUPM and reducing the stress on students.
          I have been able to improve social skills dealing with more than 3000 students. Played the role of a Product manager between students affairs administrations and Club's organizers.
          Managed to win Best Student Club award presented by university president. I kept acting as the Project manager for the development committee. Supervising Point system project, Horof game, and Horof questions application."
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776992975/ie2Logo-Dark_vioetj.png"
          imageAlt="Intellectual and Electronic Sports Club President"
          imageWidth={320}
          imageHeight={320}
        /> */}
        {/* <SectionWithImageLeft
          id="what-else-olo"
          title="Olo's Digital Product Management Bootcamp"
          text="Earned a certification in digital product management in Olo's bootcamp. Supervised by Mr.Faisal Abduljabbar. 
          Learned the basics of product management, including user research, product design, and product development.
          familiarized with the product management tools and techniques.
          Finished the bootcamp with a final project that was a mobile application for events management."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/dia/yxu/p5h/cropped-cropped-Asset-55%404x-8.png"
          imageAlt="Olo's Digital Product Management Bootcamp"
          imageWidth={320}
          imageHeight={320}
        /> */}
        {/* <SectionWithLink
          id="projects"
          title="Winning Flutter Weekend Hackathon"
          text="Formed a team with 4 random participants. Built a solution in the tourism field to connect tourists with local citizens. Developed the main scenario of the application within 36 hours, writing about 7500 lines of code. Won the hackathon and took first place."
          imageUrl="https://res.cloudinary.com/ddzloqkwx/image/upload/v1776993123/IMG_0659_m9jkre.jpg"
          imageAlt="Hackathon Image"
          imageWidth={320}
          imageHeight={320}
          linkUrl="https://github.com/FaresFouziNZ/FlutterWeekend"
          linkText="Check Github Repository"
        /> */}
        {/* <SectionWithImageLeft
          id="what-else-olo"
          title="Data Analysis Nano Degree"
          text="I started this nano degree to pursue my passion in the data analysis
        field. Through hands-on projects and real-world datasets, I
        developed skills in data wrangling, statistical analysis, and
        machine learning, enabling me to uncover insights and make
        data-driven decisions."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/cme/fuu/j5q/google-logo-9808.png"
          imageAlt="Olo's Digital Product Management Bootcamp"
          imageWidth={320}
          imageHeight={320}
        />
        <SectionWithLink
          id="projects"
          title="Olo's Digital Product Management Bootcamp"
          text="Earned a certification in digital product management in Olo's bootcamp. Supervised by Mr.Faisal Abduljabbar. 
          Learned the basics of product management, including user research, product design, and product development.
          familiarized with the product management tools and techniques.
          Finished the bootcamp with a final project that was a mobile application for events management."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/dia/yxu/p5h/cropped-cropped-Asset-55%404x-8.png"
          imageAlt="Olo Image"
          imageWidth={320}
          imageHeight={320}
          linkUrl="https://drive.google.com/file/d/10VSvx8se8dYhjLPHJ4iIl2_AQVfkzSVa/view"
          linkText="Check the capstone project"
        /> */}
      </main>
      <Footer />
    </div>
  );
}
