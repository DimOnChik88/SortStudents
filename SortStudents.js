let fs = require('fs');

function sortStudents (group,name,data) {
        fs.mkdir(`./Group${group}/${name}`, ()=>{
            console.log(`Created directory ${name}`);
        });

        fs.appendFile(
            `./Group${group}/${name}/info.txt`,
            JSON.stringify(data), 
            ()=> {
                console.log(`Info file for user ${name} added`)
        });

        fs.createReadStream(`./UserImage/${name}.jpg`)
        .pipe(fs.createWriteStream(`./Group${group}/${name}/${name}.jpg`))
}

module.exports = sortStudents;
