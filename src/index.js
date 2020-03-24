import StartUp from "./views";
import project from "./toDos";

const defaultProject = project("Default-List");
defaultProject.addNote("title", "description", "01012020", "urgent");

StartUp();