// untuk menambah member pada team
class Team {
    constructor() {
        this.members = [];
    }

    addMember(developer) {
        this.members.push(developer);
        console.log(`${developer.name} has been added to the team.`);
    }

    showTeamMembers() {
        console.log("Team members:");
        this.members.forEach(member => console.log(`- ${member.name}`));
    }
}

// untuk menambahkan timestamp
class Logged {
    static log(message) {
        const timestamp = new Date().toLocaleString('id-ID');
        console.log(`[${timestamp}] ${message}`);
    }
}

// Developer Class dan induk class
class Developer {
    constructor(name) {
        this.name = name;
        this.taskManager = new TaskManagement();
    }

    assignTask(task) {
        this.taskManager.addTask(task);
        Logged.log(`${this.name} assigned to ${task}`);
    }

    finishTask(task) {
        this.taskManager.completeTask(task);
        Logged.log(`${this.name} completing the task ${task}`);
    }

    showAllTasks() {
        this.taskManager.showTasks();
    }
}

// UI/UX Designer Role
class UIUXDesigner extends Developer {
    createDesign() {
        console.log(`${this.name} create user interface design...`);
    }

    createPrototype() {
        console.log(`${this.name} create a design prototype...`);
    }

    conductUserTesting() {
        console.log(`${this.name} conducting user testing...`);
    }
}

// Frontend Developer Role
class FrontendDeveloper extends Developer {
    createUI() {
        console.log(`${this.name} build user interface...`);
    }

    createAnimation() {
        console.log(`${this.name} adding animations to pages...`);
    }

    optimizePerformance() {
        console.log(`${this.name} optimize UI performance...`);
    }
}

// Backend Developer Role
class BackendDeveloper extends Developer {
    createDb() {
        console.log(`${this.name} building and managing databases...`);
    }

    manageAPI() {
        console.log(`${this.name} managing backend APIs...`);
    }

    setupServer() {
        console.log(`${this.name} setting up servers...`);
    }
}

// DevOps Engineer Role
class DevOpsEngineer extends Developer {
    deployCode() {
        console.log(`${this.name} deploying code to server...`);
    }

    setupCI_CD() {
        console.log(`${this.name} building a CI/CD pipeline...`);
    }

    monitorPerformance() {
        console.log(`${this.name} monitor server performance...`);
    }
}

// Quality Assurance Engineer Role
class QAEngineer extends Developer {

    performManualTesting() {
        console.log(`${this.name} performing manual testing...`);
    }

    performAutomationTesting() {
        console.log(`${this.name} performing automation testing...`);
    }

    logBugs() {
        console.log(`${this.name} log any bugs found...`);
    }
}

// Task Management System
class TaskManagement {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        console.log(`Task '${task}' has been added.`);
    }

    completeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log(`Task ${task} has been completed.`);
        } else {
            console.log(`Task ${task} not found.`);
        }
    }

    showTasks() {
        console.log(`Task list:`, this.tasks);
    }
}

// Project Deadline and Status
class Project {
    constructor(developer, deadline) {
        this.developer = developer;
        this.deadline = deadline;

        this.uiuxDesigner = new UIUXDesigner(developer.name);
        this.frontendDeveloper = new FrontendDeveloper(developer.name);
        this.backendDeveloper = new BackendDeveloper(developer.name);
        this.devOpsEngineer = new DevOpsEngineer(developer.name);
        this.qaEngineer = new QAEngineer(developer.name);
    }

    build() {
        if (this.developer instanceof UIUXDesigner) {
            this.developer.createDesign();
            this.developer.createPrototype();
            this.developer.conductUserTesting();
        } else if (this.developer instanceof FrontendDeveloper) {
            this.developer.createUI();
            this.developer.createAnimation();
            this.developer.optimizePerformance();
        } else if (this.developer instanceof BackendDeveloper) {
            this.developer.createDb();
            this.developer.manageAPI();
            this.developer.setupServer();
        } else if (this.developer instanceof DevOpsEngineer) {
            this.developer.deployCode();
            this.developer.setupCI_CD();
            this.developer.monitorPerformance();
        } else if (this.developer instanceof QAEngineer) {
            this.developer.performManualTesting();
            this.developer.performAutomationTesting();
            this.developer.logBugs();
        }
        
    }

