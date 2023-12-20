import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../context/SkillContext";

const SkillIndex = () => {
  const { skills, getSkills, deleteSkill } = useContext(SkillContext);
  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="mt-12 ">
      <div className="flex justify-end m-2 p-2">
        <Link
          to="/skills/create"
          className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
        >
          New skill
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => {
              return (
                <tr
                  key={skill.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {skill.name}
                  </th>
                  <td className="px-6 py-4">{skill.slug}</td>
                  <td className="px-6 py-4 space-x-2">
                    <Link
                      to={`${skill.id}/edit`}
                      className="m-2 p-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className="m-2 p-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillIndex;
