import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/icon-github.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github EXplorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" type="text" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="/repositories">
        <img
          src="https://avatars.githubusercontent.com/u/52923100?v=4"
          alt="Lucas Xavier"
        />
        <div>
          <strong>Lucas0019/react-completo</strong>
          <p>Curso de React.js Completo - Rocketseat</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="/repositories">
        <img
          src="https://avatars.githubusercontent.com/u/52923100?v=4"
          alt="Lucas Xavier"
        />
        <div>
          <strong>Lucas0019/react-completo</strong>
          <p>Curso de React.js Completo - Rocketseat</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="/repositories">
        <img
          src="https://avatars.githubusercontent.com/u/52923100?v=4"
          alt="Lucas Xavier"
        />
        <div>
          <strong>Lucas0019/react-completo</strong>
          <p>Curso de React.js Completo - Rocketseat</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
