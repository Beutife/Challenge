import type { JSX } from "react";

const Project = (): JSX.Element => {
  return (
    <div className="font-poppins p-4">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <table className="border-collapse border border-gray-400 w-full text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="  p-4 font-semibold">Project</th>
              <th className=" p-4 font-semibold">Work Experience</th>
              <th className=" p-4 font-semibold">Education</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y-2 border-gray-400">
              {/* Projects */}
              <td className="  w-1/3  ">
                <div className="border border-gray-300 p-4 ">
                  <p>Quiz App</p>
                </div>
                <div className="border border-gray-300 p-4 ">
                  <p>Open Source Work</p>
                  <p>Contributed to 50+ Open Source Projects</p>
                </div>
                <div className="border border-gray-300 p-4 ">
                  <p>Product Upcoming Page</p>
                </div>
                <div className="border border-gray-300 p-4">
                  <p>Ohio</p>
                </div>
              </td>

              {/* Work Experience */}
              <td className="border-x border-gray-300 w-1/3 ">
                <div className="border-x border-gray-300 p-6 ">
                  <p>Built 200-star GitHub projects</p>
                </div>
                <div className="border border-gray-300 p-4">
                  <p>Visit my GitHub profile</p>
                </div>
              </td>

              {/* Education */}
              <td className="border-x border-gray-300 w-1/3 p-4 space-y-2">
                <p>Graduated with 3.76 / 4 CGPA</p>
                <p>Won Acme Hackathon</p>
                <p>Organized 30 sessions</p>
                <p className="mt-2 font-semibold">Courses:</p>
                <ul className="list-disc list-inside pl-2">
                  <li>Object Oriented Programming</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Web Engineering</li>
                  <li>Artificial Intelligence</li>
                  <li>Human Computer Interaction</li>
                  <li>Computer Graphics</li>
                  <li>Database Management Systems</li>
                  <li>Distributed Database Systems</li>
                  <li>Discrete Mathematics</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {/* Projects */}
        <section className="border border-gray-300 rounded-lg p-4 space-y-3">
          <h3 className="font-semibold text-lg mb-2">Projects</h3>
          <div className="border border-gray-300 p-2 rounded">
            <p>Quiz App</p>
          </div>
          <div className="border border-gray-300 p-2 rounded">
            <p>Open Source Work</p>
            <p>Contributed to 50+ Open Source Projects</p>
          </div>
          <div className="border border-gray-300 p-2 rounded">
            <p>Product Upcoming Page</p>
          </div>
          <div className="border border-gray-300 p-2 rounded">
            <p>Ohio</p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="border border-gray-300 rounded-lg p-4 space-y-3">
          <h3 className="font-semibold text-lg mb-2">Work Experience</h3>
          <div className="border border-gray-300 p-2 rounded">
            <p>Built 200-star GitHub projects</p>
          </div>
          <div className="border border-gray-300 p-2 rounded">
            <p>Visit my GitHub profile</p>
          </div>
        </section>

        {/* Education */}
        <section className="p-4">
          <h3 className="font-semibold text-lg mb-2">Education</h3>
          <p>Graduated with 3.76 / 4 CGPA</p>
          <p>Won Acme Hackathon</p>
          <p>Organized 30 sessions</p>
          <p className="mt-3 font-semibold">Courses:</p>
          <ul className="list-disc list-inside text-sm pl-4 mt-1">
            <li>Object Oriented Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Web Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Human Computer Interaction</li>
            <li>Computer Graphics</li>
            <li>Database Management Systems</li>
            <li>Distributed Database Systems</li>
            <li>Discrete Mathematics</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Project;
