import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="frontEndList">
        <h4>Front End</h4>
        <ul className="frontEndSkills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Handlebars.js</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Materialize</li>
          <li>Material UI</li>
        </ul>
      </div>
      <div className="backEndList">
        <h4>Back End</h4>
        <ul className="backEndSkills">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GraphQL</li>
          <li>NoSQL</li>
          <li>MySQL</li>
          <li>Jest</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Sequelize</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
