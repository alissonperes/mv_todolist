import StartUp from "./views";
import project from "./toDos";

const defaultProject = project("Default-List");
defaultProject.addNote("title1", "description", "01012020", "urgent");
defaultProject.addNote("title12", "description", "01012020", "urgent");
defaultProject.addNote("title123", "description", "01012020", "urgent");
defaultProject.addNote("title1234", "description", "01012020", "urgent");
StartUp();
