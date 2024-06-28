import Image from "next/image";

const AboutAllen = () => {
  return (
    <div>
      <h1 id="section1title">About Allen Azarkian</h1>
      <div id="container">
        <div id="floated">
          <div className="card card-color-0">
            <div className="border"></div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/img/allen_azarkian.png"
              alt="allen"
            />
            <h1>Allen Azarkian</h1>
          </div>
        </div>
        <h2 id="notfloated">
          Allen’s unique blend of business acumen has equipped him to
          revolutionize the real estate landscape, notably within the
          intricacies of New York City’s dynamic market. Boasting 23 years of
          experience, he has seamlessly navigated various roles in real estate,
          such as property manager, broker, landlord, builder, and renovator. He
          holds an undergraduate degree in Finance and a Master’s in
          Architecture.
          <br />
          <br />
          Under the banner of A__k, Allen has now introduced an innovative and
          comprehensive approach to property management, focusing on compliance
          with NYC agencies. A___k addresses everything from legal uses and
          accurate tax assessments to expediting use and occupancy changes and
          overseeing ground-up projects. While traditional practices involve
          multiple vendors and consultants, Allen has opted for a multifaceted
          system focused on streamlining processes, ensuring speed, efficiency,
          and cost-effectiveness.
          <br />
          <br />
          The primary challenge within the industry stems from disparities
          between the architect&apos;s vision, the contractor&apos;s execution,
          and the expeditor&apos;s documentation. These inconsistencies often
          result in considerable delays and expenses for clients. Recognizing
          the critical significance of time in the property sector, where delays
          quickly translate into missed business opportunities and financial
          setbacks, Allen strongly emphasizes strict adherence to New York
          City&apos;s building codes and zoning regulations.
          <br />
          <br />
          To address these challenges, Allen has built a cohesive team
          comprising individuals from various real estate components,
          streamlining processes and eliminating middlemen, delays, and
          incorrect practices. Over the years, he has surrounded himself with
          like-minded individuals and negotiated with a network of vendors,
          obtaining more than 13 licenses to expedite processes and reduce
          reliance on intermediaries, thus driving down costs and time.
          <br />
          <br />
          With a wealth of hands-on experience and a well-curated network of
          trusted vendors, Allen has meticulously created and nurtured an
          efficient, seamless, and frictionless process. He effectively
          eliminates intermediaries and erroneous practices by centralizing
          various facets of the real estate industry under one umbrella.
          Allen&apos;s proactive approach extends beyond the confines of New
          York City, as he actively participates in real estate endeavors across
          multiple states, thus gaining invaluable insights into diverse city
          agencies and permitting procedures.
          <br />
          <br />
          New York City has now enabled a functional online process for both
          approvals and compliance. While this technological sophistication
          offers more convenience, it also introduces new intricate layers of
          rules, laws, and regulations not found in most cities, necessitating
          time-sensitive filings to avoid penalties, ramifications, liens, etc.
          <br />
          <br />
          Allen&apos;s strategic approach involves collecting all the necessary
          documents, ensuring accuracy, and setting up/implementing systems that
          are properly traced, monitored, and executed. Allen remains committed
          to leveraging technology and obtaining licenses expedites all relevant
          processes, reduces cost, and reduces the need for intermediaries,
          which ultimately benefits property owners and managers.
        </h2>
      </div>
    </div>
  );
};

export default AboutAllen;
