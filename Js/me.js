class Me {

    static = []
    constructor(name, projects, about, resume) {
        this.name = name;
        this.projects = projects;
        this.about = about;
        this.resume = resume;

        Me.all.push(this)
    }
}