import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

function Projects() {
  const styles = { color: "#F34E29" };
  const projects = [
    {
      id: 1,
      title: "Todo-list",
      repositoryLink: "https://github.com/afzbehroz/Todolist",
    },
    {
      id: 2,
      title: "Radio",
      repositoryLink:
        "https://github.com/afzbehroz/Radio-player/tree/main/Radio-player",
    },
  ];

  return (
    <section className="flex justify-center">
      <div className="container-fluid ml-0 dark:bg-blue-900 self-start">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="text-3xl font-semibold mb-6 ml-5">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="shadow-xl md:shadow-2xl rounded-md p-6 dark:bg-blue-900 "
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-white mb-4 text-lg">
                  A simple {project.title}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg hover:underline shadow-lg text-white px-4 py-2"
                  >
                    View Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