    checkDeadline() {
        const now = new Date();
        const projectDeadline = new Date(this.deadline);
        if (now > projectDeadline) {
            console.log("Project missed deadline!");
        } else {
            console.log("The project is still on deadline.");
        }
    }
}


// Menambahkan developer kedalam team
const frontendDev = new FrontendDeveloper('Alice');
const backendDev = new BackendDeveloper('Bob');
const devOpsEngineer = new DevOpsEngineer('Charlie');
const uiuxDesigner = new UIUXDesigner('Dana');
const qaEngineer = new QAEngineer('Eve');

// Membuat tim dan menambahkan developer
const team = new Team();
team.addMember(frontendDev);
team.addMember(backendDev);
team.addMember(devOpsEngineer);
team.addMember(uiuxDesigner);
team.addMember(qaEngineer);
console.log(`\n-------------\n`)
team.showTeamMembers();
console.log(`\n-------------\n`)
// Day 1
console.log('\nDay 1\n')

// menambah tugas untuk masing masing role Day 1
console.log('\nadd tasks for each role\n')
// UI/UX Designer
console.log('\nUI/UX Designer\n')
uiuxDesigner.assignTask('Create interface design');
uiuxDesigner.assignTask('Create a prototype design');
// Frontend Developer
console.log('\nFrontend Developer\n')
frontendDev.assignTask('Building a user interface');
frontendDev.assignTask('Add animation to pages');
// BackEnd Developer
console.log('\nBackEnd Developer\n')
backendDev.assignTask('building and managing databases');
backendDev.assignTask('Manage backend APIs');
// DevOps Engineer
console.log('\nDevOps Engineer\n')
devOpsEngineer.assignTask('Building CI/CD pipelines');
devOpsEngineer.assignTask('Deploying code to the server');


console.log(`\ncheck assignments on day 1\n`)
// cek tugas masing masing role
console.log("\nRemaining assignments:");
uiuxDesigner.showAllTasks();
frontendDev.showAllTasks();
backendDev.showAllTasks();
devOpsEngineer.showAllTasks();
qaEngineer.showAllTasks();

console.log(`\neach role does its own job\n`)
// Tugas UI/UX Designer
console.log('\nUI/UX Designer\n')
uiuxDesigner.createDesign();
uiuxDesigner.finishTask('Create interface design');
uiuxDesigner.createPrototype();
uiuxDesigner.finishTask('Create a prototype design');

// Tugas Frontend Developer 
console.log('\nFrontend Developer\n')
frontendDev.createUI();
frontendDev.finishTask('Building a user interface');
frontendDev.createAnimation();
frontendDev.finishTask('Add animation to pages');

// Tugas Backend Developer
console.log('\nBackend Developer\n')
backendDev.createDb();
backendDev.finishTask('building and managing databases');
backendDev.manageAPI();
backendDev.finishTask('Manage backend APIs');

// Tugas DevOps Engineer
console.log('\nDevOps Engineer\n')
devOpsEngineer.setupCI_CD();
devOpsEngineer.finishTask('Building CI/CD pipelines');
devOpsEngineer.deployCode();
devOpsEngineer.finishTask('Deploying code to the server');

console.log("\nremaining assignments:");
uiuxDesigner.showAllTasks();
frontendDev.showAllTasks();
backendDev.showAllTasks();
devOpsEngineer.showAllTasks();
qaEngineer.showAllTasks();

console.log(`\n-------------\n`)
// Day 2
console.log('\nDay 2\n')
// menambah tugas untuk masing masing role
console.log('\nadd tasks for each role\n')

