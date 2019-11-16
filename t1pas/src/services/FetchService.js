import LoginService from "./LoginService";
import LoginControl from './LoginControl'
import InscricaoService from './InscricaoService';
import TeamService from './TeamService';
import StudentsService from './StudentsService';

class FetchService {

  login = async (login) => {
    this.LoginService = new LoginService();
    return this.LoginService.login(login);
  }

  setLogin = async (login) => {
    this.LoginControl = new LoginControl();
    return this.LoginControl.set(login);
  }

  getLogin = async () => {
    this.LoginControl = new LoginControl();
    return this.LoginControl.get();
  }

  addInscricao = async () => {
    this.InscricaoService = new InscricaoService();
    const login = await this.getLogin();
    if (login === false) {
      return false;
    } else {
      const res = await this.InscricaoService.Add(login);
      if (res === true) {
        return true;
      } else {
        return false;
      }
    }
  }

  removeInscricao = async () => {
    this.InscricaoService = new InscricaoService();
    const login = await this.getLogin();
    if (login === false) {
      return false;
    } else {
      const res = await this.InscricaoService.Remove(login);
      if (res === true) {
        return true;
      } else {
        return false;
      }
    }
  }

  getTeam = async () => {
    this.TeamService = new TeamService();
    const login = await this.getLogin();
    if (login === false) {
      return false;
    } else {
      const res = await this.TeamService.get(login);
      if (res === false) {
        return false;
      } else {
        return res;
      }
    }
  }

  cleanTime = async () => {
    this.TeamService = new TeamService();
    const login = await this.getLogin();
    if (login === false) {
      return false;
    } else {
      const res = await this.TeamService.clean(login);
      if (res === false) {
        return false;
      } else {
        return res;
      }
    }
  }

  editTime = async (arrayData) => {
    this.TeamService = new TeamService();
    const login = await this.getLogin();
    if (login === false) {
      return false;
    } else {
      const res = await this.TeamService.edit(login, arrayData);
      if (res === false) {
        return false;
      } else {
        return res;
      }
    }
  }

  getAllStudents = async () => {
    this.StudentsService = new StudentsService();
    const res = await this.StudentsService.getAll();
    if (res === false) {
      return false;
    } else {
      return res;
    }
  }

  getAllTeams = async () => {
    this.TeamService = new TeamService();
    const res = await this.TeamService.getAll();
    if (res === false) {
      return false;
    } else {
      return res;
    }
  }

  setCurrentStudent = async (currentStudent) => {
    this.StudentsService = new StudentsService();
    this.StudentsService.setCurrentStudent(currentStudent);
  }

  getCurrentStudent = async () => {
    this.StudentsService = new StudentsService();
    return this.StudentsService.getCurrentStudent();
  }

  getSpecificTeam = async () => {
    const currentStudent = await this.getCurrentStudent();
    if (currentStudent === false) {
      return false
    } else {
      this.StudentsService = new StudentsService();
      const res =  this.StudentsService.getSpecificTeam(currentStudent);
      if (res === false) {
        return false
      } else {
        return res;
      }
    }
  }

  avaliate = async (arrayData) => {
    const currentStudent = await this.getCurrentStudent();
    if (currentStudent === false) {
      return false
    } else {
      this.StudentsService = new StudentsService();
      const res = this.StudentsService.avaliate(currentStudent, arrayData);
      if (res === false) {
        return false
      } else {
        return res;
      }
    }
  }
}
export default FetchService;
