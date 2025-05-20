import type { JSX } from "react";

const Project = (): JSX.Element => {
  return(
    <>
    <table className ="border-collapse border border-gray-400 w-full">
  <thead>
    <tr>
      <th className ="border border-gray-300 ...">Project</th>
      <th className ="border border-gray-300 ...">Work Experience</th>
      <th className="border border-gray-300 ...">Education</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 w-1/3 p-6">Quiz App
                Countdown Timer
                OpenSource Work
                Contributed to 50 opensource
                Product Upcoming Page
                projects.
                </td>
      <td className="border border-gray-300 grid-cols-2">Made my own projects with 200 GitHub Stars.Visit my GitHub Profile</td>
      <td className="border border-gray-300 w-1/3 p-6 ">
        Graduated with 3.76 out of <br></br> 4
            CGPA. Won Acme Hackathon.
            <br />Organized 30 sessions.
            <br />Courses I took:
                
                <br />
                <ol>
                    <li> - Object Oriented Programming</li>
                    <li> - Data Structures and Algorithms </li>
                    <li> - Web Engineering</li>
                    <li> - Artificial Intelligence </li>
                    <li> - Human Computer Interaction </li>
                    <li> - Computer Graphics </li>
                    <li> - Database Management Systems</li>
                    <li> - Distributed Database Systems</li>
                     <li> - Discreet Mathematics</li>
                </ol>
                
            </td>
    </tr>
    <tr>
      <div>
          <td className="border border-gray-300 ...">Ohio</td>
          <td className="border border-gray-300 ...">Ohio</td>
          <td className="border border-gray-300 ...">Columbus</td>
      </div>
    </tr>
    <tr>
      <td className="border border-gray-300 ...">Michigan</td>
      <td className="border border-gray-300 ...">Michigan</td>
      <td className="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
    </>
  )
}
export default Project;