// menambah tugas day 2 untuk masing masing role
console.log(`\nFrontEnd Developer\n`)
frontendDev.assignTask('optimize UI performance');
console.log(`\nBackEnd Developer\n`)
backendDev.assignTask('set up servers');
console.log(`\nDevOps Engineer\n`)
devOpsEngineer.assignTask('monitor server performance');
console.log('\nUI/UX Designer\n')
uiuxDesigner.assignTask('perform user testing');

console.log(`\ncheck assignments on day 2\n`)

console.log("\nRemaining assignments:");
uiuxDesigner.showAllTasks();
frontendDev.showAllTasks();
backendDev.showAllTasks();
devOpsEngineer.showAllTasks();
qaEngineer.showAllTasks();

console.log(`\neach role does its own job\n`)
// Tugas FrontEnd Developer
console.log('\nFront Developer\n')
frontendDev.optimizePerformance();
frontendDev.finishTask('optimize UI performance');
// Tugas BackEnd Developer
console.log('\nBackend Developer\n')
backendDev.setupServer();
backendDev.finishTask('set up servers');
// Tugas DevOps Engineer
console.log('\nDevOps Developer\n')
devOpsEngineer.monitorPerformance();
devOpsEngineer.finishTask('monitor server performance');
// Tugas UI/UX Designer
console.log('\nUI/UX Developer\n')
uiuxDesigner.conductUserTesting();
uiuxDesigner.finishTask('perform user testing');

// Menampilkan semua tugas yang tersisa untuk setiap peran
console.log("\nremaining assignments:");
frontendDev.showAllTasks();
backendDev.showAllTasks();
devOpsEngineer.showAllTasks();
uiuxDesigner.showAllTasks();
qaEngineer.showAllTasks();

console.log(`\n-------------\n`)
// Day 3
console.log('\nDay 3\n')
// menambah tugas untuk masing masing role
console.log('\nadd tasks for each role\n')

// Tugas Quality Assurance Engineer
qaEngineer.assignTask('Running manual tests');
qaEngineer.assignTask('Run automated tests');
qaEngineer.assignTask('Log any bugs found');

console.log(`\ncheck assignments on day 3\n`)
console.log("\nremaining assignments:");
frontendDev.showAllTasks();
backendDev.showAllTasks();
devOpsEngineer.showAllTasks();
uiuxDesigner.showAllTasks();
qaEngineer.showAllTasks();

console.log(`\neach role does its own job\n`)
console.log('\nQA Engineer\n')
qaEngineer.performManualTesting();
qaEngineer.finishTask('Running manual tests');
qaEngineer.performAutomationTesting();
qaEngineer.finishTask('Run automated tests');
qaEngineer.logBugs();
qaEngineer.finishTask('Log any bugs found');

console.log(`\ncek tugas Day 3\n`)

console.log("\nremaining assignments:");
uiuxDesigner.showAllTasks();
frontendDev.showAllTasks();
backendDev.showAllTasks();
devOpsEngineer.showAllTasks();
qaEngineer.showAllTasks();

console.log(`\n-------------\n`)

console.log(`\n check deadline\n`)

// Membuat proyek dengan deadline
const projectUiux = new Project(uiuxDesigner, '31-10-2024');
const projectFrontend = new Project(frontendDev, '31-10-2024');
const projectBackend = new Project(backendDev, '31-10-2024');
const projectDevOps = new Project(devOpsEngineer, '31-10-2024');
const projectQA = new Project(qaEngineer, '31-10-2024');

projectUiux.build();
console.log(`\n-------------\n`)
projectFrontend.build();
console.log(`\n-------------\n`)
projectBackend.build();
console.log(`\n-------------\n`)
projectDevOps.build();
console.log(`\n-------------\n`)
projectQA.build();

projectUiux.checkDeadline();
console.log(`\n-------------\n`)
projectFrontend.checkDeadline();
console.log(`\n-------------\n`)
projectBackend.checkDeadline();
console.log(`\n-------------\n`)
projectDevOps.checkDeadline();
console.log(`\n-------------\n`)
projectQA.checkDeadline();

